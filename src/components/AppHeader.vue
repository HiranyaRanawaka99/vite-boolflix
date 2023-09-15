<script>

// Import axios
import axios from 'axios';

//Import my data-store
import store from './data/store';

// Import components
import SearchBar from './ui/SearchBar.vue';

export default {
  data() {
    return {
      store,
      api: {
        uriMovie: 'https://api.themoviedb.org/3/search/movie?api_key=ef16f090919bb21b4e359c3b6c66f367',
      }

    }
  },

  // METODI
  methods: {
    // Chiamata all'API 
    fetchMovie(endpoint) {
      axios
      .get(endpoint)
      .then((response) => {
        const movieData= response.data.results.map((movie) => {
          return { 
            id: movie.id,
            title: movie.title,
            originalTitle: movie.original_title,
            originalLanguage: movie.original_language,
            popularity: movie.popularity
           }
        })
        store.movies = movieData
        console.log(movieData)
        })
    },

    //Filtro cerca film tramite input 
    searchedMovie(searchedTerm) {
      const fullApiUri = `${this.api.uriMovie}&query=${searchedTerm}`;
      this.fetchMovie(fullApiUri);
    }
  },

  // CREATED
  created() {
    this.fetchMovie(this.api.uriMovie)
  },

  // COMPONENTS
  components: { SearchBar }

}
</script>


<template>

<nav>
  <div class="logo">
    <h1> BOOFLIX </h1>
  </div>
  <div class="navigate">
    <p><a href="#"> Home </a></p>
    <p><a href="#"> Serie TV </a></p>
    <p><a href="#"> Film </a></p>
    <p><a href="#"> Nuovi e popolari </a></p>
    <p><a href="#"> La mia lista </a></p>
    <p><a href="#"> Sfoglia per la lingua </a></p>
   
  </div>
  <div classs="searchbar">
    <SearchBar
    searchText = 'Titoli, persone, genere'
    @searchMovie = searchedMovie
    />
  </div>
</nav>

</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variable' as *;

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: $color-primary;
  }
  .navigate {
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
  }

}


</style>