import { reactive } from "vue";

export const store = reactive({
    movies: [],
    pages: {},
    filters: { nameFilter: '' }
});