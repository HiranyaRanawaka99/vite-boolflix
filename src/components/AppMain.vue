<script>

// MY DATA STORE
import { store } from './data/store.js';

// Import components
import MovieList from './Screen/MovieList.vue';
import SeriesList from './Screen/SeriesList.vue';


export default {
  data() {
    return {
        store,
    }
  },


  components: { MovieList, SeriesList }
}

</script>


<template>

  <div class=" main container mt-4">
    <hr>

    <MovieList></MovieList>
    <SeriesList></SeriesList>
    
  </div>

</template>


<style lang="scss" scoped>
</style>