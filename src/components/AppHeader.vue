<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import { store } from '../data/store';
import BaseSearchForm from './base/BaseSerachForm.vue';


export default {
    components: { BaseSearchForm },

    methods: {
        setNameFilter(term) {
            store.filters.nameFilter = term;
        }
    }


}
</script>


<template>
    <header>
        <h1>BoolFlix</h1>

        <BaseSearchForm @form-submit="setNameFilter" />
    </header>
</template>


<style></style>