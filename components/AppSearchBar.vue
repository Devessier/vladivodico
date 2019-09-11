<template>
    <div class="search-bar">
        <div ref="searchBarContainer" class="search-bar__icon__container">
            <label
                ref="searchIcon"
                for="search-bar-input"
                class="search-bar__icon"
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
    @apply flex items-center w-full relative max-w-4xl px-1 py-1 border-black border-2 rounded-full;
}

.search-bar__icon__container {
    @apply flex justify-center items-center absolute w-full h-full z-20;
}

.search-bar__icon {
    @apply p-1;

    transition: all 333ms;
}

.search-bar__input {
    @apply ml-8;
}
</style>
