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

        <p v-if="!movies.length && !series.length">Cerca un film o una serie TV per iniziare.</p>

        <div v-else>

            <MediaList title="Film" :mediaList="movies" />

            <MediaList title="Serie" :mediaList="series" />

        </div>

    </main>
</template>


<style></style>