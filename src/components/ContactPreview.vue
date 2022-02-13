<script>
export default {
    props:{
        contact: Object
    }
}
</script>

<template>
<section class="contact-preview">
    <h1 class="contact-name">
        {{contact.name}}
    </h1>
</section>
    
</template>