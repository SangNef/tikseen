<template>
    <div>
        <Header title="Thông tin sự kiện" />
        <div class="px-1 pt-7 pb-3">
            <div class="bg-[#171717] min-h-[68vh] border border-[#252525] rounded-md p-1">
                <div class="px-0.5">
                    <h1 class="text-[0.36rem] font-semibold py-1 uppercase">{{ event?.title }}</h1>
                    <p class="text-[0.32rem] text-[#848e9d] !mb-2">{{ event && event.time }}</p>
                </div>
                <div>
                    <a-image
                        v-if="event"
                        :src="event.imageDetail"
                        :alt="event.title"
                        class="ant-image-img w-full block" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { events } from '@/assets/event';
import { Header } from '@/components/mobile';

const route = useRoute();
const router = useRouter();
const event = ref(null);

onMounted(() => {
    const { id } = route.params;
    const found = events.find((ev) => ev.id === id);
    if (!found) {
        router.replace({ name: 'Events' });
    } else {
        event.value = found;
    }
});
</script>

<style></style>
