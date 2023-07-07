<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import MediaSection from '@/components/media/MediaSection.vue';
import BaseSelectInput from '@/components/base/BaseSelectInput.vue';
import BaseSidecanvas from '@/components/base/BaseSidecanvas.vue';

/*** DATA ***/
import { store } from '@/data/store';// TODO eliminare la dipendenza da store e riscrivere logica schermata iniziale


export default {
    components: { MediaSection, BaseSelectInput, BaseSidecanvas },

    data() {
        return {
            store,
            filtersAreVisible: false
        };
    },

    computed: {
        genreSelectOptions() {
            return store.genres.map(({ id, name }) => ({ value: id, text: name }));
        }
    },

    methods: {
        onGenresFilterChanged(genreId) {
            store.filters.genreId = genreId;
            this.filtersAreVisible = false;

            this.$emit('filter-submit');
        }
    },

    emits: ['filter-submit']

}
</script>


<template>
    <main>

        <div class="container h-100 py-4">

            <!-- Filters -->
            <div class="d-flex justify-content-end">

                <!-- Filters Toggler -->
                <button @click="filtersAreVisible = !filtersAreVisible" class="btn btn-outline-light">Filtri</button>

                <!-- Filters Container -->
                <BaseSidecanvas :isActive="filtersAreVisible" title="Filtri" position="right"
                    @canvas-closed="filtersAreVisible = false">

                    <ul class="d-md-flex">

                        <!-- Genres Filter -->
                        <li>
                            <BaseSelectInput defaultLabel="Tutti i generi" :options="genreSelectOptions"
                                @select-changed="onGenresFilterChanged" />
                        </li>

                    </ul>

                </BaseSidecanvas>

            </div>

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