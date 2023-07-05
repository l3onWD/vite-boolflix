<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** DATA ***/
import { posterBasePath, posterSize } from '@/data/';


export default {
    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        voteAverage: Number,
        posterPath: String
    },

    computed: {
        flagPath() {
            const url = new URL(`../../assets/img/${this.originalLanguage}.png`, import.meta.url);
            return url.href;
        },

        posterfullPosterPath() {
            return posterBasePath + posterSize + this.posterPath;
        },

        mediaVote() {
            return Math.ceil(this.voteAverage * 5 / 10);
        }
    }

}
</script>


<template>
    <div>
        <img v-if="posterPath" :src="posterfullPosterPath" :alt="title">
        <p>Titolo: {{ title }}</p>
        <p>Titolo Originale: {{ originalTitle }}</p>
        <div>
            <img :src="flagPath" :alt="title">
        </div>
        <p>Voto: {{ mediaVote }}</p>
    </div>
</template>


<style></style>