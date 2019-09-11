<template>
    <header>
        <app-search-bar />

        <!--<div class="title">{{ word }}</div>-->
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
</style>
