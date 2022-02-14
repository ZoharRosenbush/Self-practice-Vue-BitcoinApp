<script>
import { contactService } from "../services/contact.service"
import ContactList from "../components/ContactList.vue"
import ContactFilter from "../components/ContactFilter.vue"

export default {
    components: {
        ContactList,
        ContactFilter

    },
    data() {
        return {
            currFilterBy: null
        }
    },
    methods: {
        setFilter(filterBy) {
            this.currFilterBy = filterBy
        }
    },
    computed: {
        contacts() {
            return this.$store.getters.contacts
        },
        contactsToShow() {
            if (!this.currFilterBy) return this.contacts
            const regex = new RegExp(this.currFilterBy.name, 'i')
            return this.contacts.filter(contact => {
                return regex.test(contact.name) && contact.phone.includes('' + this.currFilterBy.phone)
            })

        }
    }
}
</script>

<template>
    <section class="contact-app">
        <ContactFilter @set-filter="setFilter" />
        <ContactList v-if="contacts" :contacts="contactsToShow" />
    </section>
</template>