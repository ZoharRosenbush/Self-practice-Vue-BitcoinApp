<script>
export default {
    props:{
        contact: Object
    }
}
</script>

<template>
<section class="contact-preview flex column align-center justify-center">
    <button class="close-btn-darkmode">X</button>
    <div class="robohash-container">
        <img :src="`https://robohash.org/${contact.name}?set=set5`" alt="contact" />
    </div>
    <h1 class="contact-name">
        {{contact.name}}
    </h1>
</section>
    
</template>