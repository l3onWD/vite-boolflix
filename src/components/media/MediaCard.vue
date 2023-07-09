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
            if (!this.releaseDate) return '-';
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

        <!-- Media Info Container (needed for visibility animation) -->
        <div class="media-info-container">

            <!-- Media Info -->
            <ul class="media-info">

                <!-- Title -->
                <li class="mb-3">
                    <h6>{{ title }}</h6>
                    <p class="text-lightgray mb-0">({{ originalTitle }})</p>
                </li>

                <!-- Vote Language and Year -->
                <li class="text-lightgray mb-3">
                    <ul class="media-info-list">
                        <li>
                            <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[getIconClass(n), 'star']" />
                        </li>

                        <li>
                            <span>{{ releaseYear }}</span>
                        </li>

                        <li>
                            <img v-if="hasFlag" :src="flagPath" :alt="originalLanguage" class="media-language">
                            <span v-else>[{{ originalLanguage }}]</span>
                        </li>

                    </ul>
                </li>

                <!-- Generes -->
                <li class="mb-3">
                    <p class="mb-0">{{ genresList }}</p>
                </li>

                <!-- Cast -->
                <li class="text-lightgray">
                    <h6 class="mb-0">Cast</h6>
                    <p class="mb-0">{{ castList }}...</p>
                </li>

            </ul>
        </div>

        <AppLoader v-if="loaders" />


    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.media-card {
    height: 100%;
    min-height: 250px;
    position: relative;

    font-size: 0.8rem;

    box-shadow: 0 0 8px 2px rgba($color: #000, $alpha: 0.5);
    cursor: pointer;

    .media-poster {
        width: 100%;
        height: 100%;

        border-radius: 0.5rem;
        object-fit: cover;
    }

    .media-info-container {
        position: absolute;
        top: 50%;
        width: 100%;

        visibility: hidden;
        z-index: 1;
        transition: visibility 0.2s;
    }

    &:hover .media-info-container {
        visibility: visible;
        opacity: 1;
    }

    .media-info {
        padding: 0.25rem 1rem;

        background-color: #000;
        border-radius: 0.5rem;
        opacity: 0;

        transform: scale(1);
        transition: transform 0.2s, opacity 0.2s;
    }

    &:hover {

        .media-info {
            opacity: 1;
            transform: scale(1.1);

            transition: transform 0.2s 0.25s, opacity 0.2s 0.25s;
        }
    }

    .media-info-list {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .media-language {
        width: 30px;
    }
}
</style>