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
            contacts: [],
            currFilterBy: null
        }
    },
    async created() {
        this.contacts = await contactService.query()
    },
    methods: {
        setFilter(filterBy) {
            console.log('the filter by', filterBy)
            console.log('the contactrs', this.contacts);
            this.currFilterBy = filterBy

        }

    },
    computed: {
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
        <ContactList :contacts="contactsToShow" />
    </section>
</template>