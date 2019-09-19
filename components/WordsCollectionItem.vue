<template functional>
    <nuxt-link :to="{ name: 'word-id', params: { id: props.id } }" class="word">
        <h3>{{ props.title }}</h3>
    </nuxt-link>
</template>

<script>
export default {
    name: 'WordsCollectionItem',
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.word {
    @apply flex justify-center items-center border-b border-black p-2;

    @screen md {
        @apply border-2;
    }
}

.word > h3 {
    @apply text-xl font-bold truncate;
}
</style>
