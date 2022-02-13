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
    <section class="filter">
        <input type="text" placeholder="Name" v-model="filterBy.name" @input="setContactFilter" />
        <input
            type="number"
            placeholder="Telephone"
            v-model="filterBy.phone"
            @input="setContactFilter"
        />
    </section>
</template>