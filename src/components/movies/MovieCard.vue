<script>

export default {
    data() {
        return {
            props: {
                movie: Object,
            }
        };
    }
}

</script>


<template>

    <div class="card col">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="movie-title"> {{  movie.title  }}</h5>
            <p class="original-title"> <span>Titolo originale: </span> {{ movie.originalLanguage }}</p>
            <p class="original-language"> <span>Lingua originale: </span> {{ movie.originalLanguage }}</p>
            <p class="popularity"> <span>Voto: </span> {{ movie.popularity}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

</template>


<style lang="scss" scoped>

</style>