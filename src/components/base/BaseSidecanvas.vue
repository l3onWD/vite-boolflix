<script>
export default {
    props: {
        title: String,
        isActive: Boolean,
        position: String
    },

    emits: ['canvas-closed']
}
</script>


<template>
    <div class="sidecanvas" :class="{ show: isActive }">

        <!-- Overlay -->
        <div @click="$emit('canvas-closed')" class="sidecanvas-overlay"></div>

        <!-- Content -->
        <div class="sidecanvas-content" :class="position || 'left'">

            <!-- Header -->
            <div class="sidecanvas-header mb-3">
                <h2 class="mb-0">{{ title }}</h2>
                <button @click="$emit('canvas-closed')" class="btn-close btn-close-white"></button>
            </div>

            <!-- External Content -->
            <slot></slot>

        </div>

    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;


.sidecanvas {
    position: fixed;
    inset: 0;

    visibility: hidden;
    opacity: 0;

    z-index: 2;

    transition: opacity 0.2s, visibility 0.2s;

    &.show {
        visibility: visible;
        opacity: 1;
    }

    .sidecanvas-overlay {
        position: absolute;
        inset: 0;

        background-color: rgba($color: #000, $alpha: 0.8);

        cursor: pointer;
    }

    .sidecanvas-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .sidecanvas-content {
        padding: 1.5rem;
        position: absolute;
        top: 0;
        height: 100%;

        background-color: $col-dark;
    }

    /* Right Sidecanvas */
    .sidecanvas-content.right {
        right: -300px;

        transition: right 0.2s;
    }

    &.show .sidecanvas-content.right {
        right: 0;
    }

    /* Left Sidecanvas */
    .sidecanvas-content.left {
        left: -300px;

        transition: left 0.2s;
    }

    &.show .sidecanvas-content.left {
        left: 0;
    }
}
</style>