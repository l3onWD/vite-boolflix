<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** DATA ***/
import { mediaSettings } from '@/data/';


export default {
    props: {
        id: Number,
        title: String,
        originalTitle: String,
        originalLanguage: String,
        voteAverage: Number,
        posterPath: String
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
        }
    }

}
</script>


<template>
    <div class="media-card h-100">

        <!-- Poster -->
        <img v-if="hasPoster" :src="posterfullPosterPath" :alt="title" class="img-fluid">
        <div v-else class="poster-placeholder">
            <h3>Nessuna Immagine</h3>
        </div>

        <!-- Media Info -->
        <div class="media-info">

            <h3>{{ title }}</h3>

            <p>({{ originalTitle }})</p>

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

        </div>


    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.media-card {
    position: relative;

    text-align: center;

    .poster-placeholder {
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