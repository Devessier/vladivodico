<template>
    <nav class="app-navigation__header" :class="[page]">
        <app-icon :page="page" />

        <app-title :word="word" :page="page" />

        <transition name="fade">
            <app-add-word v-if="page === 'index'" key="add-word" />
        </transition>
    </nav>
</template>

<script>
import AppIcon from '~/components/AppIcon.vue'
import AppTitle from '~/components/AppTitle.vue'
import AppAddWord from '~/components/AppAddWord.vue'

export default {
    name: 'AppNavigation',
    components: {
        AppIcon,
        AppTitle,
        AppAddWord
    },
    data() {
        return {
            word: 'Coruscant'
        }
    },
    computed: {
        page() {
            return this.$nuxt.$route.name
        }
    }
}
</script>

<style scoped>
.app-navigation__header {
    @apply border-black border-solid border-b px-1 py-1;

    display: grid;
    grid-template-columns: 48px auto 48px;

    @screen sm {
        @apply px-4;
    }
}
</style>
