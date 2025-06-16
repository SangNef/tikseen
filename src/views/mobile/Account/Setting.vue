<template>
    <component
        :is="
            page === 'change-nikname'
                ? ChangeNickname
                : page === 'passport-verification'
                ? PassportVerification
                : page === 'add-banking'
                ? AddBanking
                : page === 'wallet-crypto'
                ? WalletCrypto
                : page === 'change-password'
                ? ChangePassword
                : page === 'change-payment-password'
                ? ChangePaymentPassword
                : Info
        " />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import Info from './Info.vue';
import ChangeNickname from './ChangeNickname.vue';
import PassportVerification from './PassportVerification.vue';
import AddBanking from './AddBanking.vue';
import WalletCrypto from './WalletCrypto.vue';
import ChangePassword from './ChangePassword.vue';
import ChangePaymentPassword from './ChangePaymentPassword.vue';

// Lấy param page từ query
const route = useRoute();
const page = computed(() => route.query.page);
</script>
