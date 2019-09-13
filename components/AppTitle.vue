<template>
    <header :class="[page]">
        <app-search-bar class="app-title__search-bar" />

        <h2 class="app-title__word">{{ word }}</h2>
    </header>
</template>

<script>
import AppSearchBar from './AppSearchBar.vue'

export default {
    name: 'AppTitle',
    components: {
        AppSearchBar
    },
    props: {
        word: {
            type: String,
            default: ''
        },
        page: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
header {
    @apply flex flex-grow justify-center items-center;
}

header > * {
    @apply absolute;
}

.app-title__search-bar,
.app-title__word {
    transition: all 400ms;
}

.app-title__search-bar {
    @apply opacity-100;
}

header.index > .app-title__search-bar {
    transition-delay: 100ms;
}

header.definition > .app-title__search-bar {
    @apply opacity-0;

    transform: scale(0.9);
}

.app-title__word {
    @apply opacity-0;
}

header.index > .app-title__word {
    @apply opacity-0;

    transform: translateY(-75%) rotate3d(1, 0, 0, 60deg);
}

header.definition > .app-title__word {
    @apply opacity-100;

    transition-delay: 200ms;
}
</style>
