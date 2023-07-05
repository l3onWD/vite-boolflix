<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import MediaList from '@/components/media/MediaList.vue';

/*** DATA ***/
import { store } from '@/data/store';


export default {
    components: { MediaList },
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

                <MediaList title="Film" :mediaList="movies" />

                <MediaList title="Serie" :mediaList="series" />

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