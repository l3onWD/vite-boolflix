<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** DATA ***/
import { store } from '../data/store';


export default {
    data: () => store,

    methods: {
        getImageUrl(imageName) {
            const url = new URL(`../assets/img/${imageName}.png`, import.meta.url);
            return url.href;
        }
    }
}
</script>


<template>
    <main>

        <p v-if="!movies.length">Cerca un film o una serie TV per iniziare.</p>

        <ul v-else>
            <li v-for="movie in movies" :key="movie.id">
                <p>Titolo: {{ movie.title }}</p>
                <p>Titolo Originale: {{ movie.originalTitle }}</p>
                <div>
                    <img :src="getImageUrl(movie.originalLanguage)" :alt="movie.title">
                </div>
                <p>Voto: {{ movie.voteAverage }}</p>
            </li>
        </ul>

    </main>
</template>


<style></style>