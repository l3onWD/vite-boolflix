<script>
export default {

}
</script>


<template>
    <div>
        <FontAwesomeIcon icon="fas fa-spinner" spin-pulse size="4x" />
    </div>
</template>


<style scoped>
div {
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);

    /* TODO needed cause bootstrap input group */
    z-index: 2;
}
</style>