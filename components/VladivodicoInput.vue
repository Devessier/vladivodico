<template>
    <div
        ref="inputContainer"
        class="vladivodico__input__container"
        :class="containerClasses"
    >
        <input
            id="search-bar-input"
            ref="input"
            :value="value"
            :placeholder="placeholder"
            class="vladivodico__input"
            @input="$emit('input', $event.target.value)"
            @focus="focus"
            @blur="blur"
            v-on="listeners"
        />

        <x-icon
            v-if="closable"
            class="vladivodico__input__close__icon"
            @mousedown.prevent="resetInput"
        />
    </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
    name: 'VladivodicoInput',
    components: {
        XIcon
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        closable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isFocused: false,
            internalInputEvents: new Set(['input', 'focus', 'blur'])
        }
    },
    computed: {
        containerClasses() {
            if (this.isFocused === true) {
                return 'input-focus'
            }
            return ''
        },
        listeners() {
            return Object.entries(this.$listeners)
                .filter(([event]) => !this.internalInputEvents.has(event))
                .reduce((prev, [event, handler]) => {
                    prev[event] = handler
                    return prev
                }, {})
        }
    },
    methods: {
        resetInput(event) {
            this.$emit('input', '')
        },
        focus() {
            if (this.isFocused === true) return

            this.isFocused = true
            this.$emit('focus')
        },
        blur() {
            this.isFocused = false
            this.$emit('blur')
        }
    }
}
</script>

<style scoped>
.vladivodico__input__container {
    @apply flex items-center flex-grow relative border-b-2;
}

input.vladivodico__input {
    @apply w-full h-full bg-transparent;
}

input.vladivodico__input::placeholder {
    @apply text-black;
}

.vladivodico__input__close__icon {
    @apply cursor-pointer;
}
</style>
