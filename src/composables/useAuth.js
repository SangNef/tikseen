import { ref } from 'vue';
import { supabase } from '../helpers';

export default function useAuth() {
  const user = ref(null);
  const session = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Hàm đăng ký người dùng mới
  const signUp = async (email, password, userData = {}) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData,
          emailRedirectTo: undefined, // Không cần redirect để xác thực email
          emailVerification: false, // Tắt yêu cầu xác thực email
        },
      });

      if (signUpError) throw signUpError;

      // Đặt email_verified = true cho user khi đăng ký
      // Chú ý: cần thiết lập trigger hoặc function ở phía Supabase để cập nhật trường này
      if (data?.user) {
        // Optional: Có thể gọi API tùy chỉnh để cập nhật trạng thái xác thực email
        // await supabase.functions.invoke('verify-email', { id: data.user.id });
      }

      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Hàm đăng nhập
  const signIn = async (email, password) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      session.value = data.session;
      user.value = data.user;

      // Lưu thông tin user vào localStorage
      if (data.user) {
        saveUserToLocalStorage(data.user);
      }

      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Hàm đăng xuất
  const signOut = async () => {
    try {
      loading.value = true;
      error.value = null;

      const { error: signOutError } = await supabase.auth.signOut();

      if (signOutError) throw signOutError;

      user.value = null;
      session.value = null;

      // Xóa thông tin user khỏi localStorage
      localStorage.removeItem('livechat_user_data');
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Hàm kiểm tra phiên hiện tại từ Supabase
  const checkSession = async () => {
    try {
      loading.value = true;
      error.value = null;

      // Kiểm tra trước từ localStorage nếu có
      const savedUser = getSavedUserFromLocalStorage();
      if (savedUser) {
        user.value = savedUser;
      }

      // Kiểm tra phiên từ Supabase
      const { data, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        throw sessionError;
      }

      if (data.session) {
        session.value = data.session;
        user.value = data.session?.user || null;

        // Nếu có user mới, cập nhật vào localStorage
        if (data.session?.user) {
          saveUserToLocalStorage(data.session.user);

          // Cập nhật thêm thông tin người dùng từ Supabase nếu cần
          await refreshUserData(data.session.user.id);
        }
      } else if (savedUser) {
        // Nếu không có phiên Supabase nhưng có user đã lưu, thử sử dụng thông tin đó
        // Kiểm tra xem thông tin còn hợp lệ không
        const lastSaved = new Date(savedUser.lastSaved);
        const now = new Date();
        const diffHours = Math.abs(now - lastSaved) / (1000 * 60 * 60);

        if (diffHours < 24) {
          // Nếu thông tin lưu trong vòng 24 giờ, tạm thời sử dụng
          user.value = savedUser;
          console.log('Sử dụng thông tin user đã lưu (không có phiên Supabase hợp lệ)');
        } else {
          // Nếu thông tin quá cũ, xóa khỏi localStorage
          localStorage.removeItem('livechat_user_data');
          user.value = null;
          session.value = null;
        }
      }

      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Hàm cập nhật thông tin người dùng từ Supabase
  const refreshUserData = async (userId) => {
    if (!userId) return;

    try {
      // Lấy thông tin chi tiết của user từ bảng users (nếu có)
      const { data, error } = await supabase.from('users').select('*').eq('id', userId).single();

      if (error) {
        console.error('Lỗi khi lấy thông tin chi tiết user:', error.message);
        return;
      }

      if (data) {
        // Cập nhật thông tin user từ users
        const updatedUser = {
          ...user.value,
          lastUpdated: new Date().toISOString(),
        };

        user.value = updatedUser;

        // Cập nhật vào localStorage
        saveUserToLocalStorage(updatedUser);
      }
    } catch (err) {
      console.error('Lỗi khi cập nhật thông tin user:', err);
    }
  };

  // Hàm kiểm tra trạng thái xác thực
  const checkAuthState = async () => {
    // Kiểm tra từ localStorage trước
    const savedUser = getSavedUserFromLocalStorage();

    // Kiểm tra từ Supabase
    const { data } = await supabase.auth.getSession();

    if (data && data.session) {
      session.value = data.session;
      user.value = data.session.user;

      // Cập nhật localStorage
      saveUserToLocalStorage(data.session.user);

      return {
        isAuthenticated: true,
        user: data.session.user,
      };
    } else if (savedUser) {
      // Kiểm tra tính hợp lệ của thông tin đã lưu
      const lastSaved = new Date(savedUser.lastSaved);
      const now = new Date();
      const diffHours = Math.abs(now - lastSaved) / (1000 * 60 * 60);

      if (diffHours < 24) {
        user.value = savedUser;
        return {
          isAuthenticated: true,
          user: savedUser,
          fromLocal: true,
        };
      } else {
        // Xóa thông tin quá cũ
        localStorage.removeItem('livechat_user_data');
      }
    }

    return {
      isAuthenticated: false,
    };
  };

  // Hàm lưu thông tin user vào localStorage
  const saveUserToLocalStorage = (userData) => {
    try {
      if (userData) {
        const userToSave = {
          ...userData,
          lastSaved: new Date().toISOString(),
        };
        localStorage.setItem('livechat_user_data', JSON.stringify(userToSave));
      }
    } catch (error) {
      console.error('Lỗi khi lưu thông tin user:', error);
    }
  };

  // Hàm lấy thông tin user từ localStorage
  const getSavedUserFromLocalStorage = () => {
    try {
      const savedUserData = localStorage.getItem('livechat_user_data');
      if (savedUserData) {
        return JSON.parse(savedUserData);
      }
      return null;
    } catch (error) {
      console.error('Lỗi khi đọc thông tin user từ localStorage:', error);
      return null;
    }
  };

  // Theo dõi thay đổi trạng thái xác thực
  supabase.auth.onAuthStateChange((event, currentSession) => {
    session.value = currentSession;
    user.value = currentSession?.user || null;

    // Cập nhật localStorage khi có thay đổi
    if (event === 'SIGNED_IN' && currentSession?.user) {
      saveUserToLocalStorage(currentSession.user);

      // Cập nhật thông tin chi tiết người dùng
      refreshUserData(currentSession.user.id);
    } else if (event === 'SIGNED_OUT') {
      localStorage.removeItem('livechat_user_data');
    } else if (event === 'USER_UPDATED' && currentSession?.user) {
      // Cập nhật thông tin khi user được cập nhật
      saveUserToLocalStorage(currentSession.user);
    }
  });

  return {
    user,
    session,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    checkSession,
    checkAuthState,
    refreshUserData,
    getSavedUserFromLocalStorage,
  };
}
