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

    methods: {
        resetForm() {
            this.searchedTerm = '';
            this.$emit('term-changed', this.searchedTerm);
        }
    },

    emits: ['form-submit', 'term-changed']
}
</script>


<template>
    <form @submit.prevent="$emit('form-submit')">

        <div class="input-group">
            <input v-model.trim="searchedTerm" @keyup="$emit('term-changed', searchedTerm)" type="text"
                :placeholder="placeholder || 'Search...'" class="form-control">

            <button v-if="searchedTerm" @click="resetForm" class="btn-close" type="button"></button>

            <button class="btn btn-outline-danger">
                <FontAwesomeIcon icon="fas fa-search" />
            </button>
        </div>

    </form>
</template>

<style scoped>
input {
    padding-right: 30px;
}

.btn-close {
    position: absolute;
    top: 50%;
    right: 45px;
    transform: translateY(-50%);

    z-index: 1;
}
</style>