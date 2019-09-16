<template functional>
    <nuxt-link :to="{ name: 'word-id', params: { id: props.id } }" class="word">
        <h3>{{ props.title }}</h3>

        <h4 :class="{ empty: props.definition === '' }">
            {{ props.definition || 'Terme non-défini' }}
        </h4>
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
        },
        definition: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.word {
    @apply flex flex-col items-stretch justify-between border-b border-black p-2;

    @screen md {
        @apply border-2;
    }
}

.word > * {
    @apply truncate;
}

.word > h3 {
    @apply text-xl font-bold;
}

.word > h4 {
    @apply text-sm;
}

.word > h4.empty {
    @apply italic;
}
</style>
