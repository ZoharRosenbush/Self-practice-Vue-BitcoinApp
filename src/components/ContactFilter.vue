<script>
export default {
    data() {
        return {
            filterBy: {
                name: '',
                phone: ''
            }
        }
    },
    methods: {
        setContactFilter() {
            this.$emit('set-filter', this.filterBy)
        }
    }
}
</script>

<template>
    <section class="filter flex wrap align-center">
        <h1>Looking for a contact?</h1>
        <input
            class="designed-input-darkmode"
            type="text"
            placeholder="Name"
            v-model="filterBy.name"
            @input="setContactFilter"
        />
        <input
            class="designed-input-darkmode"
            type="number"
            placeholder="Telephone"
            v-model="filterBy.phone"
            @input="setContactFilter"
        />
    </section>
</template>