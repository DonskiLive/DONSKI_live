import Types from './actionTypes';
import * as BooksData from './../../data/booksData';

export const initialState = () => {
    return dispatch => {
        dispatch({ type: Types.load })
        setTimeout(() => {
            try {
                const data = {
                    books: BooksData.getBooks(),
                    currentLevel: BooksData.getCurrentLevel()
                }
                dispatch({ type: Types.initState, payload: { ...data } })
            } catch (e) {
                console.log(e.message)
            }
        }, 2000)
    }
}

export const bookCreator = (book) => {
    return dispatch => {
        dispatch({ type: Types.load })
        setTimeout(() => {
            try {
                const newBook = createBook(book)
                if (newBook) {
                    dispatch({ type: Types.bookCreator, payload: newBook })
                } else {
                    throw new Error('Book with specified title is already exist')
                }
            } catch (e) {
                dispatch({ type: Types.error, payload: { bookCreator: e.message } })
            }
        }, 2000)
    }
}

export const bookRemover = (id) => {
    return dispatch => {
        dispatch({ type: Types.load })
        setTimeout(() => {
            try {
                const newBooks = BooksData.getBooks()
                const index = newBooks.findIndex(book => book.id === id)
                newBooks.splice(index, 1)
                BooksData.setBooksToLocalStorage(newBooks)
                if (newBooks) {
                    dispatch({ type: Types.bookRemover, payload: { books: [...newBooks] } })
                } else {
                    throw new Error('Error during delete of specified book')
                }
            } catch (e) {
                console.log(e.message)
            }
        }, 2000)
    }
}

export const login = data => {
    return dispatch => {
        dispatch({ type: Types.load })
        setTimeout(() => {
            try {
                const user = BooksData.loginUser(data);
                if (user) {
                    BooksData.setCurrentLevelLocalStorage(user)
                    dispatch({ type: Types.login, payload: user })
                } else {
                    throw new Error('password or access level is wrong')
                }
            } catch (e) {
                dispatch({ type: Types.error, payload: { login: e.message } })
            }
        }, 2000)
    }
}

export const logout = () => {
    return ({
        type: Types.logout
    })
}

export const bookSearch = (filteredBooks) => {
    return ({
        type: Types.bookSearch,
        payload: {
            books: [...filteredBooks]
        }
    })
}

export const updateBook = data => {
    return dispatch => {
        dispatch({ type: Types.load })
        setTimeout(() => {
            try {
                const newBooks = [...BooksData.getBooks()]
                const index = newBooks.findIndex(book => book.id === data.id)
                newBooks[index] = data;
                BooksData.setBooksToLocalStorage(newBooks);
                dispatch({ type: Types.editBook, payload: { books: [...newBooks] } })
            } catch (e) {
                console.log(e.message)
            }
        }, 1000)
    }
}

const createBook = book => {
    const books = BooksData.getBooks();
    book = { ...book, id: Date.now() }
    books.push(book)
    BooksData.setBooksToLocalStorage(books)
    return book
}