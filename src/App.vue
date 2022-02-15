<script>

import NewCmp from './components/NewCmp.vue';
import Home from './views/Home.vue';
import AppHeader from './components/AppHeader.vue';
import ContactApp from './views/ContactApp.vue';

export default {
  data() {
    return {}

  },
  async created() {
    await this.$store.dispatch({ type: 'loadContacts' })

  },
  components: {
    NewCmp,
    Home,
    AppHeader,
    ContactApp
  },
}
</script>

<template>
  <section class="app-layout">
    <AppHeader />
    <RouterView />
    <!-- <AppFooter /> -->
  </section>
</template>

<style lang="scss">

</style>
