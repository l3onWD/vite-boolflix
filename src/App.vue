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
                        const { id, title, original_title, name, original_name, original_language, vote_average, poster_path } = item;

                        return {
                            id,
                            title: title || name,
                            originalTitle: original_title || original_name,
                            originalLanguage: original_language,
                            voteAverage: vote_average,
                            posterPath: poster_path,
                            cast: []
                        };

                    });

                })
                .catch(err => console.error(err))
                .then(() => {

                    this.loaders--;

                    this.fetchMediaCredits(media);
                });
        },

        //
        fetchMediaCredits(media) {
            store[media].forEach((item, i) => {

                // Get endpoint based on media fetched
                const creditsEndpoint = media === 'movies' ? `movie/${item.id}/credits` : `tv/${item.id}/credits`;

                // Fetch credits
                axios.get(api.uri + creditsEndpoint, this.apiConfig)
                    .then(({ data }) => {

                        const castList = data.cast.slice(0, 5).map(actor => actor.name);

                        store[media][i].cast = castList;

                    })
                    .catch(err => console.error(err));

            });
        },


        /*
        * FILTERING
        */
        // Update name filter and fetch new results
        searchMedia(title) {

            store.filters.title = title;

            // Reset if title is emty without fetching
            if (!title) {
                store.movies = [];
                store.series = [];
                return
            }

            // Fetch all media
            this.fetchMediaApi('search/movie', 'movies');
            this.fetchMediaApi('search/tv', 'series');
        }
    }

}
</script>


<template>
    <AppHeader @title-filter-submit="searchMedia" />

    <AppMain />

    <AppLoader v-if="loaders" />
</template>


<style lang="scss">
@use './assets/scss/style.scss'
</style>