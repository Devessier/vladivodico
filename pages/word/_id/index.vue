<template>
    <section class="editor">
        <article class="editor__container">
            <editor-toolbox :editor="editor" />

            <editor-content :editor="editor" class="editor__content" />
        </article>
    </section>
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import {
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    HorizontalRule,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History
} from 'tiptap-extensions'

import EditorToolbox from '@/components/EditorToolbox.vue'

export default {
    name: 'WordId',
    components: {
        EditorContent,
        EditorToolbox
    },
    data() {
        return {
            editor: new Editor({
                content: this.$store.getters.word.definition,
                extensions: [
                    new Blockquote(),
                    new BulletList(),
                    new CodeBlock(),
                    new HardBreak(),
                    new Heading({ levels: [1, 2, 3] }),
                    new HorizontalRule(),
                    new ListItem(),
                    new OrderedList(),
                    new TodoItem(),
                    new TodoList(),
                    new Link(),
                    new Bold(),
                    new Code(),
                    new Italic(),
                    new Strike(),
                    new Underline(),
                    new History()
                ],
                onUpdate: ({ getJSON }) => {
                    const definition = getJSON()

                    this.$store.dispatch(
                        'updateCurrentlySelectedWordDefinition',
                        definition
                    )
                }
            })
        }
    },
    fetch({ params: { id }, store }) {
        store.dispatch('watchWord', id)

        return store.dispatch('initClientStorage')
    },
    transition(to, from) {
        if (to && from && (to.name === 'word-add' || from.name === 'word-add'))
            return {
                name: 'none',
                mode: ''
            }
        return {
            name: 'page',
            mode: ''
        }
    },
    beforeDestroy() {
        this.editor.destroy()
    }
}
</script>

<style scoped>
.page-leave-active,
.page-enter-active {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.page-enter-active {
    @apply z-10;

    animation-name: enterFromRight;
}

.page-leave-active {
    @apply z-10;

    animation-name: leaveToRight;
}

section.editor {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

article.editor__container {
    @apply absolute inset-0 flex flex-col-reverse items-stretch;

    grid-column: 1 / span 4;

    @screen md {
        @apply flex-col;

        grid-column: 2 / 4;
    }
}

.editor__content {
    @apply px-4 py-2 h-full w-full overflow-y-scroll;

    @screen md {
        @apply mb-0 border-l border-r border-black;
    }
}

.editor__content.full {
    max-height: 100%;
}
</style>

<style>
.editor__content ul,
.editor__content ol {
    @apply pl-4;
}

.editor__content ul {
    @apply list-disc;
}

.editor__content ol {
    @apply list-decimal;
}

.editor__content blockquote {
    @apply border-l-2 border-gray-500 text-gray-700 pl-3 italic;
}
</style>
