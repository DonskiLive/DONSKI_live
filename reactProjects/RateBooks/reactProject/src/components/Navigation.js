import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getAllBooks, setBooks } from '../store/booksReducer/BooksActionsCreator';
import { demoLibrary } from '../store/demoLibrary'
import { getBooksFromLocalStorage } from '../data/books';


const Navigation = ({ books, getBooks, setBooks, isLoading}) => {
    useEffect(() => {
        if (books.length === 0)
            getBooks()
        // eslint-disable-next-line
    }, [])

    if (!isLoading) {
        const booksArr = getBooksFromLocalStorage()
        if (booksArr.length <= 3) {
            setBooks(demoLibrary)
        }
    }

    return (
        <nav className="navbar navbar-expand bg-dark">
            <div className="container">
                <div className="navbar-nav">
                    <NavLink className="nav-link active" to="/">Home</NavLink>
                    {books.length ? <NavLink className="nav-link" to="/books">Books</NavLink> : <></>}
                    <NavLink className="nav-link" to="/add_book">Add book</NavLink>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = ({ BooksReducer, AppReducer }) => {
    return {
        books: BooksReducer.books, 
        isLoading: AppReducer.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(getAllBooks()),
        setBooks: (booksArr) => { dispatch(setBooks(booksArr)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
