<script>
export default {
    name: 'VladivodicoBtn',
    props: {
        block: {
            type: Boolean,
            default: false
        },
        to: {
            type: [String, Object],
            default: undefined
        }
    },
    methods: {
        genParent() {
            const tag = this.to === undefined ? 'button' : 'nuxt-link'
            const data = {
                props: {},
                on: this.$listeners,
                class: { 'vladivodico-btn__block': this.block },
                staticClass: 'vladivodico-btn'
            }

            if (this.to !== undefined) {
                Object.assign(data.props, {
                    to: this.to
                })
            }

            return { tag, data }
        }
    },
    render(h) {
        const { tag, data } = this.genParent()

        return h(tag, data, this.$slots.default)
    }
}
</script>

<style scoped>
.vladivodico-btn {
    @apply flex justify-center items-center p-1 border-black border-2 rounded-full;
}

.vladivodico-btn.vladivodico-btn__block {
    @apply rounded-none;
}
</style>
