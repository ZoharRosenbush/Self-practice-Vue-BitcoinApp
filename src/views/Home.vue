<script>

import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'

export default {
    data() {
        return {
            user: null,
            bitcoinRate: null
        }
    },
    async created() {
        this.user = await userService.getBitcoinUser()
        this.bitcoinRate = await bitcoinService.getRate()
    },
}
</script>

<template>
    <div v-if="user" class="welcome-hero align-center justify-between flex wrap">
        <div class="hero-content">
            <h1>Welcome, {{ user.username }}</h1>
            <div class="user-details">
                <p>Stay updated with all your details...</p>
                <p class="coins">Coins count: {{ user.coins }}</p>
                <p class="Rate">Bitcoin rate: {{ bitcoinRate }}</p>
            </div>
        </div>
        <div class="svg-container">
            <img src="@/assets/svgs/MoneyTransfer.svg" />
        </div>
    </div>
</template>