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
        }
    }

}
</script>


<template>
    <div>
        <img :src="posterfullPosterPath" :alt="title">
        <p>Titolo: {{ title }}</p>
        <p>Titolo Originale: {{ originalTitle }}</p>
        <div>
            <img :src="flagPath" :alt="title">
        </div>
        <p>Voto: {{ voteAverage }}</p>
    </div>
</template>


<style></style>