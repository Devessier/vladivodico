<template>
    <section class="app__container">
        <app-navigation />

        <main>
            <nuxt />
        </main>
    </section>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
    name: 'DefaultLayout',
    components: {
        AppNavigation
    }
}
</script>

<style>
html {
    font-family: 'Titillium Web', sans-serif;
}

button,
input,
div {
    outline: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 300ms ease;
}

.fade-enter,
.fade-leave-to {
    @apply opacity-0;
}
</style>

<style scoped>
section.app__container {
    @apply flex flex-col absolute inset-0;

    padding: env(safe-area-inset-top) env(safe-area-inset-right) 0
        env(safe-area-inset-left);
}

main {
    @apply relative flex-1 overflow-hidden;
}

main > * {
    @apply flex absolute h-full w-full bg-orange-200;

    grid-area: main;
}

main:first-child {
    z-index: 1;
}

main:nth-child(2) {
    z-index: 2;
}
</style>

<style>
body {
    @apply h-full bg-orange-200;
}

a,
a:visited {
    color: black;
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
