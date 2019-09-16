<template>
    <header :class="headerClasses">
        <app-search-bar class="app-title__search-bar" />

        <div class="app-title__word">
            <vladivodico-input
                :value="wordTitle"
                placeholder="Nouveau mot …"
                no-border
                class="app-title__word__input"
                @input="input"
                @blur="blur"
            />
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

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
    },
    computed: {
        headerClasses() {
            if (this.page === 'index') return 'index'
            return 'word'
        },
        ...mapGetters(['wordTitle'])
    },
    methods: {
        input(value) {
            this.$store.dispatch('modifyWordTitle', value)
        },
        async blur() {
            if (this.$store.state.isWritingNewWord !== true) return

            const id = await this.$store.dispatch('appendNewWord')

            this.$nuxt.$router.replace({
                name: 'word-id',
                params: { id }
            })
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

header.word > .app-title__search-bar {
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

header.word > .app-title__word {
    @apply opacity-100;

    transition-delay: 200ms;
}
</style>
