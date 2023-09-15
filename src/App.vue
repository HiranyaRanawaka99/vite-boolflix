<script>

// MY DATA STORE
import store from './components/data/store';

// Import components
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      store,
    }
  },
  
components: { AppHeader, AppMain }

}
</script>


<template>
  <div class="wrapper">
    <AppHeader/>
    <AppMain/>
  </div>
</template>


<style lang="scss">
@use './assets/scss/general.scss';
@use './assets/scss/partials/variable' as *;

</style>