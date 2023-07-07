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

            <button v-if="searchedTerm" @click="resetForm" class="btn btn-reset" type="button">
                <FontAwesomeIcon icon="fas fa-close" size="lg" />
            </button>

            <button class="btn btn-outline-danger">
                <FontAwesomeIcon icon="fas fa-search" />
            </button>
        </div>

    </form>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

input {
    padding-right: 30px;
}

.btn.btn-reset {
    position: absolute;
    top: 50%;
    right: 45px;
    transform: translateY(-50%);

    color: $col-red;
    z-index: 1;
}
</style>