<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseSearchForm from '@/components/base/BaseSearchForm.vue';
import BaseSelectInput from '@/components/base/BaseSelectInput.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { BaseSearchForm, BaseSelectInput },
    emits: ['filter-submit'],

    data() {
        return store;
    },

    computed: {
        genreSelectOptions() {
            return store.genres.map(({ id, name }) => ({ value: id, text: name }));
        }
    },

    methods: {
        onTitleFilterSubmit(title) {

            store.filters.title = title;

            this.$emit('filter-submit');
        },

        onGenresFilterChanged(genreId) {
            store.filters.genreId = genreId;

            this.$emit('filter-submit');
        }
    }


}
</script>


<template>
    <header>

        <div class="container h-100 d-flex justify-content-between align-items-center">

            <!-- Title -->
            <h1 class="mb-0">
                <span class="display-1 fw-bold d-sm-none">[BF]</span>
                <span class="d-none d-sm-inline">BoolFlix</span>
            </h1>


            <!-- Filters -->
            <div class="d-flex">
                <!-- Genres Filter -->
                <BaseSelectInput defaultLabel="Tutti i generi" :options="genreSelectOptions"
                    @select-changed="onGenresFilterChanged" class="me-2" />

                <!-- Title Filter -->
                <BaseSearchForm placeholder="Cerca per nome..." @form-submit="onTitleFilterSubmit" />
            </div>

        </div>

    </header>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


header {
    height: $layout-top;

    color: $col-red;
    background-color: #000;
}
</style>