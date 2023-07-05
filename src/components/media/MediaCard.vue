<script>
export default {
    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        voteAverage: Number,
    },

    methods: {
        getImageUrl(imageName) {
            const url = new URL(`../../assets/img/${imageName}.png`, import.meta.url);
            return url.href;
        }
    }

}
</script>


<template>
    <div>
        <p>Titolo: {{ title }}</p>
        <p>Titolo Originale: {{ originalTitle }}</p>
        <div>
            <img :src="getImageUrl(originalLanguage)" :alt="title">
        </div>
        <p>Voto: {{ voteAverage }}</p>
    </div>
</template>


<style></style>