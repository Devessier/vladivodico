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

<style>
body {
    @apply min-h-screen bg-orange-200;
}

main {
    @apply relative flex-1 overflow-x-hidden;

    display: grid;
    grid-template: 'main';
}

main > * {
    grid-area: main;
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
