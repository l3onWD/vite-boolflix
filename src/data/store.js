import { reactive } from "vue";

export const store = reactive({
    movies: [],
    series: [],
    pages: {},
    filters: { nameFilter: '' }
});