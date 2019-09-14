<template>
    <article>index</article>
</template>

<script>
export default {
    name: 'WordId',
    transition(to, from) {
        if (to && from && (to.name === 'word-add' || from.name === 'word-add'))
            return 'none'
        return 'page'
    }
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
