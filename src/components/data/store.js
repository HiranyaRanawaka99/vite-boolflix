import { reactive } from "vue";

export const store = reactive({

    movies: [],
    series: [],
    MostPopularMovies: [],
    serachedTerm: '',
    isLoading: false,
});


export default store;