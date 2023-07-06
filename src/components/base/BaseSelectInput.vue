<script>
export default {
    props: {
        defaultValue: '',
        options: Array
    }

}
</script>


<template>
    <select class="form-select w-auto">
        <option value="">{{ defaultValue || 'Tutto' }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>


<style></style>