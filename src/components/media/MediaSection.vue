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

            // Client side filtering
            const genreFilter = store.filters.genreId;
            const voteFilter = (store.filters.vote - 1) * 2;// From 0 to 8

            if (!genreFilter && !voteFilter) return store[this.mediaType];
            return store[this.mediaType].filter(media => {

                const hasGenre = !genreFilter || media.genreIds.includes(genreFilter);
                const hasVote = media.voteAverage >= voteFilter;

                return hasGenre && hasVote;

            });
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