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
        }
    }

}
</script>


<template>
    <AppHeader @name-filter-submit="fetchMoviesDb('search/movie')" />

    <AppMain />
</template>


<style></style>