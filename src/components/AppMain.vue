<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** DATA ***/
import { store } from '../data/store';


export default {
    data: () => store
}
</script>


<template>
    <main>

        <p v-if="!movies.length">Cerca un film o una serie TV per iniziare.</p>

        <ul v-else>
            <li v-for="movie in movies" :key="movie.id">
                <p>Titolo: {{ movie.title }}</p>
                <p>Titolo Originale: {{ movie.originalTitle }}</p>
                <p>Lingua: {{ movie.originalLanguage }}</p>
                <p>Voto: {{ movie.voteAverage }}</p>
            </li>
        </ul>

    </main>
</template>


<style></style>