<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** DATA ***/
import { posterBasePath, posterSize } from '@/data/';


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
    <div class="media-card">

        <!-- Poster -->
        <img v-if="posterPath" :src="posterfullPosterPath" :alt="title" class="img-fluid">

        <!-- Media Info -->
        <div class="media-info">

            <h3>{{ title }}</h3>

            <p>({{ originalTitle }})</p>

            <div>
                <img :src="flagPath" :alt="title" class="media-language">
            </div>

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
.media-card {
    position: relative;

    text-align: center;

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