<template>
  <div class="w-80 h-[calc(100vh-40px)] bg-cyan-950 overflow-y-auto p-4 space-y-2">
    <h3 class="text-2xl text-[white] font-semibold">Settings</h3>
    <router-link
      v-for="(item, index) in menuItems"
      :key="index"
      :href="item.href"
      class="block text-white py-2 px-3 rounded hover:bg-cyan-800 transition cursor-pointer">
      {{ item.label }}
    </router-link>
  </div>
</template>

<script setup>
const menuItems = [
  {
    label: 'Install LiveChat',
    href: '#',
  },
  {
    label: 'Email by HelpDesk',
    href: '#',
  },
  {
    label: 'Facebook Messages',
    href: '#',
  },
  {
    label: 'Apple Messages',
    href: '#',
  },
  {
    label: 'Chat page',
    href: '#',
  },
  {
    label: 'Customization',
    href: '#',
  },
  {
    label: 'Language',
    href: '#',
  },
  {
    label: 'Availability',
    href: '#',
  },
  {
    label: 'Welcome screen',
    href: '#',
  },
  {
    label: 'Pre-chat form',
    href: '#',
  },
];
</script>

<style></style>
