<template>
    <div class="max-w-100 w-full mx-auto background min-md:h-screen">
        <Toast v-show="message !== ''" :type="toastType" :message="message" />
        <div
            class="w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-[#00000080] z-99999"
            :class="showModel ? 'block' : 'hidden'">
            <div class="bg-white p-5 rounded-[5px] w-[300px] text-center relative flex flex-col">
                <span class="absolute top-2.5 right-2.5 text-[20px] cursor-pointer">×</span>
                <h2 style="font-size: calc(1.325rem + 0.9vw)" class="mb-2 font-medium [line-height:1.2]">
                    Chọn số lượng
                </h2>
                <div>
                    <label for="quantity" class="inline-block">Số lượng: </label>
                    <input
                        type="number"
                        id="quantity"
                        value="1"
                        min="1"
                        class="w-[50px] p-[5px] text-center border border-[light-dark]" />
                </div>
                <div>
                    <p class="mb-4">
                        <strong>Tổng tiền: <span id="totalPrice">10.000</span> đ</strong>
                    </p>
                </div>
                <button class="mt-[15px] p-2.5 bg-[#4caf50] text-white cursor-pointer" @click="handleBuy">
                    Xác nhận
                </button>
            </div>
        </div>
        <div
            class="flex justify-between items-center w-full h-[50px] absolute top-0 left-[50%] transform translate-x-[-50%] max-w-100 mx-auto bg-white">
            <div class="flex h-full items-center pl-2 justify-center">
                <svg
                    data-v-bd832875=""
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="icon isolate cursor-pointer"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    @click="router.go(-1)">
                    <path
                        fill="currentColor"
                        d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"></path>
                </svg>
            </div>
            <div class="navbar__content-center">
                <div class="navbar__content-title" style="color: #333; font-size: 20px">
                    {{ titles[type] || "" }}
                </div>
            </div>
            <div class="w-8"></div>
        </div>
        <div class="pt-[60px] w-full">
            <div class="relative w-full">
                <div class="relative w-full">
                    <img
                        :src="type === 1 ? homePng3 : type === 2 ? homePng4 : type === 3 ? homePng5 : homePng6"
                        alt="carousel"
                        class="w-full h-[180px]" />
                </div>
                <div class="absolute top-0 right-2.5 time text-white">
                    <span class="bg-white text-[#fe4a70] [line-height:1] rounded-[3px] text-[16px] font-bold mx-1.5">{{
                        minutes
                    }}</span
                    >:
                    <span class="bg-white text-[#fe4a70] [line-height:1] rounded-[3px] text-[16px] font-bold mx-1.5">{{
                        seconds
                    }}</span>
                </div>
                <div
                    class="donhang"
                    style="
                        position: absolute;
                        bottom: 15px;
                        display: flex;
                        justify-content: space-between;
                        left: 10px;
                        color: #fff !important;
                        background: #dd634e;
                        border-radius: 8px;
                        padding: 0 8px;
                        width: 320px;
                        z-index: 200;
                    ">
                    <div style="display: flex; flex-direction: column; width: 40%">
                        <div>Đơn đặt hàng</div>
                        <span style="font-size: 14px; font-weight: 300">20250215354<span> </span></span>
                    </div>
                    <div style="display: flex; flex-direction: column; width: 55%">
                        <div>Hàng đã thanh toán</div>
                        <span style="font-size: 14px; font-weight: 300">20250215353<span> </span></span>
                    </div>
                </div>
            </div>
            <div class="px-5 py-2.5">
                <div class="flex flex-wrap">
                    <div
                        v-for="product in products"
                        :key="product.id"
                        class="w-[50%] mb-4 flex relative"
                        :class="[
                            product.id % 2 === 0 ? 'justify-end' : 'justify-start',
                            product.type === type ? 'block' : 'hidden',
                        ]"
                        @click="handleSelectProduct(product)">
                        <div
                            :class="[
                                selectedProduct && selectedProduct.id === product.id ? 'block' : 'hidden',
                                product.id % 2 === 0 ? 'right-0' : ' right-2.5',
                            ]"
                            class="absolute top-0 flex justify-center p-1 w-[25px] bg-[#fe4a70] [border-radius:2px_4px]">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div class="flex flex-col w-[163px]">
                            <img :src="product.img" alt="product" class="w-full h-[130px] object-cover" />
                            <div
                                class="bg-title-product"
                                style="
                                    background: #fff;
                                    border-bottom-left-radius: 8px;
                                    border-bottom-right-radius: 8px;
                                    padding: 7px;
                                ">
                                <p
                                    class="text-white"
                                    style="
                                        font-size: 14px;
                                        display: -webkit-box;
                                        -webkit-line-clamp: 2;
                                        -webkit-box-orient: vertical;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        color: #333 !important;
                                        margin-bottom: 5px;
                                    ">
                                    {{ product.name }}
                                </p>
                                <span class="text-cd9047" style="color: red; font-size: 15px">{{
                                    formatPrice(product.price)
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="js-mua"
                    style="
                        margin-top: 15px;
                        padding: 0 15px;
                        width: -webkit-fit-content;
                        width: fit-content;
                        height: 35px;
                        border-radius: 6px;
                        background: linear-gradient(99deg, #ff4a71, #ff1054);
                        display: flex;
                        align-items: center;
                        color: white !important;
                        float: right;
                        font-size: 14px;
                    "
                    @click="handleToggleModel">
                    Xác nhận mua hàng
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Toast from "../../components/Toast.vue";
import homePng3 from "~/assets/imgs/shops/homepng3.png";
import homePng4 from "~/assets/imgs/shops/homepng4.png";
import homePng5 from "~/assets/imgs/shops/homepng5.png";
import homePng6 from "~/assets/imgs/shops/homepng6.png";

const route = useRoute();
const router = useRouter();

const type = computed(() => Number(route.query.type) || 0);

const titles: Record<number, string> = {
    1: "RABITY",
    2: "NPP",
    3: "VEDETTE",
    4: "KANGAROO",
};

const countdown = ref(300);
let timer: ReturnType<typeof setInterval> | null = null;

const minutes = computed(() => String(Math.floor(countdown.value / 60)).padStart(2, "0"));
const seconds = computed(() => String(countdown.value % 60).padStart(2, "0"));

const startTimer = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        if (countdown.value > 0) {
            countdown.value--;
        } else {
            countdown.value = 300; // Reset về 5 phút
        }
    }, 1000);
};

onMounted(startTimer);

onUnmounted(() => {
    if (timer) {
        clearInterval(timer);
    }
});

const products = [
    {
        id: 1,
        name: "Tất Vớ thun cotton bé trai bé gái Rabity 3129",
        img: new URL("~/assets/imgs/shops/p1.jpg", import.meta.url).href,
        price: 10000,
        type: 1,
    },
    {
        id: 2,
        name: "Nón lưỡi trai bé trai bé gái Rabity 971.003",
        img: new URL("~/assets/imgs/shops/p2.jpeg", import.meta.url).href,
        price: 70000,
        type: 1,
    },
    {
        id: 3,
        name: "Áo thun cotton bé trai ngắn tay khủng long Rabity cao cấp thoáng mát 91155",
        img: new URL("~/assets/imgs/shops/p3.jpeg", import.meta.url).href,
        price: 100000,
        type: 1,
    },
    {
        id: 4,
        name: "Bộ thun cotton bé gái ngắn tay Gấu dâu Lotso Rabity 560.013",
        img: new URL("~/assets/imgs/shops/p4.jpeg", import.meta.url).href,
        price: 160000,
        type: 1,
    },
    {
        id: 5,
        name: "Dầu Hào Sò Điệp Chinsu Chai 150g525g",
        img: new URL("~/assets/imgs/shops/p5.jpeg", import.meta.url).href,
        price: 10000,
        type: 2,
    },
    {
        id: 6,
        name: "Nước Rửa Tay Lifebuoy Chai 180g Bảo Vệ Vượt Trội, Chăm Sóc Da, Cho Tay Làm Bếp",
        img: new URL("~/assets/imgs/shops/p6.jpeg", import.meta.url).href,
        price: 30000,
        type: 2,
    },
    {
        id: 7,
        name: "Cà phê Hoà Tan Nescafe 3 in 1 (1 bịch 43 gói)",
        img: new URL("~/assets/imgs/shops/p7.jpeg", import.meta.url).href,
        price: 60000,
        type: 2,
    },
    {
        id: 8,
        name: "Nước giặt Surf 2.9kg",
        img: new URL("~/assets/imgs/shops/p8.jpeg", import.meta.url).href,
        price: 100000,
        type: 2,
    },
    {
        id: 9,
        name: "Mặt nạ đất sét sạch sâu dịu nhẹ Vedette Clay Mask 12g",
        img: new URL("~/assets/imgs/shops/p9.jpeg", import.meta.url).href,
        price: 10000,
        type: 3,
    },
    {
        id: 10,
        name: "Nước rửa tay Vedette Trà Xanh 400ml (TPM288)",
        img: new URL("~/assets/imgs/shops/p10.jpeg", import.meta.url).href,
        price: 20000,
        type: 3,
    },
    {
        id: 11,
        name: "Gel lột mũi Vedette than hoạt tính 50ml (TPM283)",
        img: new URL("~/assets/imgs/shops/p11.jpeg", import.meta.url).href,
        price: 50000,
        type: 3,
    },
    {
        id: 12,
        name: "Kem Xả Tóc Vedette Tinh Chất Bơ 400g",
        img: new URL("~/assets/imgs/shops/p12.jpeg", import.meta.url).href,
        price: 100000,
        type: 3,
    },
    {
        id: 13,
        name: "Lõi số 1 Kangaroo PP-5 micro K28",
        img: new URL("~/assets/imgs/shops/p13.jpg", import.meta.url).href,
        price: 10000,
        type: 4,
    },
    {
        id: 14,
        name: "Bình đun siêu tốc 1.5L Kangaroo KGWK15I2",
        img: new URL("~/assets/imgs/shops/p14.jpg", import.meta.url).href,
        price: 100000,
        type: 4,
    },
    {
        id: 15,
        name: "Bếp gas đôi dương kính Kangaroo KG8G1CKG8G1A - giao mẫu nhẫu nhiên",
        img: new URL("~/assets/imgs/shops/p15.jpeg", import.meta.url).href,
        price: 500000,
        type: 4,
    },
    {
        id: 16,
        name: "Lò nướng điện 32L Kangaroo KG3201",
        img: new URL("~/assets/imgs/shops/p16.jpeg", import.meta.url).href,
        price: 1000000,
        type: 4,
    },
];

const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
};

const selectedProduct = ref<(typeof products)[0] | null>(null);

const handleSelectProduct = (product: (typeof products)[0]) => {
    selectedProduct.value = product;
    console.log("selectedProduct", selectedProduct.value);
};

const showModel = ref(false);

const handleToggleModel = () => {
    if (!selectedProduct.value) {
        return;
    }
    showModel.value = !showModel.value;
};

const message = ref<string>("");
const toastType = ref<"error" | "success">("error");

const handleBuy = () => {
    if (!selectedProduct.value) {
        message.value = "Vui lòng chọn sản phẩm";
        toastType.value = "error";
        return;
    }
    showModel.value = false;
    message.value = "Thanh toán thành công!";
    toastType.value = "success";
    setTimeout(() => {
        message.value = "";
    }, 5000);
};
</script>

<style></style>
