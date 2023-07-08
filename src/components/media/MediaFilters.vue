<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseSelectInput from '@/components/base/BaseSelectInput.vue';
import BaseSidecanvas from '@/components/base/BaseSidecanvas.vue';

/*** DATA ***/
import { filtersSettings } from '@/data/';
import { store } from '@/data/store';



export default {
    components: { BaseSelectInput, BaseSidecanvas },

    data() {
        return {
            filtersAreVisible: false,
            voteSelectOptions: filtersSettings.voteOptions,
            yearSelectOptions: filtersSettings.yearOptions
        };
    },

    computed: {
        genreSelectOptions() {
            return store.genres.map(({ id, name }) => ({ value: id, text: name }));
        },

        isFilterSelected() {
            return store.filters.genreId || store.filters.year || store.filters.vote;
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
        },

        onVoteFilterChanged(vote) {
            store.filters.vote = vote;

            this.$emit('filter-submit');
        },

        resetFilters() {
            store.filters.genreId = '';
            store.filters.year = '';
            store.filters.vote = '';
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
            <FontAwesomeIcon icon="fas fa-sliders" size="lg" class="me-2" :class="{ 'text-danger': isFilterSelected }" />
            Filtri
        </button>

        <!-- Filters Container -->
        <BaseSidecanvas :isActive="filtersAreVisible" title="Filtri" position="right"
            @canvas-closed="filtersAreVisible = false">

            <form>

                <ul class="filter-list">

                    <!-- Reset Filters -->
                    <li>
                        <button @click="resetFilters" class="btn btn-link" type="reset">Resetta filtri</button>
                    </li>

                    <!-- Genres Filter (Client Side) -->
                    <li class="py-2">
                        <h5 class="mb-3">Generi</h5>
                        <BaseSelectInput :options="genreSelectOptions" @select-changed="onGenresFilterChanged" />
                    </li>

                    <!-- Vote Filter (Client Side) -->
                    <li class="py-2">
                        <h5 class="mb-3">Voto</h5>
                        <BaseSelectInput :options="voteSelectOptions" @select-changed="onVoteFilterChanged" />
                    </li>

                    <!-- Release Year Filter (Server Side) -->
                    <li class="py-2">
                        <h5 class="mb-3">Anno di Uscita</h5>
                        <BaseSelectInput :options="yearSelectOptions" @select-changed="onYearFilterChanged" />
                    </li>

                </ul>
            </form>

        </BaseSidecanvas>

    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

.filter-list {

    li {
        border-top: 1px solid $col-gray;
    }

    .btn-link {
        width: 100%;
        padding-left: 0;

        color: $col-red;
        text-align: start;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>