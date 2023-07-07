<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import MediaCard from '@/components/media/MediaCard.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { MediaCard },

    props: {
        title: String,
        mediaType: String
    },

    computed: {

        filteredMedia() {

            const genreFilter = store.filters.genreId;

            if (!genreFilter) return store[this.mediaType];
            return store[this.mediaType].filter(media => media.genreIds.includes(genreFilter));
        }
    }

}
</script>


<template>
    <section class="py-4">

        <h2>{{ title }}</h2>

        <ul v-if="filteredMedia.length" class="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4">
            <li v-for="media in filteredMedia" :key="media.id" class="col">
                <MediaCard v-bind="media" />
            </li>
        </ul>

        <p v-else>Nessun risultato trovato.</p>

    </section>
</template>