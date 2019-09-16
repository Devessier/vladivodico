<template>
    <aside class="floating-button">
        <button>
            <edit2-icon />
        </button>
    </aside>
</template>

<script>
import { Edit2Icon } from 'vue-feather-icons'

export default {
    name: 'EditorToolboxFloatingBtn',
    components: {
        Edit2Icon
    }
}
</script>

<style scoped>
.floating-button {
    @apply fixed flex justify-center items-center w-12 h-12 text-white bg-gray-500 rounded-full cursor-pointer;

    bottom: 0.5rem;
    right: 0.5rem;

    transition: transform 500ms ease;

    @screen md {
        @apply hidden;
    }
}

.floating-button.slide-enter,
.floating-button.slide-leave-to {
    transform: scale(0);
}

.floating-button > button {
    @apply z-10;
}
</style>
