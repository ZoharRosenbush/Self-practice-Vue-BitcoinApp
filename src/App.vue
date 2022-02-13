<script>

import NewCmp from './components/NewCmp.vue';
import Home from './views/Home.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {}

  },
  components: {
    NewCmp,
    Home,
    AppHeader
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
