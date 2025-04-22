<template>
  <div class="flex-1 overflow-y-auto p-6">
    <!-- Header document info -->
    <div class="flex items-center gap-2 mb-6">
      <DocumentIcon class="w-5 h-5 text-gray-600" />
      <h1 class="text-xl font-medium text-gray-800">Apple Messages</h1>
      <div class="ml-auto">
        <a href="#" class="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
          <QuestionMarkCircleIcon class="w-5 h-5" />
          <span>Open Help Center</span>
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="flex">
      <!-- Left content -->
      <div class="w-1/2 pr-6">
        <!-- Available in business info -->
        <div class="mb-6">
          <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">
            AVAILABLE IN BUSINESS & ENTERPRISE PLANS
          </div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">Be right where communication happens</h2>
          <p class="text-gray-600">
            Let over 1.65 billion Apple users connect with you just as they would with friends in iMessage. Your
            customer service team will chat with Apple users directly from the LiveChat Agent App.
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex gap-3 mb-6">
          <a href="#" class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            View pricing plans
          </a>
          <a href="#" class="px-4 py-2 text-blue-600 hover:text-blue-700 transition"> Learn more </a>
        </div>
      </div>

      <!-- Right content - Image -->
      <div class="w-1/2">
        <div class="relative">
          <img
            src="https://www.livechat.com/wp-content/uploads/2020/10/LiveChat-Apple-Messages-for-Business-integration.png"
            alt="Apple Messages for Business integration"
            class="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DocumentIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped></style>
