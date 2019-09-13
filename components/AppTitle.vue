<template>
    <header :class="[page]">
        <app-search-bar class="app-title__search-bar" />

        <div class="app-title__word">
            <vladivodico-input
                :value="word"
                no-border
                class="app-title__word__input"
            />
        </div>
    </header>
</template>

<script>
import AppSearchBar from './AppSearchBar.vue'
import VladivodicoInput from './VladivodicoInput.vue'

export default {
    name: 'AppTitle',
    components: {
        AppSearchBar,
        VladivodicoInput
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

<style>
.app-title__word__input > input {
    @apply text-center font-semibold;
}
</style>

<style scoped>
header {
    @apply flex flex-grow justify-center items-center h-full relative;
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
    @apply flex items-center justify-center h-full opacity-0 text-xl;
}

header.index > .app-title__word {
    @apply opacity-0;

    transform: translateY(-50%) rotate3d(1, 0, 0, 90deg);
}

header.definition > .app-title__word {
    @apply opacity-100;

    transition-delay: 200ms;
}
</style>
