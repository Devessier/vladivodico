<script>
export default {
    name: 'EditorToolboxBtn',
    functional: true,
    props: {
        action: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        commands: {
            type: Object,
            required: true
        },
        isActive: {
            type: Object,
            required: true
        }
    },
    render(
        h,
        {
            props: { action, icon, commands, isActive }
        }
    ) {
        return h(
            'button',
            {
                staticClass: 'editor__toolbox__button',
                class: {
                    active: isActive[action]()
                },
                on: {
                    click: commands[action]
                }
            },
            [h(icon + '-icon')]
        )
    }
}
</script>

<style>
button.editor__toolbox__button {
    @apply flex justify-center items-center w-10 h-10 p-1 rounded-full border border-transparent;

    transition: border-color 150ms;
}

button.editor__toolbox__button.active {
    @apply border-black;
}
</style>
