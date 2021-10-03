import Types from './actionTypes';

const init = {
    books: [],
    currentLevel: null,
    loading: false,
    error: {
        bookCreator: null,
        login: null
    }
}

const booksReducer = (state = init, { type, payload }) => {
    switch (type) {
        case Types.initState: return initState(state, payload)
        case Types.bookCreator: return bookCreator(state, payload)
        case Types.bookRemover: return bookRemover(state, payload)
        case Types.bookSearch: return bookSearch(state, payload)
        case Types.editBook: return editBook(state, payload)
        case Types.login: return login(state, payload)
        case Types.logout: return logout(state)
        case Types.load: return load(state)
        case Types.error: return error(state, payload)
        default: return state
    }
}

const initState = (state, payload) => {
    return { ...state, books: [...payload.books], currentLevel: payload.currentLevel, loading: false }
}

const bookCreator = (state, payload) => {
    return { ...state, books: [...state.books, payload], loading: false }
}

const bookRemover = (state, payload) => {
    return { ...state, books: payload.books, loading: false }
}

const bookSearch = (state, payload) => {
    return { ...state, books: payload.books }
}

const editBook = (state, payload) => {
    return { ...state, loading: false, books: payload.books }
}

const login = (state, payload) => {
    return { ...state, loading: false, currentLevel: payload }
}

const logout = (state) => {
    return { ...state, currentLevel: null }
}

const load = (state) => {
    return { ...state, loading: true, error: { bookCreator: null, login: null } }
}

const error = (state, payload) => {
    return { ...state, loading: false, error: { ...state.error, ...payload } }
}

export default booksReducer