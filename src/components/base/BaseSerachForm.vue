<script>
export default {
    data() {
        return {
            searchedTerm: ''
        };
    },
    props: {
        placeholder: String
    },
    emits: ['form-submit']
}
</script>


<template>
    <form @submit.prevent="$emit('form-submit', searchedTerm)">
        <input v-model.trim="searchedTerm" type="text" :placeholder="placeholder || 'Search...'">
        <button>Cerca</button>
    </form>
</template>


<style></style>