<template>
    <div class="search-bar">
        <div ref="searchBarContainer" class="search-bar__icon__container">
            <label
                ref="searchIcon"
                for="search-bar-input"
                class="search-bar__icon"
                title="Rechercher un mot"
                :style="style"
            >
                <search-icon />
            </label>
        </div>

        <vladivodico-input
            v-model.trim="searchText"
            :placeholder="placeholder"
            closable
            class="search-bar__input"
            @focus="flipOn"
            @blur="flipOff"
            @keyup.enter="search"
        />
    </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'
import VladivodicoInput from './VladivodicoInput.vue'

export default {
    name: 'AppSearchBar',
    components: {
        SearchIcon,
        VladivodicoInput
    },
    data() {
        return {
            searchText: '',
            translationX: 0,
            placeholder: 'Rechercher …'
        }
    },
    computed: {
        style() {
            return {
                transform: `translateX(${this.translationX}px)`
            }
        }
    },
    methods: {
        flipOn() {
            const containerElementDims = this.$refs.searchBarContainer.getBoundingClientRect()
            const searchIconElementDims = this.$refs.searchIcon.getBoundingClientRect()

            this.translationX = containerElementDims.x - searchIconElementDims.x
        },
        flipOff() {
            this.translationX = 0
        },
        search() {
            console.log(`search ${this.searchText}`)
        }
    }
}
</script>

<style scoped>
.search-bar {
    @apply flex items-center w-full relative max-w-4xl px-3 py-1 border-black border-2 rounded-full;
}

.search-bar__icon__container {
    @apply flex justify-center items-center absolute inset-x-0 w-full h-full z-20;
}

.search-bar__icon {
    @apply flex justify-center items-center py-1 px-2 cursor-pointer;

    transition: all 333ms;
}

.search-bar__input {
    @apply ml-6 opacity-0 border-transparent;

    transition: all 500ms;
    transform: translateY(25%);
}

.search-bar__input.input-focus {
    @apply border-black opacity-100 z-30;

    transform: translateY(0);
}
</style>
