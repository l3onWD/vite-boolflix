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
    <div>

        <h2>{{ title }}</h2>

        <ul>
            <li v-for="media in mediaList" :key="media.id">
                <MediaCard v-bind="media" />
            </li>
        </ul>

    </div>
</template>


<style></style>