<script>
import { contactService } from '../services/contact.service.js'
export default {
    data() {
        return {
            contact: null
        }
    },
    async created() {
        const { id } = this.$route.params
        console.log('the id', this.$route.params);
        if (id) {
            this.contact = await contactService.getById(id)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    },
    methods: {
        async saveContact() {
            await this.$store.dispatch({ type: 'saveContact', contactToSave: this.contact });
        }
    },
    computed: {
        btnTxt() {
            return this.contact._id ? 'Save' : 'Add'
        }
    }

}
</script>

<template>
    <section class="edit-contact">
        <form @submit.prevent="saveContact" class="flex column">
            <input
                class="designed-input-darkmode"
                type="text"
                placeholder="Name"
                v-model="contact.name"
            />
            <input
                class="designed-input-darkmode"
                type="text"
                placeholder="Phone"
                v-model="contact.phone"
            />
            <input
                class="designed-input-darkmode"
                type="email"
                placeholder="Email"
                v-model="contact.email"
            />
            <button>{{ btnTxt }}</button>
        </form>
    </section>
</template>

