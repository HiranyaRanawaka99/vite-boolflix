import { reactive } from "vue";

export const store = reactive({

    movies: [],
    series: [],
    MostPopularMovies: [],
    isLoading: Boolean,
});


export default store;