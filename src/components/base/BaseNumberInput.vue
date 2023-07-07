<script>
export default {
    data() {
        return {
            inputValue: ''
        };
    },
    props: {
        minValue: Number,
        maxValue: Number,
        defaultValue: Number,
    },

    created() {
        this.inputValue = this.defaultValue;
    },

    emits: ['value-changed']
}
</script>


<template>
    <input v-model="inputValue" type="number" :min="minValue" :max="maxValue" @change="$emit('value-changed', inputValue)">
</template>


<style></style>