<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseSelectInput from '@/components/base/BaseSelectInput.vue';
import BaseSidecanvas from '@/components/base/BaseSidecanvas.vue';
import BaseNumberInput from '@/components/base/BaseNumberInput.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { BaseSelectInput, BaseSidecanvas, BaseNumberInput },

    data() {
        return {
            filtersAreVisible: false
        };
    },

    computed: {
        genreSelectOptions() {
            return store.genres.map(({ id, name }) => ({ value: id, text: name }));
        },

        yearSelectOptions() {
            return store.genres.map(({ id, name }) => ({ value: id, text: name }));
        },

        isFilterSelected() {
            return store.filters.genreId || store.filters.year;
        }
    },

    methods: {
        onGenresFilterChanged(genreId) {
            store.filters.genreId = genreId;

            this.$emit('filter-submit');
        },

        onYearFilterChanged(year) {
            store.filters.year = year;

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

            <ul class="filter-list">

                <!-- Genres Filter -->
                <li>
                    <h5 class="mb-3">Generi</h5>
                    <BaseSelectInput defaultLabel="Tutti" :options="genreSelectOptions"
                        @select-changed="onGenresFilterChanged" />
                </li>

                <!-- Release Year Filter -->
                <li>
                    <h5 class="mb-3">Anno di Uscita</h5>
                    <BaseNumberInput :min-value="1950" :max-value="2023" @value-changed="onYearFilterChanged" />
                </li>

            </ul>

        </BaseSidecanvas>

    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

.filter-list>li {
    padding-top: 1rem;
    padding-bottom: 1rem;

    border-top: 1px solid $col-gray;
}
</style>