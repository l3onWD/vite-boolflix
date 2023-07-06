<script>
export default {
    data() {
        return {
            selectedValue: ''
        };
    },

    props: {
        defaultLabel: '',
        options: Array
    },

    emits: ['select-changed']

}
</script>


<template>
    <select v-model="selectedValue" @change="$emit('select-changed', selectedValue)" class="form-select w-auto">
        <option value="">{{ defaultLabel || 'Tutto' }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
</template>


<style></style>