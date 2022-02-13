<script>
import { contactService } from "../services/contact.service"
import ContactList from "../components/ContactList.vue"
export default {
    components: {
        ContactList,

    },
    data() {
        return {
            contacts: []
        }
    },
    async created() {
        this.contacts = await contactService.query()
    },
}
</script>

<template>
    <section class="contact-app">
        <ContactList :contacts="contacts" />
    </section>
</template>