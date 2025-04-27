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
        },
      });

      if (signUpError) throw signUpError;

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
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Hàm kiểm tra phiên hiện tại
  const checkSession = async () => {
    try {
      loading.value = true;
      error.value = null;

      const { data } = await supabase.auth.getSession();

      session.value = data.session;
      user.value = data.session?.user || null;

      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Theo dõi thay đổi trạng thái xác thực
  supabase.auth.onAuthStateChange((event, currentSession) => {
    session.value = currentSession;
    user.value = currentSession?.user || null;
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
  };
}
