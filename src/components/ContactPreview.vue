<script>
export default {
    props:{
        contact: Object
    },
    methods:{
        onRemoveContact(contactId){
            this.$emit('remove', contactId);
        }
    }
}
</script>

<template>
<section class="contact-preview flex column align-center justify-center">
    <button @click.prevent="onRemoveContact(contact._id)" class="close-btn-darkmode">X</button>
    <div class="robohash-container">
        <img :src="`https://robohash.org/${contact.name}?set=set5`" alt="contact" />
    </div>
    <h1 class="contact-name">
        {{contact.name}}
    </h1>
</section>
    
</template>