<script>
export default {
    props: {
        title: String,
        mediaList: Array
    },

    methods: {
        getImageUrl(imageName) {
            const url = new URL(`../assets/img/${imageName}.png`, import.meta.url);
            return url.href;
        }
    }

}
</script>


<template>
    <div>

        <h2>{{ title }}</h2>

        <ul>
            <li v-for="media in mediaList" :key="media.id">
                <p>Titolo: {{ media.title }}</p>
                <p>Titolo Originale: {{ media.originalTitle }}</p>
                <div>
                    <img :src="getImageUrl(media.originalLanguage)" :alt="media.title">
                </div>
                <p>Voto: {{ media.voteAverage }}</p>
            </li>
        </ul>

    </div>
</template>


<style></style>