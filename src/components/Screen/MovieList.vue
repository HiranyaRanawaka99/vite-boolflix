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
     <div v-if="store.movies.length <= 0" class="alert alert-danger" role="alert">
        Movie/Series not found!
    </div>
    <div v-else class="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4 mt-3">
        <div v-for="movie in store.movies" class=" col">
            <div class="movie-card">
                <img :src="movie.image" class="card-img" alt="...">
                <div class="card-body">
                    <h5 class="movie-title"> {{  movie.title  }}</h5>
                    <p class="original-title"> <span>Titolo originale: </span> {{ movie.originalTitle }}</p>
                    <p class="original-language"> <span>Lingua originale: </span> {{ movie.language  }}</p>
                    <p class="popularity"> 
                        <span>Voto: </span> 
                        <span v-for="star in movie.vote" class="solidStar">
                        <font-awesome-icon icon="fa-solid fa-star"/>
                        </span>
                        <span v-for="star in 5 - movie.vote" class="regularStar">
                        <font-awesome-icon icon="fa-regular fa-star"/>
                        </span>
                        <!-- {{ movie.vote}}  -->
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.movie-card {    
    text-align: center;

    position: relative;

    &:hover .card-body {
        display: block;
    }
    .card-body {
        
        
        position: absolute;
        top:0;
        left: 0;
        
        display:none;
        
        width: 100%;
        height: 100%;
        padding: 3rem 2rem;
        background-color: black;    

        span {
            font-weight: bold;
            color: rgbA(155,155,155,0.7)
        }
        
        .solidStar {
            color: goldenrod

        }

        .regularStar {
            color:rgb(208, 204, 204);
        }
    }
}

</style>