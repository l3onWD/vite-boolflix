<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    data() {
        return {
            inputValue: ""
        };
    },
    props: {
        minValue: Number,
        maxValue: Number,
        defaultValue: Number,
    },
    methods: {
        resetInput() {
            this.inputValue = "";
            this.$emit("value-changed", this.inputValue);
        }
    },
    created() {
        this.inputValue = this.defaultValue;
    },
    emits: ["value-changed"],
    components: { FontAwesomeIcon }
}
</script>


<template>
    <div class="d-flex align-items-center">
        <input v-model="inputValue" type="number" :min="minValue" :max="maxValue"
            @change="$emit('value-changed', inputValue)" class="form-control">

        <button v-if="inputValue" @click="resetInput" class="btn text-danger" type="button">
            <FontAwesomeIcon icon="fas fa-close" size="lg" />
        </button>
    </div>
</template>

<style scoped>
.form-control {
    width: auto;
}
</style>