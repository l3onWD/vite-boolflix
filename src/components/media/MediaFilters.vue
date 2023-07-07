<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseSelectInput from '@/components/base/BaseSelectInput.vue';
import BaseSidecanvas from '@/components/base/BaseSidecanvas.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { BaseSelectInput, BaseSidecanvas },

    data() {
        return {
            filtersAreVisible: false
        };
    },

    computed: {
        genreSelectOptions() {
            return store.genres.map(({ id, name }) => ({ value: id, text: name }));
        },

        isFilterSelected() {
            return store.filters.genreId;
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
    <div class="d-flex justify-content-end">

        <!-- Filters Toggler -->
        <button @click="filtersAreVisible = !filtersAreVisible" class="btn btn-outline-light">
            <FontAwesomeIcon icon="fas fa-sliders" size="lg" class="me-2" :class="{ 'text-success': isFilterSelected }" />
            Filtri
        </button>

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
</template>


<style></style>