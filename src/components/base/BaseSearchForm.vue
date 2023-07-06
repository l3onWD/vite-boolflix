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

    emits: ['form-submit', 'term-changed']
}
</script>


<template>
    <form @submit.prevent="$emit('form-submit')">

        <div class="input-group">
            <input v-model.trim="searchedTerm" @keyup="$emit('term-changed', searchedTerm)" type="text"
                :placeholder="placeholder || 'Search...'" class="form-control">
            <button class="btn btn-outline-danger">
                <FontAwesomeIcon icon="fas fa-search" />
            </button>
        </div>

    </form>
</template>