<script>

import { store } from '../data/store';

export default {
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <div class=" row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4 mt-3">
        <div class="col show-card" v-for= "mostPopular in store.MostPopularMovies">
            <img :src="mostPopular.image" class="card-img-top" alt="...">
            <div class="card-body">
            <h5> {{  mostPopular.title  }}</h5>
            <p> <span>Titolo originale: </span> {{ mostPopular.originalTitle }}</p>
            <p class="language"> 
                <span>Lingua originale: </span>
                    <img v-if="mostPopular.language == 'en'" src="../../assets/img/en.gif">
                    <img v-else-if="mostPopular.language == 'it'" src="../../assets/img/it.gif"/>
                    <p v-else> {{ mostPopular.language }}</p>
                </p>
            <p> <span>Voto: </span> {{ mostPopular.vote}}</p>
        </div>
    </div>
  </div>
</template>

<style lang=scss scoped>

</style>