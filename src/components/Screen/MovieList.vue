<script>
// MY DATA STORE
import { store } from '../data/store';

// COMPONENTS


export default {
    data() {
        return {
            store,
        };
    },


}

</script>


<template>
    <div class="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4">
        <div 
        v-for="movie in store.movies"
        class="movie-card">
            <!-- <img :src="movie.image" class="card-img-top" alt="..."> -->
            <div 
            class="card-body">
            <h5 class="movie-title"> {{  movie.title  }}</h5>
            <p class="original-title"> <span>Titolo originale: </span> {{ movie.originalTitle }}</p>
            <p class="original-language"> <span>Lingua originale: </span> {{ movie.language  }}</p>
            <p class="popularity"> <span>Voto: </span> {{ movie.vote}}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.movie-card {
    padding: 1rem;
    text-align: center;

    .card-body {

    

        span {
            font-weight: bold;
            color: rgbA(155,155,155,0.7)
        }
    }
}

</style>