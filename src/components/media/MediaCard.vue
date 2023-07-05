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
    <!-- Poster -->
    <a href="#">
        <img v-if="posterPath" :src="posterfullPosterPath" :alt="title" class="img-fluid">
    </a>

    <!-- Media Info -->
    <div class="text-center">
        <h3>{{ title }}</h3>
        <p>({{ originalTitle }})</p>
        <div>
            <img :src="flagPath" :alt="title" class="media-language">
        </div>
        <p>{{ mediaVote }}</p>
    </div>
</template>


<style scoped>
.media-language {
    width: 50px;
}
</style>