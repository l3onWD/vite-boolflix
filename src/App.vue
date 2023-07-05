<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


/*** DATA ***/
import axios from 'axios'

export default {
    components: { AppHeader, AppMain },

}
</script>


<template>
    <AppHeader />

    <AppMain />
</template>


<style></style>