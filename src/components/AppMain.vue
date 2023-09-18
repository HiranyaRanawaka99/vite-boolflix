<script>

// MY DATA STORE
import { store } from './data/store.js';

// Import components
import MostPopular from './Screen/MostPopular.vue';
import MovieList from './Screen/MovieList.vue';
import SeriesList from './Screen/SeriesList.vue';

export default {
  data() {
    return {
        store,
    }
  },
  components: { MostPopular, MovieList, SeriesList }
}


</script>


<template>

  <MostPopular></MostPopular>
  <MovieList></MovieList>
  <SeriesList></SeriesList>

</template>


<style lang="scss" scoped>

.random-screen {
  min-height: 100%;
  background-color: brown;
}
</style>