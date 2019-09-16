<template>
    <editor-menu-bar :editor="editor" #default="{ commands, isActive }">
        <div>
            <transition name="slide">
                <aside
                    v-if="showToolbox === true"
                    key="toolbox"
                    class="editor__toolbox"
                >
                    <editor-toolbox-btn
                        v-for="(button, i) in buttons"
                        :key="i"
                        v-bind="button"
                        :commands="commands"
                        :is-active="isActive"
                    />

                    <button
                        class="editor__toolbox__button dismiss-button"
                        @click="toggle"
                    >
                        <x-icon />
                    </button>
                </aside>

                <editor-toolbox-floating-btn
                    v-else
                    key="open"
                    @click.native="toggle"
                />
            </transition>
        </div>
    </editor-menu-bar>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import { EditorMenuBar } from 'tiptap'
import {
    BoldIcon,
    XIcon,
    ItalicIcon,
    UnderlineIcon,
    ListIcon,
    HashIcon
} from 'vue-feather-icons'

import EditorToolboxBtn from '@/components/EditorToolboxBtn.vue'
import EditorToolboxFloatingBtn from '@/components/EditorToolboxFloatingBtn.vue'

export default {
    name: 'EditorToolbox',
    components: {
        EditorMenuBar,
        BoldIcon,
        EditorToolboxBtn,
        XIcon,
        ItalicIcon,
        UnderlineIcon,
        ListIcon,
        HashIcon,
        EditorToolboxFloatingBtn
    },
    props: {
        editor: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            showToolbox: true,
            buttons: [
                {
                    action: 'bold',
                    icon: 'bold'
                },
                {
                    action: 'italic',
                    icon: 'italic'
                },
                {
                    action: 'underline',
                    icon: 'underline'
                },
                {
                    action: 'bullet_list',
                    icon: 'list'
                },
                {
                    action: 'blockquote',
                    icon: 'hash'
                }
            ]
        }
    },
    methods: {
        toggle() {
            this.showToolbox = !this.showToolbox
        }
    }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 500ms;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(100%);
}

aside.editor__toolbox {
    @apply w-full bottom-0 border-black border-t py-1 bg-orange-200 z-10 h-12;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 1rem;

    @screen md {
        @apply sticky top-0 border border-t-0;

        grid-template-columns: repeat(5, 1fr);
    }
}

aside.editor__toolbox > button {
    @apply mx-auto;
}

button.dismiss-button {
    @apply block;

    @screen md {
        @apply hidden;
    }
}

aside.floating_button {
    @apply fixed;

    bottom: 10px;
    right: 10px;
}
</style>
