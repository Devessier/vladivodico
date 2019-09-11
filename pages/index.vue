<template>
    <article>index</article>
</template>

<script></script>

<style scoped>
.page-leave-active,
.page-enter-active {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.page-enter-active {
    animation-name: enterFromLeft;
}

.page-leave-active {
    animation-name: leaveToLeft;
}
</style>
