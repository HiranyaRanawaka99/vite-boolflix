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
    <div class="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4 mt-3">
        <div v-for="show in store.series" class="show-card">
            <img :src="show.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5> {{  show.title  }}</h5>
                <p> <span>Titolo originale: </span> {{ show.originalTitle }}</p>
                <p class="language"> <span>Lingua originale: </span>
                    <img v-if="show.language == 'en'" src="../../assets/img/en.gif">
                    <img v-else-if="show.language == 'it'" src="../../assets/img/it.gif"/>
                    <p v-else> {{ show.language }}</p>
                </p>
                <p> 
                <span>Voto: </span> 
                <span v-for="star in show.vote" class="solidStar">
                    <font-awesome-icon icon="fa-solid fa-star"/>
                </span>
                <span v-for="star in 5 - show.vote" class="regularStar">
                    <font-awesome-icon icon="fa-regular fa-star"/>
                </span>
                </p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.show-card {
    text-align: center;
    position: relative;
    &:hover .card-body {
    display: block;
    }
    .card-body {
        position: absolute;
        top: 0;
        left: 0;

        display: none;

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

    .language > img {
        width: 20px;
        height: 15px;
    }
}
</style>