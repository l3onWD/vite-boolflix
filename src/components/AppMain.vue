<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import MediaSection from '@/components/media/MediaSection.vue';

/*** DATA ***/
import { store } from '@/data/store';// TODO eliminare la dipendenza da store e riscrivere logica schermata iniziale


export default {
    components: { MediaSection },

    data: () => store
}
</script>


<template>
    <main>

        <div class="container h-100 py-4">

            <!-- Intro Screen -->
            <div v-if="!movies.length && !series.length" class="h-100 d-flex justify-content-center align-items-center">
                <p>Cerca un film o una serie TV per iniziare.</p>
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