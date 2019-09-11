<template>
    <article>definition</article>
</template>

<script>
export default {
    name: 'Definition'
}
</script>

<style scoped>
.page-leave-active,
.page-enter-active {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.page-enter-active {
    animation-name: enterFromRight;
}

.page-leave-active {
    animation-name: leaveToRight;
}
</style>
