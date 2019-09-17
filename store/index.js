import nanoid from 'nanoid'

export const state = () => ({
    isWritingNewWord: false,
    newWordTitle: '',

    words: [],
    currentlyWatchedWordId: -1
})

export const getters = {
    word: (state) => {
        return state.words.find(
            ({ id: wordId }) => wordId === state.currentlyWatchedWordId
        )
    },
    wordTitle: (state, getters) => {
        if (state.isWritingNewWord) return state.newWordTitle

        return (getters.word && getters.word.title) || undefined
    },
    hasWord: (state) => (id) =>
        state.words.some(({ id: wordId }) => wordId === id)
}

export const mutations = {
    setIsWritingNewWord(state, value) {
        state.isWritingNewWord = Boolean(value)
    },
    setNewWordTitle(state, value) {
        state.newWordTitle = value
    },
    setWordTitle(state, { id, value }) {
        const word = state.words.find(({ id: wordId }) => wordId === id)

        if (word === undefined) return
        word.title = value
    },
    setCurrentlyWatchedWordId(state, id) {
        state.currentlyWatchedWordId = id
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
    },
    watchWord({ commit }, id) {
        commit('setCurrentlyWatchedWordId', id)
    }
}
