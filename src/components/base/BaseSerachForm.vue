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

        <div class="input-group">
            <input v-model.trim="searchedTerm" type="text" :placeholder="placeholder || 'Search...'" class="form-control">
            <button class="btn btn-outline-secondary">Cerca</button>
        </div>

    </form>
</template>


<style></style>