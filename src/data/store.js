import { reactive } from "vue";

export const store = reactive({
    movies: [],
    series: [],
    genres: [],
    filters: { title: '' }
});