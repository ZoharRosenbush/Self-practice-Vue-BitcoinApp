<script>

import NewCmp from './components/NewCmp.vue';
import Home from './views/Home.vue';

export default {
  data() {
    return {}

  },
  components: {
    NewCmp,
    Home
  },
}
</script>

<template>
  <section class="app-layout">
    <!-- <AppHeader /> -->
    <RouterView />
    <!-- <AppFooter /> -->
  </section>
</template>
