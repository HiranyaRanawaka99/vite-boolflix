<script>

// MY DATA STORE
import store from './data/store.js';

// Import components
import MovieList from './movies/MovieList.vue';



export default {
  data() {
    return {
        store,
    }
  },


  components: { MovieList }
}

</script>


<template>

  <div class=" main container">

    <MovieList></MovieList>
  </div>

</template>


<style lang="scss" scoped>

</style>