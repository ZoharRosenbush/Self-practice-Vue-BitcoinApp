<script>
import ContactList from '../components/ContactList.vue'
import ContactFilter from '../components/ContactFilter.vue'

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
        },
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
        <section class="app-controllers flex justify-between">
            <ContactFilter @set-filter="setFilter" />
            <RouterLink class="clean-link" to="/contacts/edit">Add contact</RouterLink>
        </section>
        <ContactList v-if="contacts" :contacts="contactsToShow" />
        <RouterView />
    </section>
</template>