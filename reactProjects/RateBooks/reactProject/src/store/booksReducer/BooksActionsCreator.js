import Type from './BooksActionTypes';
import { startLoading, stopLoading } from '../appReducer/AppActionsCreator';
import { getBooksFromLocalStorage, addBookToStorage, addCommentToBook, setBooksToStorage } from '../../data/books';

export const getAllBooks = () => {
    return dispatch => {
        dispatch(startLoading())
        setTimeout(() => {
            try {
                dispatch(_getAllBooks())
                dispatch(stopLoading())
            } catch (e) {
                console.log(e.message)
            }
        }, 2000)
    }
}

export const addBookToBooks = (book) => {
    return dispatch => {
        dispatch(startLoading())
        setTimeout(() => {
            try {
                addBookToStorage(book)
                dispatch(_addBook(book))
                dispatch(stopLoading())
            } catch (e) {
                console.log(e.message)
            }
        }, 2000)
    }
}

export const addComment = (bookId, comment) => {
    return dispatch => {
        dispatch(startLoading())
        setTimeout(() => {
            try {
                addCommentToBook(bookId, comment)
                dispatch(_addCommentToBook(bookId, comment))
                dispatch(stopLoading())
            } catch (e) {
                console.log(e.message)
            }
        }, 2000)
    }
}

export const setBooks = (booksArr) => {
    return dispatch => {
        dispatch(startLoading())
        setTimeout(() => {
            try {
                setBooksToStorage(booksArr)
                dispatch(_setBooks(booksArr))
                dispatch(stopLoading())
            } catch (e) {
                console.log(e.message)
            }
        }, 2000)
    }
}

export const addLikes = (bookId, id, key) => {
    return {
        type: Type.addLikesToComment,
        payload: {bookId, id, key }
    }
}


const _setBooks = (booksArr) => {
    return {
        type: Type.setBooks,
        payload: booksArr
    }
}


const _addCommentToBook = (bookId, comment) => {
    console.log(bookId)
    return {
        type: Type.addCommentToBook,
        payload: { bookId, comment }
    }
}


const _getAllBooks = () => {
    return {
        type: Type.getAllBooks,
        payload: getBooksFromLocalStorage()
    }
}

const _addBook = (book) => {
    return {
        type: Type.addBook,
        payload: book
    }
}