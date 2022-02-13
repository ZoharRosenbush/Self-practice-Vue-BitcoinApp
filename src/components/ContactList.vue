<script>
export default {
    props: {
        contacts: Array
    }

}
</script>

<template>
    <section class="contact-list">
        <ul>
            <li
                v-for="contact in contacts"
                :key="contact._id"
                class="contact-preview"
            >{{ contact.name }}</li>
        </ul>
    </section>
</template>