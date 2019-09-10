<template>
    <header class="app-navigation__header">
        <div class="navigation-icon">👷‍♂️</div>

        <transition-group class="flex-grow">
            <div key="search">Recherche</div>

            <div key="word" class="flex-grow">{{ word }}</div>
        </transition-group>

        <nuxt-link to="/definition">
            <div class="navigation-icon">👷‍♂️</div>
        </nuxt-link>
    </header>
</template>

<script>
export default {
    name: 'AppNavigation',
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

<style>
.app-navigation__header {
    @apply flex flex-no-wrap border-black border-solid border-b px-4 py-1;
}
</style>
