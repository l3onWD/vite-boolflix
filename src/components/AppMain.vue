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

        <p v-if="!movies.length && !series.length">Cerca un film o una serie TV per iniziare.</p>

        <div v-else>

            <h2>Film</h2>
            <ul>
                <li v-for="movie in movies" :key="movie.id">
                    <p>Titolo: {{ movie.title }}</p>
                    <p>Titolo Originale: {{ movie.originalTitle }}</p>
                    <div>
                        <img :src="getImageUrl(movie.originalLanguage)" :alt="movie.title">
                    </div>
                    <p>Voto: {{ movie.voteAverage }}</p>
                </li>
            </ul>


            <h2>Serie</h2>
            <ul>
                <li v-for="serie in series" :key="series.id">
                    <p>Titolo: {{ serie.title }}</p>
                    <p>Titolo Originale: {{ serie.originalTitle }}</p>
                    <div>
                        <img :src="getImageUrl(serie.originalLanguage)" :alt="serie.title">
                    </div>
                    <p>Voto: {{ serie.voteAverage }}</p>
                </li>
            </ul>
        </div>

    </main>
</template>


<style></style>