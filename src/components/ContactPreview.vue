<script>
export default {
    props: {
        contact: Object
    },
    methods: {
        async onRemoveContact(contactId) {
            try {
                await this.$store.dispatch({ type: 'removeContact', contactId })

            } catch (err) {
                console.log('cannot remove contact')
            }
        }
    }
}
</script>

<template>
    <section class="contact-preview flex column align-center justify-center">
        <button @click.prevent="onRemoveContact(contact._id)" class="close-btn">X</button>
        <div class="robohash-container">
            <img :src="`https://robohash.org/${contact.name}?set=set5`" alt="contact" />
        </div>
        <h1 class="contact-name">{{ contact.name }}</h1>
    </section>
</template>