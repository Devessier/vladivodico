<template>
    <aside>
        <vladivodico-btn to="/word/add">
            <plus-icon />
        </vladivodico-btn>
    </aside>
</template>

<script>
import { PlusIcon } from 'vue-feather-icons'
import VladivodicoBtn from './VladivodicoBtn.vue'

export default {
    name: 'AppAddWord',
    components: {
        VladivodicoBtn,
        PlusIcon
    }
}
</script>

<style scoped>
aside {
    @apply flex justify-center items-center w-12;
}
</style>
