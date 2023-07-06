import { reactive } from "vue";

export const store = reactive({
    movies: [],
    series: [],
    pages: {},// TODO not used for now
    filters: { title: '' }
});