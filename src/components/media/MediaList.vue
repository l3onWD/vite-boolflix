<script>
/* -----------------------------------------
* RESOURCES
-------------------------------------------*/
/*** COMPONENTS ***/
import MediaCard from '@/components/media/MediaCard.vue';


export default {
    components: { MediaCard },

    props: {
        title: String,
        mediaList: Array
    }
}
</script>


<template>
    <section class="py-4">

        <h2>{{ title }}</h2>

        <ul class="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4">
            <li v-for="media in mediaList" :key="media.id" class="col">
                <MediaCard v-bind="media" />
            </li>
        </ul>

    </section>
</template>