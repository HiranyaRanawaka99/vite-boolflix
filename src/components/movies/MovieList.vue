<script>
// MY DATA STORE
import { store } from '../data/store';

// COMPONENTS
import MovieCard from './MovieCard.vue';

export default {
    data() {
        return {
            store,
        };
    },

    components: { MovieCard }
}

</script>


<template>

    <div class="row g-2 row-cols-2 row-cols-md-3 row-cols-lg-4">
        <MovieCard
            v-for = "movie in store.movies"
            :key="movie.id"
            :movie = "movie"
        > 
        </MovieCard>
    </div>

</template>


<style lang="scss" scoped>

</style>