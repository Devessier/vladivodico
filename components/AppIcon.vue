<template>
    <aside :class="[page]">
        <vladivodico-btn to="/" class="home">
            <book-open-icon />
        </vladivodico-btn>
        <vladivodico-btn to="/" class="back">
            <chevron-left-icon />
        </vladivodico-btn>
    </aside>
</template>

<script>
import { ChevronLeftIcon, BookOpenIcon } from 'vue-feather-icons'
import VladivodicoBtn from '~/components/VladivodicoBtn.vue'

export default {
    name: 'AppIcon',
    components: {
        BookOpenIcon,
        ChevronLeftIcon,
        VladivodicoBtn
    },
    props: {
        page: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
aside {
    @apply flex justify-center items-center w-12 relative;
}

.home,
.back {
    @apply flex justify-center items-center p-1 border-black border-2 rounded-full opacity-100 absolute;
    transition: all 500ms;
}

aside.definition .home {
    opacity: 0;
    transform: scale(0.9);
}

aside.index .back {
    opacity: 0;
    transform: translateX(-10px);
}
</style>
