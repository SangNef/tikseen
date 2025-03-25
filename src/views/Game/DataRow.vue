<template>
    <div class="w-full flex justify-between gap-2.5 h-[95px] items-center">
        <div
            v-for="(num, index) in items.number"
            :key="index"
            :class="gridClass"
            class="bg-white text-center text-black border border-[#e5e5e5] py-[7px] rounded-[10px] flex flex-col justify-between h-[75px]"
        >
            <p class="text-[15px] px-[2.5px] text-[#c91b1c] pb-5">{{ num }}</p>
            <span class="text-[11px] text-[#666] text-center bottom-2.5">
                {{ Array.isArray(items.subNumber) ? items.subNumber[index] : items.subNumber }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: Object
    },
    computed: {
        gridClass() {
            const count = this.items.number.length;
            return count === 2 ? "w-1/2" : count === 3 ? "w-1/3" : count === 4 ? "w-1/4" : "w-full";
        }
    }
};
</script>
