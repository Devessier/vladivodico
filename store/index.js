import nanoid from 'nanoid'

export const state = () => ({
    isWritingNewWord: false,
    newWordTitle: '',

    words: [],
    currentlyWatchedWordIndex: -1
})

export const getters = {
    wordTitle(state, index) {
        if (state.isWritingNewWord) return state.newWordTitle

        const word = state.words[index]

        if (word === undefined) return ''
        return word.title
    }
}

export const mutations = {
    setIsWritingNewWord(state, value) {
        state.isWritingNewWord = Boolean(value)
    },
    setNewWordTitle(state, value) {
        state.newWordTitle = value
    },
    setWordTitle(state, value) {
        const index = state.currentlyWatchedWordIndex

        if (state.words[index] === undefined) return
        state.words[index] = value
    },
    setCurrentlyWatchedWordIndex(state, index) {
        state.currentlyWatchedWordIndex = index
    },
    pushNewWord(state, payload) {
        state.words.push(payload)
    }
}

export const actions = {
    startAddingNewWord({ commit }) {
        commit('setIsWritingNewWord', true)
    },
    modifyWordTitle({ state, commit }, value) {
        if (state.isWritingNewWord === true) {
            commit('setNewWordTitle', value)
        } else {
            commit('setWordTitle', value)
        }
    },
    appendNewWord({ state, commit }) {
        if (state.isWritingNewWord !== true) return

        const id = nanoid()

        commit('pushNewWord', {
            id,
            title: state.newWordTitle
        })

        commit('setIsWritingNewWord', false)
        commit('setNewWordTitle', '')

        return id
    }
}
