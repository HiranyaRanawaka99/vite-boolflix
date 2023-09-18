<script>
// Import axios
import axios from 'axios';

// MY DATA STORE
import { store } from './components/data/store';

// Import components
import AppLoader from './components/AppLoader.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

const alert = document.getElementsByClassName('alert');

export default {
  data() {
    return {
      store,
      api: {
        uriMovie: 'https://api.themoviedb.org/3/search/movie?api_key=ef16f090919bb21b4e359c3b6c66f367',
        uriSeries: 'https://api.themoviedb.org/3/search/tv?api_key=ef16f090919bb21b4e359c3b6c66f367',
        uriMostPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=ef16f090919bb21b4e359c3b6c66f367',
      }

    }
  },

  // METODI
  methods: {

    mostPopular(endpoint) {
      // Loading
      store.isLoading = true,

      axios
      .get(endpoint)
      .then((response) => {
        store.MostPopularMovies = response.data.results.map((popular)=>{
          const  {
            id,
            title,
            original_title,
            original_language,
            vote_average,
            poster_path,
          } = popular
          return { 
            id,
            title,
            originalTitle: original_title,
            language: original_language,
            vote: Math.floor(vote_average/2),
            image: "https://image.tmdb.org/t/p/w342" + poster_path,
          } 
      })
    })
    // End loading
      .finally (() => {
        store.isLoading = false;
      })


    // Errore
    .catch((error) => {
        console.error(error)
        store.mostPopular = [ ];
      })
    },
    
    // CHIAMATA API MOVIES
    fetchMovie(endpoint) {

      store.isLoading = true;

      axios
      .get(endpoint)
      .then((response) => {
        store.movies = response.data.results.map((movie) => {
          const  {
            id,
            title,
            original_title,
            original_language,
            vote_average,
            poster_path,
          } = movie
          return { 
            id,
            title,
            originalTitle: original_title,
            language: original_language,
            vote: Math.floor(vote_average/2),
            image: "https://image.tmdb.org/t/p/w342" + poster_path,
           }
        })
      })


      // // End loading
      .finally (() => {
        store.isLoading = false;
      })

      //Error
      .catch((error) => {
        console.error(error)
        store.movies = [ ];
      })
    },

    // CHIAMATA API SERIES
  fetchSeries(endpoint) {
    store.isLoading = true;
    axios
    .get(endpoint)
    .then((response) => {
      store.series = response.data.results.map((show) => {
        const {
        id,
        name,
        original_name,
        original_language,
        vote_average,
        poster_path,
        } = show
        return {
        id,
        title: name,
        orginalTitle: original_name,
        language: original_language,
        vote: Math.floor(vote_average/2),
        image: "https://image.tmdb.org/t/p/w342" + poster_path,
        }
      })

      if (store.series.length < 0) {
        alert.innerHTML = 'not found'
      }
    })

    // End Loading 
    .finally (() => {
      store.isLoading = false;
    })

      // Error
    .catch((error) => {
        console.error(error)
        store.series = [ ];
      })
  },

    //FILTRO CERCA FILM/SERIE
    searchedMovie(searchedTerm) {
      const fullApiUri = `${this.api.uriMovie}&query=${searchedTerm}`;
      this.fetchMovie(fullApiUri);

      const fullApiUriSeries = `${this.api.uriSeries}&query=${searchedTerm}`;
      this.fetchSeries(fullApiUriSeries);
    }
  },

  // CREATED
  created() {
    this.mostPopular(this.api.uriMovie)
    this.fetchMovie(this.api.uriMovie);
    this.fetchSeries(this.api.uriMostPopular);
  },

  // COMPONENTS
  components: { AppHeader, AppMain, AppLoader }

}
</script>


<template>
  <AppLoader v-if="store.isLoading"/>
  <div class="wrapper">
    <AppHeader
    searchText = 'Titoli, persone, genere'
    @searchMovie = "searchedMovie" 
    @clickMovie = "searchedMovie" />
    <AppMain/>
 </div>

</template>


<style lang="scss">
@use './assets/scss/general.scss';
@use './assets/scss/partials/variable' as *;

</style>