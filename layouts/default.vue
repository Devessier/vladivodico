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
html {
    font-family: 'Titillium Web', sans-serif;
}

button,
input {
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
section {
    @apply flex flex-col min-h-screen relative;
}

main {
    @apply relative flex-1 overflow-x-hidden;
}

main > article {
    @apply absolute h-full;
}

main > article {
    @apply flex w-full bg-orange-200;

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
