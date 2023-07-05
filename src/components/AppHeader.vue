<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import BaseSearchForm from '@/components/base/BaseSerachForm.vue';


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

        <div class="container h-100 d-flex justify-content-between align-items-center">

            <!-- Title -->
            <h1 class="mb-0">BoolFlix</h1>

            <!-- Name Filter -->
            <BaseSearchForm placeholder="Cerca per nome..." @form-submit="onNameFilterSubmit" />

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