<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import MediaSection from '@/components/media/MediaSection.vue';
import MediaFilters from '@/components/media/MediaFilters.vue';

/*** DATA ***/
import { store } from '@/data/store';// TODO eliminare la dipendenza da store e riscrivere logica schermata iniziale


export default {
    components: { MediaSection, MediaFilters },

    data() {
        return {
            store
        };
    },

    emits: ['filter-submit']

}
</script>


<template>
    <main>

        <div class="container h-100 py-4">

            <!-- Filters -->
            <MediaFilters @filter-submit="this.$emit('filter-submit')" />

            <!-- Intro Screen -->
            <div v-if="!store.movies.length && !store.series.length" class="mt-5">
                <p class="text-center">Cerca un film o una serie TV per iniziare.</p>
            </div>

            <!-- Media Lists -->
            <div v-else>

                <MediaSection title="Film" media-type="movies" />

                <MediaSection title="Serie" media-type="series" />

            </div>
        </div>

    </main>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

main {
    height: calc(100vh - $layout-top);

    background-color: $col-dark;
    overflow-y: auto;
}
</style>