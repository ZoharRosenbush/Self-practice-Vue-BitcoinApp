<script>
import ContactPreview from "./ContactPreview.vue"
export default {
    props: {
        contacts: Array
    },
    components: {
        ContactPreview
    },
    methods: {
    }

}
</script>

<template>
    <section class="contact-list">
        <ul class="clean-list flex wrap">
            <li v-for="contact in contacts" :key="contact._id">
                <RouterLink class="clean-link" :to="`/contacts/${contact._id}`">
                    <ContactPreview :contact="contact" />
                </RouterLink>
            </li>
        </ul>
    </section>
</template>