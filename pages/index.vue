<template>
    <section class="words__container">
        <words-collection-item
            v-for="(word, i) in words"
            :key="i"
            v-bind="word"
        />
    </section>
</template>

<script>
import WordsCollectionItem from '@/components/WordsCollectionItem.vue'

export default {
    name: 'Index',
    components: {
        WordsCollectionItem
    },
    computed: {
        words() {
            if (this.$store.state.searchActive)
                return this.$store.getters.searchResults

            return this.$store.getters.sortedWords
        }
    },
    fetch({ store }) {
        return store.dispatch('initClientStorage')
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
    @apply z-0;

    animation-name: enterFromLeft;
}

.page-leave-active {
    @apply z-0;

    animation-name: leaveToLeft;
}

section.words__container {
    @apply w-full overflow-y-scroll;

    display: grid;
    grid-auto-rows: 3.5rem;

    @screen md {
        @apply p-5;

        grid-template-columns: repeat(2, 1fr);
        gap: 10px 10px;
    }

    @screen lg {
        grid-template-columns: repeat(5, 1fr);
    }
}
</style>
