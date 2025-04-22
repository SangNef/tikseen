<template>
  <div class="flex-1 overflow-y-auto p-6">
    <!-- Header document info -->
    <div class="flex items-center gap-2 mb-6">
      <DocumentTextIcon class="w-5 h-5 text-gray-600" />
      <h1 class="text-xl font-medium text-gray-800">Biểu mẫu trước chat</h1>
    </div>

    <!-- Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
      <!-- Left content - Form configuration -->
      <div class="space-y-6">
        <!-- Form enable/disable toggle -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-base font-medium text-gray-800">Biểu mẫu trước chat</h3>
              <p class="text-sm text-gray-500">Yêu cầu thông tin khách trước khi bắt đầu cuộc trò chuyện</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="isPreChatFormEnabled" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <!-- Form fields config -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h3 class="text-base font-medium text-gray-800 mb-4">Trường dữ liệu</h3>

          <div v-for="(field, index) in formFields" :key="index" class="border border-gray-200 rounded-lg p-4 mb-4">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <component :is="field.icon" class="w-5 h-5 text-gray-500" />
                <h4 class="font-medium text-gray-800">{{ field.label }}</h4>
              </div>

              <div class="flex items-center gap-2">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="field.required" class="sr-only peer" />
                  <div
                    class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <button
                  @click="moveField(index, 'up')"
                  :disabled="index === 0"
                  class="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50">
                  <ChevronUpIcon class="w-4 h-4" />
                </button>
                <button
                  @click="moveField(index, 'down')"
                  :disabled="index === formFields.length - 1"
                  class="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50">
                  <ChevronDownIcon class="w-4 h-4" />
                </button>
              </div>
            </div>

            <div class="pl-7">
              <div class="flex flex-col mb-2">
                <label class="text-xs text-gray-500 mb-1">Nhãn trường</label>
                <input type="text" v-model="field.label" class="border border-gray-300 rounded-lg p-2 text-sm" />
              </div>

              <div class="flex flex-col">
                <label class="text-xs text-gray-500 mb-1">Placeholder</label>
                <input type="text" v-model="field.placeholder" class="border border-gray-300 rounded-lg p-2 text-sm" />
              </div>
            </div>
          </div>

          <button
            @click="addNewField"
            class="flex items-center justify-center gap-1 w-full py-2 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-gray-700 hover:border-gray-400">
            <PlusIcon class="w-4 h-4" />
            <span>Thêm trường mới</span>
          </button>
        </div>

        <!-- Greeting message -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h3 class="text-base font-medium text-gray-800 mb-4">Tiêu đề và thông điệp</h3>

          <div class="flex flex-col mb-4">
            <label class="text-xs text-gray-500 mb-1">Tiêu đề biểu mẫu</label>
            <input type="text" v-model="formTitle" class="border border-gray-300 rounded-lg p-2 text-sm" />
          </div>

          <div class="flex flex-col">
            <label class="text-xs text-gray-500 mb-1">Thông điệp chào mừng</label>
            <textarea v-model="formMessage" rows="3" class="border border-gray-300 rounded-lg p-2 text-sm"></textarea>
          </div>
        </div>

        <div class="text-right">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Lưu thay đổi
          </button>
        </div>
      </div>

      <!-- Right content - Preview -->
      <div>
        <h2 class="text-lg font-medium text-gray-800 mb-4">Xem trước biểu mẫu</h2>

        <div class="bg-white rounded-xl shadow-xl overflow-hidden max-w-md mx-auto">
          <div class="bg-blue-600 text-white p-4">
            <h3 class="font-medium text-lg">{{ formTitle }}</h3>
            <p class="text-sm opacity-90">{{ formMessage }}</p>
          </div>

          <div class="p-6 space-y-4">
            <div v-for="(field, index) in formFields" :key="index" class="space-y-1" v-show="field.enabled">
              <label class="text-sm font-medium text-gray-700 flex items-center gap-1">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500">*</span>
              </label>
              <input
                type="text"
                :placeholder="field.placeholder"
                class="w-full border border-gray-300 rounded-lg p-2 text-sm" />
            </div>

            <button class="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition mt-2">
              Bắt đầu chat
            </button>
          </div>
        </div>

        <div class="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div class="flex items-center gap-2 text-gray-600 mb-2">
            <InformationCircleIcon class="w-5 h-5" />
            <h4 class="font-medium">Lưu ý</h4>
          </div>
          <p class="text-sm text-gray-600">
            Thông tin thu thập từ biểu mẫu này sẽ được lưu trữ trong hệ thống và hiển thị cho nhân viên hỗ trợ của bạn.
            Hãy đảm bảo bạn có chính sách bảo mật phù hợp khi thu thập thông tin cá nhân của khách hàng.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  PlusIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  InformationCircleIcon,
  ChevronLeftIcon,
} from '@heroicons/vue/24/outline';
import useResponsive from '@/composables/useResponsive';

const { isMobile, setSettingMobileView } = useResponsive();

// Form settings
const isPreChatFormEnabled = ref(true);
const formTitle = ref('Chào mừng đến với live chat');
const formMessage = ref('Vui lòng cung cấp thông tin để chúng tôi có thể hỗ trợ bạn tốt hơn');

// Form fields
const formFields = ref([
  {
    id: 1,
    label: 'Họ và tên',
    placeholder: 'Nhập họ và tên của bạn',
    required: true,
    enabled: true,
    icon: UserIcon,
  },
  {
    id: 2,
    label: 'Email',
    placeholder: 'Nhập địa chỉ email của bạn',
    required: true,
    enabled: true,
    icon: EnvelopeIcon,
  },
  {
    id: 3,
    label: 'Số điện thoại',
    placeholder: 'Nhập số điện thoại của bạn',
    required: false,
    enabled: true,
    icon: PhoneIcon,
  },
  {
    id: 4,
    label: 'Công ty',
    placeholder: 'Nhập tên công ty của bạn',
    required: false,
    enabled: true,
    icon: BuildingOfficeIcon,
  },
]);

// Add new field
function addNewField() {
  const newId = Math.max(...formFields.value.map((f) => f.id), 0) + 1;
  formFields.value.push({
    id: newId,
    label: 'Trường mới',
    placeholder: 'Nhập thông tin',
    required: false,
    enabled: true,
    icon: ChatBubbleLeftRightIcon,
  });
}

// Move field up or down
function moveField(index, direction) {
  if (direction === 'up' && index > 0) {
    const temp = formFields.value[index];
    formFields.value[index] = formFields.value[index - 1];
    formFields.value[index - 1] = temp;
  } else if (direction === 'down' && index < formFields.value.length - 1) {
    const temp = formFields.value[index];
    formFields.value[index] = formFields.value[index + 1];
    formFields.value[index + 1] = temp;
  }
}

function handleBack() {
  setSettingMobileView('menu');
}
</script>

<style scoped>
.preview-container {
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
