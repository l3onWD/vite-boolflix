<script>
export default {
    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        voteAverage: Number,
    },

    computed: {
        flagPath() {
            const url = new URL(`../../assets/img/${this.originalLanguage}.png`, import.meta.url);
            return url.href;
        }
    }

}
</script>


<template>
    <div>
        <img src="" :alt="title">
        <p>Titolo: {{ title }}</p>
        <p>Titolo Originale: {{ originalTitle }}</p>
        <div>
            <img :src="flagPath" :alt="title">
        </div>
        <p>Voto: {{ voteAverage }}</p>
    </div>
</template>


<style></style>