<script>
export default {
    data() {
        return {
            selectedValue: ''
        };
    },

    props: {
        defaultLabel: String,
        options: Array
    },

    emits: ['select-changed']

}
</script>


<template>
    <select v-model="selectedValue" @change="$emit('select-changed', selectedValue)" class="form-select w-auto">
        <option value="">{{ defaultLabel || 'Tutti' }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value" v-html="option.text"></option>
    </select>
</template>