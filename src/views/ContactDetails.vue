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
    },
    methods: {
        contactUpdated(updatedContact) {
            this.contact = updatedContact
        }
    }
}
</script>

<template>
    <section v-if="contact" class="contact-details" >
        <h1>Contact Details</h1>
        <h2>{{ contact.name }}</h2>
        <h6>{{ contact.phone }}</h6>
        <h6>{{ contact.email }}</h6>
        <RouterLink to="/contacts">Back</RouterLink>
        <RouterLink :to="`/contacts/${contact._id}/edit`">Edit</RouterLink>
        <RouterView @contactUpdated="contactUpdated" />
    </section>
</template>