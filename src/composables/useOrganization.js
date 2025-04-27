import { ref } from 'vue';
import { supabase } from '../helpers';

export default function useOrganization() {
  const organizations = ref([]);
  const currentOrganization = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Lấy tất cả tổ chức của người dùng hiện tại
  const getUserOrganizations = async (userId) => {
    try {
      loading.value = true;
      error.value = null;

      // Lấy danh sách tổ chức từ Supabase (Row Level Security sẽ lọc theo quyền người dùng)
      const { data, error: fetchError } = await supabase.from('organizations').select('*').eq('owner_id', userId);

      if (fetchError) throw fetchError;

      organizations.value = data || [];
      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Tạo tổ chức mới
  const createOrganization = async (organizationData) => {
    try {
      loading.value = true;
      error.value = null;

      // Thêm tổ chức mới
      const { data, error: insertError } = await supabase
        .from('organizations')
        .insert([organizationData])
        .select()
        .single();

      if (insertError) throw insertError;

      organizations.value.push(data);
      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Cập nhật tổ chức
  const updateOrganization = async (id, updateData) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: updateError } = await supabase
        .from('organizations')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (updateError) throw updateError;

      // Cập nhật tổ chức trong danh sách local
      const index = organizations.value.findIndex((org) => org.id === id);
      if (index !== -1) {
        organizations.value[index] = data;
      }

      // Cập nhật currentOrganization nếu đang được chọn
      if (currentOrganization.value?.id === id) {
        currentOrganization.value = data;
      }

      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Lấy thông tin chi tiết của một tổ chức
  const getOrganizationById = async (id) => {
    try {
      loading.value = true;
      error.value = null;

      const { data, error: fetchError } = await supabase.from('organizations').select('*').eq('id', id).single();

      if (fetchError) throw fetchError;

      currentOrganization.value = data;
      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err };
    } finally {
      loading.value = false;
    }
  };

  // Thiết lập tổ chức hiện tại
  const setCurrentOrganization = (organization) => {
    currentOrganization.value = organization;
  };

  return {
    organizations,
    currentOrganization,
    loading,
    error,
    getUserOrganizations,
    createOrganization,
    updateOrganization,
    getOrganizationById,
    setCurrentOrganization,
  };
}
