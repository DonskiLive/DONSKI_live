import Type from './BooksActionTypes';
import { startLoading, stopLoading } from '../appReducer/AppActionsCreator';
import { getBooksFromLocalStorage, addBookToStorage, setBooksToStorage } from '../../data/books';

export const getAllBooks = ()=>{
    return dispatch =>{
        dispatch(startLoading())
        setTimeout(()=>{
            try{
                dispatch(_getAllBooks())
                dispatch(stopLoading())
            }catch(e){
                console.log(e.message)
            }
        }, 2000)
    }
}

export const addBookToBooks = (book) =>{
    return dispatch =>{
        dispatch(startLoading())
        setTimeout(()=>{
            try{
                addBookToStorage(book)
                dispatch(_addBook(book))
                dispatch(stopLoading())
            }catch(e){
                console.log(e.message)
            }
        },2000)
    }
}

export const setBooks = (booksArr) =>{
    console.log(booksArr)
    return dispatch =>{
        dispatch(startLoading())
        setTimeout(()=>{
            try{
                setBooksToStorage(booksArr)
                dispatch(_setBooks(booksArr))
                dispatch(stopLoading())
            }catch(e){
                console.log(e.message)
            }
        },2000)
    }
}


const _setBooks = (booksArr)=>{
    return{
            type: Type.setBooks,
            payload: booksArr
    }
}


const _getAllBooks = ()=>{
    return{
            type: Type.getAllBooks,
            payload: getBooksFromLocalStorage()
    }
}

const _addBook = (book)=>{
    return{
        type: Type.addBook,
        payload:book
    }
}