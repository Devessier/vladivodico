<template>
    <nav class="app-navigation__header" :class="[page]">
        <app-icon :page="page" />

        <app-title :word="word" :page="page" />

        <app-add-word />
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
    @apply flex flex-no-wrap border-black border-solid border-b px-1 py-1;

    @screen sm {
        @apply px-4;
    }
}
</style>
