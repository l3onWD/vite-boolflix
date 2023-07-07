<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import AppLoader from '@/components/AppLoader.vue';

/*** DATA ***/
import axios from 'axios';
import { api, mediaSettings } from '@/data/';
import { store } from '@/data/store';


export default {
    components: { AppLoader },

    data() {
        return {
            cast: [],
            loaders: 0
        };
    },

    props: {
        id: Number,
        type: String,
        title: String,
        originalTitle: String,
        originalLanguage: String,
        voteAverage: Number,
        posterPath: String,
        genreIds: Array,
        releaseDate: String
    },

    computed: {
        /*
        * FETCHING
        */
        apiConfig() {
            return {
                params: {
                    api_key: api.key,
                    language: api.language,
                }
            };
        },

        mediaEndpoint() {
            return this.type === 'movies' ? `movie/${this.id}/credits` : `tv/${this.id}/credits`;
        },


        /*
        * MISC
        */
        hasFlag() {
            return mediaSettings.languageFlags.includes(this.originalLanguage);
        },

        flagPath() {
            const url = new URL(`../../assets/img/${this.originalLanguage}.png`, import.meta.url);
            return url.href;
        },

        posterFullPath() {
            const { posterBasePath, posterSize, posterPlaceholder } = mediaSettings;

            if (!this.posterPath) return posterPlaceholder;
            return posterBasePath + posterSize + this.posterPath;
        },

        mediaVote() {
            return Math.ceil(this.voteAverage * 5 / 10);
        },

        castList() {
            return this.cast.join(', ');
        },

        genresList() {

            if (!this.genreIds.length) return '-';

            const genreNames = this.genreIds.map(genreId => {
                return store.genres.find(({ id }) => id === genreId).name;
            });

            return genreNames.join(', ');
        },

        releaseYear() {
            return new Date(this.releaseDate).getFullYear();
        }
    },

    methods: {
        /*
        * FETCHING
        */
        // Fetch a list of 5 cast actors
        fetchMediaCast(endpoint) {

            this.loaders++;

            axios.get(api.uri + endpoint, this.apiConfig)
                .then(({ data }) => {

                    this.cast = data.cast.slice(0, 5).map(actor => actor.name);

                })
                .catch(err => console.error(err))
                .then(() => {
                    this.loaders--;
                });

        },


        getIconClass(n) {
            return n <= this.mediaVote ? 'fas' : 'far';
        }
    },


    created() {
        this.fetchMediaCast(this.mediaEndpoint);
    }

}
</script>


<template>
    <div class="media-card">

        <!-- Poster -->
        <img :src="posterFullPath" :alt="title" class="media-poster">

        <!-- Media Info -->
        <div class="media-info">

            <!-- Title -->
            <h3>{{ title }}</h3>
            <p>({{ originalTitle }})</p>

            <!-- Generes -->
            <div class="py-2">
                <h5 class="mb-0">Generi</h5>
                <p>{{ genresList }}</p>
            </div>

            <!-- Release Year -->
            <h5 class="mb-0">Anno</h5>
            <p>{{ releaseYear }}</p>

            <!-- Language flag -->
            <div class="py-2">
                <h5 class="mb-2">Lingua Originale</h5>
                <img v-if="hasFlag" :src="flagPath" :alt="originalLanguage" class="media-language">
                <p v-else>[{{ originalLanguage }}]</p>
            </div>

            <!-- Vote Stars -->
            <div class="py-2">
                <h5 class="mb-0">Voto</h5>
                <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[getIconClass(n), 'star']" />
            </div>

            <!-- Cast -->
            <div class="py-2">
                <h5 class="mb-0">Cast</h5>
                <p>{{ castList }}...</p>
            </div>


        </div>

        <AppLoader v-if="loaders" />


    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.media-card {
    height: 100%;
    min-height: 300px;
    position: relative;

    border-radius: 0.5rem;
    text-align: center;

    overflow: hidden;
    box-shadow: 0 0 8px 2px rgba($color: #000, $alpha: 0.5);

    .media-poster {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    .media-info {
        padding: 1rem;
        position: absolute;
        inset: 0;

        opacity: 0;
        background-color: rgba($color: #000, $alpha: 0.9);

        transition: opacity 0.5s;
        overflow-y: auto;

        &:hover {
            opacity: 1;
        }
    }

    .media-language {
        width: 50px;
    }
}
</style>