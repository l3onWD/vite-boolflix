<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** DATA ***/
import { mediaSettings } from '@/data/';
import { store } from '@/data/store';


export default {
    props: {
        id: Number,
        title: String,
        originalTitle: String,
        originalLanguage: String,
        voteAverage: Number,
        posterPath: String,
        cast: Array,
        genreIds: Array
    },

    computed: {
        hasFlag() {
            return mediaSettings.languageFlags.includes(this.originalLanguage);
        },

        flagPath() {
            const url = new URL(`../../assets/img/${this.originalLanguage}.png`, import.meta.url);
            return url.href;
        },

        hasPoster() {
            return this.posterPath;
        },

        posterfullPosterPath() {
            const { posterBasePath, posterSize } = mediaSettings
            return posterBasePath + posterSize + this.posterPath;;
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
        }
    }

}
</script>


<template>
    <div class="media-card">

        <!-- Poster -->
        <img v-if="hasPoster" :src="posterfullPosterPath" :alt="title" class="media-poster">
        <div v-else class="media-poster-none">
            <h3>Nessuna Immagine</h3>
        </div>

        <!-- Media Info -->
        <div class="media-info">

            <!-- Title -->
            <h3>{{ title }}</h3>
            <p>({{ originalTitle }})</p>

            <!-- Generes -->
            <div class="py-2">
                <p class="mb-0">Generi:</p>
                <p>{{ genresList }}</p>
            </div>

            <!-- Language flag -->
            <img v-if="hasFlag" :src="flagPath" :alt="originalLanguage" class="media-language">
            <p v-else>Lingua originale: [{{ originalLanguage }}]</p>

            <!-- Vote Stars -->
            <div class="py-2">
                <i v-for="n in 5" :key="n">
                    <FontAwesomeIcon v-if="n <= mediaVote" icon="fas fa-star" />
                    <FontAwesomeIcon v-else icon="far fa-star" />
                </i>
            </div>

            <!-- Cast -->
            <div class="py-2">
                <p class="mb-0">Cast:</p>
                <p>{{ castList }}...</p>
            </div>


        </div>


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

    .media-poster-none {
        height: 100%;

        display: flex;
        background-color: $col-gray;

        &>* {
            margin: auto;
        }
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