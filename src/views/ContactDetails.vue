<script>
import { contactService } from "../services/contact.service.js"
export default {
    data() {
        return {
            contact: null
        }
    },
    async created() {
        const { id } = this.$route.params
        this.contact = await contactService.getById(id)
        console.log('the contact', this.contact);

    }
}
</script>

<template>
    <section v-if="contact" class="contact-details">
        <h1>Contact Details</h1>
        <h2>{{ contact.name }}</h2>
        <h6>{{ contact.phone }}</h6>
        <h6>{{ contact.email }}</h6>
        <RouterLink to="/contacts">Back</RouterLink>
    </section>
</template>