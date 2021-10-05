import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import { useEffect } from 'react'
import { getAllBooks } from '../store/booksReducer/BooksActionsCreator';

const Navigation = ({books, getBooks}) => {
     useEffect(()=>{
        if(books.length === 0)
        getBooks()
        // eslint-disable-next-line
    }, [])

    return (
        <nav className="navbar navbar-expand bg-dark">
            <div className="container">
                <div className = "navbar-nav">
                    <NavLink className="nav-link active" to="/">Home</NavLink>
                    {books.length ? <NavLink className="nav-link" to="/books">Books</NavLink> : <></>}
                    <NavLink className="nav-link" to="/add_book">Add book</NavLink>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = ({BooksReducer})=>{
    return{
        books: BooksReducer.books
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getBooks: ()=>dispatch(getAllBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navigation) 
