<template>
  <div class="w-full pt-4 flex flex-col items-center text-sm">
    <div
      class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-2xl uppercase">
      {{ chat.name.charAt(0) }}
    </div>

    <div class="font-semibold text-base">{{ chat.name }}</div>
    <div class="text-gray-500">{{ chat.email }}</div>

    <div class="flex-col gap-1 text-center text-gray-600">
      <div v-if="location.city || location.country">{{ location.city }}, {{ location.country }}</div>
    </div>

    <!-- Bản đồ -->
    <iframe
      class="mt-4"
      width="100%"
      height="100"
      :src="`https://maps.google.com/maps?q=${chat.lat},${chat.lon}&z=15&output=embed`"
      frameborder="0"
      allowfullscreen
      loading="lazy"></iframe>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  chat: {
    type: Object,
    default: null,
  },
});

const location = ref({
  city: '',
  country: '',
});

const fetchLocationData = async () => {
  if (!props.chat || !props.chat.lat || !props.chat.lon) return;

  try {
    const geoRes = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${props.chat.lat}&lon=${props.chat.lon}`
    );
    const geoData = await geoRes.json();
    location.value.city = geoData.address.city || geoData.address.town || geoData.address.village || '';
    location.value.country = geoData.address.country || '';
  } catch (error) {
    console.error('Error fetching location data:', error);
  }
};

onMounted(() => {
  fetchLocationData();
});

watch(
  () => props.chat,
  () => {
    fetchLocationData();
  }
);
</script>
