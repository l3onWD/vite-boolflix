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

    data: () => store,

    emits: ['filter-submit']

}
</script>


<template>
    <main>

        <!-- Intro Screen -->
        <div v-if="!movies.length && !series.length" class="h-100 d-flex">
            <p class="m-auto">Cerca un film o una serie TV per iniziare.</p>
        </div>

        <!-- Search Screen -->
        <div v-else class="container h-100 py-4">

            <!-- Filters -->
            <MediaFilters @filter-submit="this.$emit('filter-submit')" />

            <!-- Media Sections -->
            <MediaSection title="Film" media-type="movies" />

            <MediaSection title="Serie" media-type="series" />

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