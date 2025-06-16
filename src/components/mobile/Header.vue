<template>
    <div
        class="rv-nav-bar rv-nav-bar--fixed rv-hairline--bottom max-w-40 left-0 bg-primary border-b border-[#f3f3f31f] py-0.5"
        :class="{
            'rv-nav-bar--fixed': isScrolled,
            '!bg-transparent': !isScrolled,
        }"
        style="z-index: 100">
        <div class="rv-nav-bar__content">
            <div class="rv-nav-bar__left" @click="navigateBack">
                <div>
                    <span
                        role="img"
                        aria-label="arrow-left"
                        tabindex="-1"
                        class="anticon anticon-arrow-left text-white text-[0.52rem]"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="arrow-left"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg
                    ></span>
                </div>
            </div>
            <div class="rv-nav-bar__title rv-ellipsis">
                <div class="text-white">
                    <span class="text-white text-[0.42rem] font-medium whitespace-nowrap">{{ props.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
});

const isScrolled = ref(false);

const onScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
});
onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});

const router = useRouter();
function navigateBack() {
    router.back();
}
</script>

<style scope>
.bg-primary {
    --tw-bg-opacity: 1;
    background-color: rgb(18 18 18 / var(--tw-bg-opacity, 1));
}

.rv-nav-bar--fixed {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
}

.rv-nav-bar {
    position: relative;
    z-index: 1000;
    line-height: 22px;
    text-align: center;
}

.rv-nav-bar__content {
    position: relative;
    display: flex;
    align-items: center;
    height: 46px;
}

.rv-nav-bar__left {
    left: 0;
}

.rv-nav-bar__left,
.rv-nav-bar__right {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 14px;
    cursor: pointer;
}

.rv-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #323232;
    font-weight: 500;
    font-size: 16px;
}
.rv-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.rv-nav-bar__right {
    right: 0;
}
</style>
