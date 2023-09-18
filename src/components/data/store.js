import { reactive } from "vue";

export const store = reactive({

    movies: [],
    series: [],
    MostPopularMovies: [],
    isLoading: false,
});


export default store;