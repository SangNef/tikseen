<template>
    <div class="w-full relative">
        <img :src="contact" alt="" class="w-full h-auto" />
        <div
            class="md:absolute md:top-1/2 md:right-[10%] relative mx-auto -mt-[30px] bg-white w-[90%] md:w-[40%] p-5 md:p-10 md:-translate-y-1/2">
            <h2 class="text-[#424d54] text-[40px] md:text-[54px] pb-5 md:pb-[30px]">Tập đoàn vingroup</h2>
            <h3 class="text-[#d13138] text-[22px] pb-2.5 font-bold">Trụ sở chính</h3>
            <p class="flex text-[12px] md:text-[16px] pb-2.5 text-[#424d54] font-sf">
                <span class="w-[129px] font-medium shrink-0"><i class="fas fa-map-marker-alt"></i> Địa chỉ:</span>
                <span class="flex-1">Số 7 Đường Bằng Lăng 1, Phường Việt Hưng, Quận Long Biên, Hà Nội</span>
            </p>
            <p class="flex text-[12px] md:text-[16px] pb-2.5 text-[#424d54] font-sf">
                <span class="w-[129px] font-medium shrink-0"><i class="fas fa-phone"></i> Điện thoại:</span>
                <span class="flex-1">+84 (24) 3974 9999</span>
            </p>
            <p class="flex text-[12px] md:text-[16px] pb-2.5 text-[#424d54] font-sf">
                <span class="w-[129px] font-medium shrink-0"><i class="fas fa-fax"></i> Fax:</span>
                <span class="flex-1">+84 (24) 3974 8888</span>
            </p>
        </div>
    </div>
    <div class="w-full max-w-[700px] mx-auto pt-[50px]">
        <div class="pt-[50px]">
            <h2 class="text-[#424d54] text-[40px] md:text-[54px] uppercase pb-[30px] leading-[1.15385] text-center">
                Liên hệ với chúng tôi
            </h2>
            <ul class="flex flex-wrap">
                <li class="w-full md:w-1/2 py-2.5 px-[14px]">
                    <input
                        type="text"
                        placeholder="Họ và tên"
                        class="w-full h-[48px] border-b border-[#a7a7a7] placeholder:text-black text-black md:text-[16px] text-[12px] font-sf" />
                </li>
                <li class="w-full md:w-1/2 py-2.5 px-[14px]">
                    <input
                        type="text"
                        placeholder="Địa chỉ"
                        class="w-full h-[48px] border-b border-[#a7a7a7] placeholder:text-black text-black md:text-[16px] text-[12px] font-sf" />
                </li>
                <li class="w-full md:w-1/2 py-2.5 px-[14px]">
                    <input
                        type="text"
                        placeholder="Điện thoại"
                        class="w-full h-[48px] border-b border-[#a7a7a7] placeholder:text-black text-black md:text-[16px] text-[12px] font-sf" />
                </li>
                <li class="w-full md:w-1/2 py-2.5 px-[14px]">
                    <input
                        type="text"
                        placeholder="Email"
                        class="w-full h-[48px] border-b border-[#a7a7a7] placeholder:text-black text-black md:text-[16px] text-[12px] font-sf" />
                </li>
                <li class="w-full md:w-1/2 py-2.5 px-[14px]">
                    <input
                        type="text"
                        placeholder="Nội dung"
                        class="w-full h-[48px] border-b border-[#a7a7a7] placeholder:text-black text-black md:text-[16px] text-[12px] font-sf" />
                </li>
            </ul>
            <div class="pt-[15px] flex justify-center">
                <button
                    class="flex items-center justify-center gap-4 h-[46px] md:h-15 bg-gradient-to-r from-[#8a1928] to-[#d42f34] hover:from-[#d13138] hover:to-[#d13138] px-[30px] text-white font-bold duration-300">
                    <span>Gửi nội dung</span>
                    <img :src="btnArW" alt="" class="h-[13px] md:h-[16px] object-cover" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import contact from "@/assets/images/bg/contact.png";
import btnArW from "@/assets/images/btn/ar-w.png";
</script>

<style></style>
