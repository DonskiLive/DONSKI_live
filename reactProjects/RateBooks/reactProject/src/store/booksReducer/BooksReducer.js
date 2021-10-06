import { setBooksToStorage } from '../../data/books';
import Type from './BooksActionTypes';

const init = {
    books: []
}

const BooksReducer = (state = init, { type, payload }) => {
    switch (type) {
        case Type.getAllBooks:
            return { ...state, books: [...payload] }
        case Type.addBook:
            return { ...state, books: [...state.books, payload] }
        case Type.addCommentToBook:
            return _addComment(state, payload.bookId, payload.comment)
        case Type.setBooks:
            return { ...state, books: payload }
        case Type.addLikesToComment:
            return _addLikes(state, payload.bookId, payload.id, payload.key)
        default: return state
    }
}

const _addLikes = (state, bookId, id, key) => {
    const newBooks = [...state.books]
    const index = newBooks.findIndex(b => b.id === bookId)
    const commentIndex = newBooks[index].comments.findIndex(comment => comment.id === id)
    newBooks[index].comments[commentIndex][key]++
    setBooksToStorage(newBooks)
    return {
        ...state,
        books: newBooks
    }
}

const _addComment = (state, id, comment) => {
    const newBooks = [...state.books]
    const index = newBooks.findIndex(b => b.id === id)
    const book = { ...newBooks[index] }
    book.comments = [...book.comments, comment]
    book.rate = (book.comments.reduce((sum, comment) => sum += +comment.note, 0) / book.comments.length).toFixed(1)
    newBooks[index] = book
    return {
        ...state,
        books: newBooks
    }
}



export default BooksReducer