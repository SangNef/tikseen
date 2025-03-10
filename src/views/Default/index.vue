<template>
    <div
        class="w-100 h-[100vh] max-md:w-full relative"
        :style="{
            backgroundImage: `url('src/assets/imgs/home.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }">
        <div class="absolute bottom-25 w-full flex justify-center">
          <button class="w-[82%] h-13 bg-[#fe4a70] text-white text-[17px] border-none" @click="navigateToLogin">Đăng nhập/Đăng ký</button>
        </div>  
      </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/login');
  };
</script>
