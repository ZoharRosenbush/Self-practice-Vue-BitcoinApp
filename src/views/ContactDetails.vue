<script>
import { contactService } from "../services/contact.service.js"

export default {
    data() {
        return {
            contact: null
        }
    },
    async created() {
        console.log('creraing details');
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
    <section v-if="contact" class="contact-details flex column align-center">
        <h1>Contact Details</h1>
        <div class="robohash-container">
            <img :src="`https://robohash.org/${contact.name}?set=set5`" alt="contact" />
        </div>
        <h2>{{ contact.name }}</h2>
        <h3>{{ contact.phone }}</h3>
        <h3>{{ contact.email }}</h3>
        <div class="links-container flex">
            <RouterLink class="clean-link" to="/contacts">Back</RouterLink>
            <RouterLink class="clean-link" :to="`/contacts/edit/${contact._id}`">Edit</RouterLink>
        </div>

        <RouterView @contactUpdated="contactUpdated" />
    </section>
</template>