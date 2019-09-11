<template>
    <section>
        <nav>
            <app-navigation />
        </nav>

        <main>
            <nuxt />
        </main>
    </section>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
    components: {
        AppNavigation
    }
}
</script>

<style scoped>
section {
    @apply flex flex-col min-h-screen relative;
}

main {
    @apply relative flex-1 overflow-x-hidden;

    display: grid;
    grid-template: 'main';
}

main > * {
    grid-area: main;
}
</style>

<style>
body {
    @apply h-full bg-orange-200;
}

@keyframes leaveToLeft {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-25%);
        filter: brightness(0.5);
    }
}

@keyframes enterFromLeft {
    from {
        transform: translateX(-25%);
        filter: brightness(0.5);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes leaveToRight {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes enterFromRight {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}
</style>
