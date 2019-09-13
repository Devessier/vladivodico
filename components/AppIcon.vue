<template>
    <aside :class="[page]">
        <transition name="fade" mode="out-in">
            <vladivodico-btn
                v-if="page === 'index'"
                key="home"
                to="/"
                class="home"
            >
                <book-open-icon />
            </vladivodico-btn>
            <vladivodico-btn
                v-else-if="page === 'definition'"
                key="back"
                to="/"
                class="back"
            >
                <chevron-left-icon />
            </vladivodico-btn>
        </transition>
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

aside > * {
    transition-duration: 200ms;
}
</style>
