<template>
    <article>add</article>
</template>

<script>
export default {
    name: 'WordAdd',
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.$store.dispatch('startAddingNewWord')
        })
    },
    transition(to, from) {
        if (to && from && (to.name === 'word-id' || from.name === 'word-id'))
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
