<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseSearchForm from '@/components/base/BaseSearchForm.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { BaseSearchForm },

    data() {
        return {
            store
        }
    },

    methods: {
        onTitleFilterChanged(title) {
            store.filters.title = title;
        },

        onTitleFilterSubmit() {
            this.$emit('filter-submit');
        }
    },

    emits: ['filter-submit']

}
</script>


<template>
    <header>

        <div class="container h-100 d-flex justify-content-between align-items-center">

            <!-- Title -->
            <h1 class="mb-0">BoolFlix</h1>

            <!-- Media Title Filter -->
            <BaseSearchForm placeholder="Cerca per nome..." @term-changed="onTitleFilterChanged"
                @form-submit="onTitleFilterSubmit" />

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