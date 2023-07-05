<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import { store } from '../data/store';
import BaseSearchForm from './base/BaseSerachForm.vue';


export default {
    components: { BaseSearchForm },
    emits: ['name-filter-submit'],

    methods: {
        onNameFilterSubmit(term) {
            this.$emit('name-filter-submit', term);
        }
    }


}
</script>


<template>
    <header>
        <h1>BoolFlix</h1>

        <BaseSearchForm placeholder="Cerca per nome..." @form-submit="onNameFilterSubmit" />
    </header>
</template>


<style></style>