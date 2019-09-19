import nanoid from 'nanoid'
import { initClientStorage } from '@/plugins/dexie'

export const state = () => ({
    isWritingNewWord: false,
    newWordTitle: '',

    words: [],
    currentlyWatchedWordId: -1,
    db: null,
    cacheLoaded: false,

    wordLoader: false,
    baseWordDefinition: '',

    searchQuery: '',
    searchActive: false
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
        state.words.some(({ id: wordId }) => wordId === id),
    wordLoaded: (_state, getters) =>
        Boolean(getters.word && getters.word.definition),
    sortedWords: (state) =>
        [...state.words].sort(({ title: titleA }, { title: titleB }) =>
            titleA.localeCompare(titleB)
        ),
    searchResults: (state) => {
        return state.words
            .filter(({ title }) => title.startsWith(state.searchQuery))
            .sort(({ title: titleA }, { title: titleB }) =>
                titleA.localeCompare(titleB)
            )
    }
}

export const mutations = {
    setDB(state, db) {
        state.db = db
    },
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
    replaceWords(state, words) {
        state.words = words
    },
    pushNewWord(state, payload) {
        state.words.push(payload)
    },
    setWordDefinition(state, { wordId, definition }) {
        const word = state.words.find(({ id }) => id === wordId)
        if (word === undefined) return

        word.definition = definition
    },
    setCacheLoaded(state, value) {
        state.cacheLoaded = value
    },
    setIsLoadingWord(state, loading) {
        state.isLoadingWord = loading
    },
    setBaseWordDefinition(state, definition) {
        state.baseWordDefinition = definition
    },
    setWordLoader(state, value) {
        state.wordLoader = value
    },
    setSearchQuery(state, value) {
        state.searchQuery = value
    },
    setSearchActive(state, value) {
        state.searchActive = value
    }
}

export const actions = {
    async initClientStorage({ state, commit, dispatch }) {
        if (state.cacheLoaded !== false) return
        commit('setCacheLoaded', true)

        const db = initClientStorage()

        commit('setDB', db)

        await dispatch('loadCacheStorageToMemory')
    },
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
    },
    async updateCurrentlySelectedWordDefinition(
        { state, getters, commit },
        definition
    ) {
        try {
            commit('setWordDefinition', {
                wordId: state.currentlyWatchedWordId,
                definition
            })

            const entry = await state.db.words.get(state.currentlyWatchedWordId)

            if (entry === undefined) {
                // add an entry
                await state.db.words.add({
                    uuid: state.currentlyWatchedWordId,
                    word: getters.wordTitle,
                    definition
                })
            } else {
                await state.db.words.update(state.currentlyWatchedWordId, {
                    definition
                })
            }
        } catch (e) {
            console.error(e)
        }
    },
    async loadCacheStorageToMemory({ state, commit }) {
        try {
            const entries = await state.db.words.toArray()

            const mappedEntries = entries.map(({ uuid, word, definition }) => ({
                id: uuid,
                title: word,
                definition
            }))

            commit('replaceWords', mappedEntries)
        } catch (e) {
            console.error(e)
        }
    },
    toggleSearch({ commit }, active) {
        commit('setSearchActive', active)
    },
    modifySearchQuery({ commit }, query) {
        commit('setSearchQuery', query)
    }
}
