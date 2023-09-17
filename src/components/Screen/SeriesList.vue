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
        v-for="show in store.series"
        class="show-card">
            <!-- <img :src="movie.image" class="card-img-top" alt="..."> -->
            <div 
            class="card-body">
            <h5> {{  show.title  }}</h5>
            <p> <span>Titolo originale: </span> {{ show.originalTitle }}</p>
            <p> <span>Lingua originale: </span> {{ show.language  }}</p>
            <p> <span>Voto: </span> {{ show.vote}}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.show-card {
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