<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

/*** DATA ***/
import axios from 'axios';
import { apiKey, apiUri } from './data/';
import { store } from './data/store';


export default {
    components: { AppHeader, AppMain },

    methods: {
        /*
        * FETCHING
        */

        // Fetch from TMDB Api
        fetchMoviesDb(endpoint) {

            const config = {
                params: {
                    api_key: apiKey,
                    language: 'it',
                    query: store.filters.nameFilter
                }
            }

            axios.get(apiUri + endpoint, config)
                .then(({ data }) => {

                    // Get movies data
                    store.movies = data.results.map(movie => {
                        const { id, title, original_title, original_language, vote_average } = movie;
                        return {
                            id,
                            title,
                            originalTitle: original_title,
                            originalLanguage: original_language,
                            voteAverage: vote_average
                        };
                    });
                })
                .catch(err => console.error(err))
        },


        /*
        * FILTERING
        */

        // Update name filter and fetch new results
        searchMoviesByName(name) {
            store.filters.nameFilter = name;

            this.fetchMoviesDb('search/movie');
        }
    }

}
</script>


<template>
    <AppHeader @name-filter-submit="searchMoviesByName" />

    <AppMain />
</template>


<style></style>