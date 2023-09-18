<script>

import {store} from '../data/store';

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
      <div class="col" v-for= "mostPopular in store.MostPopularMovies">
        <div class="card-img">
             <img :src="mostPopular.image" class="card-img-top" alt="...">
        </div>
         <div class="card-body">
            <h5> {{  mostPopular.title  }}</h5>
            <p> <span>Titolo originale: </span> {{ mostPopular.originalTitle }}</p>
            <p> <span>Lingua originale: </span> {{ mostPopular.language }}</p>
            <p> <span>Voto: </span> {{ mostPopular.vote}}</p>
        </div>
    </div>
  </div>
</template>

<style lang=scss scoped>

</style>