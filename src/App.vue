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

        fetchApi(endpoint, callback) {

            const config = {
                params: {
                    api_key: apiKey,
                    language: 'it',
                    query: store.filters.nameFilter
                }
            }

            axios.get(apiUri + endpoint, config)
                .then(callback)
                .catch(err => console.error(err))
        },

        // Fetch movies from TMDB Api
        fetchMovies(endpoint = 'search/movie') {

            this.fetchApi(endpoint, ({ data }) => {
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
            });
        },

        // Fetch series from TMDB Api
        fetchSeries(endpoint = 'search/tv') {

            this.fetchApi(endpoint, ({ data }) => {
                // Get movies data
                console.log(data);
                store.series = data.results.map(serie => {
                    const { id, name, original_name, original_language, vote_average } = serie;
                    return {
                        id,
                        title: name,
                        originalTitle: original_name,
                        originalLanguage: original_language,
                        voteAverage: vote_average
                    };
                });
            });
        },


        /*
        * FILTERING
        */

        // Update name filter and fetch new results
        searchMoviesByName(name) {
            store.filters.nameFilter = name;

            //this.fetchMovies();

            this.fetchSeries();
        }
    }

}
</script>


<template>
    <AppHeader @name-filter-submit="searchMoviesByName" />

    <AppMain />
</template>


<style></style>