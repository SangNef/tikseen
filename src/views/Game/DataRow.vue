<template>
    <div class="w-full flex justify-between gap-2.5 h-[95px] items-center">
        <div
            v-for="(num, index) in items.number"
            :key="index"
            :class="[gridClass, selectedIndexes.includes(index) ? 'bg-red-500 text-white' : 'bg-white text-black']"
            class="border border-[#e5e5e5] py-[7px] rounded-[10px] flex flex-col justify-between h-[75px] cursor-pointer"
            @click="toggleSelection(index)"
        >
            <p class="text-[15px] px-[2.5px] pb-5" :class="selectedIndexes.includes(index) ? 'text-white' : 'text-[#c91b1c]'">
                {{ num }}
            </p>
            <span class="text-[11px] text-center bottom-2.5" :class="selectedIndexes.includes(index) ? 'text-white' : 'text-[#666]'">
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
    data() {
        return {
            selectedIndexes: []
        };
    },
    computed: {
        gridClass() {
            const count = this.items.number.length;
            return count === 2 ? "w-1/2" : count === 3 ? "w-1/3" : count === 4 ? "w-1/4" : "w-full";
        }
    },
    methods: {
        toggleSelection(index) {
            if (this.selectedIndexes.includes(index)) {
                this.selectedIndexes = this.selectedIndexes.filter(i => i !== index);
            } else {
                this.selectedIndexes.push(index);
            }
        }
    }
};
</script>
