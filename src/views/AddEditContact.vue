<script>
import { contactService } from '../services/contact.service.js'
export default {
    data() {
        return {
            contact: null,
            isActive: true
        }
    },
    async created() {
        console.log('created');
        const { id } = this.$route.params
        if (id) {
            this.contact = await contactService.getById(id)
        } else {
            this.contact = contactService.getEmptyContact()
            console.log('else');
        }
    },
    methods: {
        async saveContact() {
            this.closeEdit()
            await this.$store.dispatch({ type: 'saveContact', contactToSave: this.contact });
            this.$emit('contactUpdated', this.contact);
        },
        closeEdit() {
            this.isActive = false
            const { id } = this.$route.params
            if (id) {
                this.$router.push(`/contacts/${id}`);
            } else {
                this.$router.push('/contacts');

            }


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
    <section
        v-if="isActive && this.contact"
        @click="closeEdit"
        class="main-screen flex justify-center align-center"
    >
        <section @click.stop class="edit-contact flex column align-center">
            <button @click="closeEdit" class="close-btn black margin">X</button>

            <form @submit.prevent="saveContact" class="flex column align-center">
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
                <button class="basic black">{{ btnTxt }}</button>
            </form>
        </section>
    </section>
</template>

<!-- v-if="isActive && this.contact" -->