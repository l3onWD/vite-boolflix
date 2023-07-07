<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoader from './components/AppLoader.vue';

/*** DATA ***/
import axios from 'axios';
import { api } from './data/';
import { store } from './data/store';


export default {
    components: { AppHeader, AppMain, AppLoader },

    data() {
        return {
            loaders: 0
        };
    },
    computed: {
        apiConfig() {
            return {
                params: {
                    api_key: api.key,
                    language: api.language,
                    query: store.filters.title
                }
            };
        }
    },

    methods: {
        /*
        * FETCHING
        */
        // Fetch media data from an api and store the result in an object key (with predefined properties expected)
        fetchMediaApi(endpoint, media) {

            this.loaders++;

            axios.get(api.uri + endpoint, this.apiConfig)
                .then(({ data }) => {
                    store[media] = data.results.map(item => {

                        // Expected properties (API dependent)
                        const { id, title, original_title, name, original_name, original_language, vote_average, poster_path, genre_ids } = item;


                        return {
                            id,
                            title: title || name,
                            originalTitle: original_title || original_name,
                            originalLanguage: original_language,
                            voteAverage: vote_average,
                            posterPath: poster_path,
                            genreIds: genre_ids,

                            type: media
                        };

                    });

                })
                .catch(err => console.error(err))
                .then(() => {

                    this.loaders--;
                });
        },

        // Fetch all unique genres from movies and series media
        fetchMediaGenres() {

            // Fetch movie Genres
            this.loaders++;

            axios.get(api.uri + 'genre/movie/list', this.apiConfig)
                .then(({ data }) => {

                    store.genres = data.genres;// Save results

                    // Fetch tv Genres
                    this.loaders++;

                    axios.get(api.uri + 'genre/tv/list', this.apiConfig)
                        .then(({ data }) => {

                            // Filter fetched tv genres
                            const newgenres = data.genres.filter(({ id }) => !store.genres.some(actualGenre => actualGenre.id === id));

                            // Update store
                            store.genres.push(...newgenres);

                        }).catch(err => console.error(err))
                        .then(() => {
                            this.loaders--;
                        });
                })
                .catch(err => console.error(err))
                .then(() => {
                    this.loaders--;
                });
        },


        /*
        * FILTERING
        */
        //Fetch new results
        searchMedia() {

            // Reset if title is emty without fetching
            if (!store.filters.title) {
                store.movies = [];
                store.series = [];
                return
            }

            // Fetch all media
            this.fetchMediaApi('search/movie', 'movies');
            this.fetchMediaApi('search/tv', 'series');
        }
    },

    created() {

        this.fetchMediaGenres();
    }

}
</script>


<template>
    <AppHeader @filter-submit="searchMedia" />

    <AppMain />

    <AppLoader v-if="loaders" />
</template>


<style lang="scss">
@use './assets/scss/style.scss'
</style>