import Comments from './Comments'
import NewComment from './NewComment'
import { connect } from 'react-redux'
import Loader from './Loader'
import StarsRate from './StarsRate'

const BookWithComments = ({ history, match, books }) => {
    const bookId = +match.params.id
    const book = books.find(b => b.id === bookId)

    return (
        books.length === 0 ? <Loader /> :
            <div className='row justify-content-md-center mt-3'>
                <div className='col-sm-5'>
                    <div className="card border-0" style={{ height: '60vh', minHeight: '400px', textAlign: 'center' }}>
                    {book.cover ? <img src={book.cover} className="card-img-top mx-auto" alt='...' style={{ maxHeight: '100%', width: '320px' }} /> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="20rem" height="20rem" fill="currentColor" className="bi bi-book mx-auto" viewBox="0 0 16 16" style={{ maxHeight: '100%', width: '320px' }}>
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                        </svg>}
                        <div className="card-body">
                            <h4 className="card-title">{book.title}</h4>
                            <p className="card-text mb-1">Page quantity: {book.pageQnt}</p>
                            <div className="d-flex justify-content-center my-2">
                                {book.rate ? <StarsRate rate={+book.rate} /> : <span className="text-primary mb-2"><b>not rated yet</b></span>}
                                {book.rate && <span style={{marginTop: '3px', marginLeft:'5px'}}>({book.rate})</span>}
                            </div>
                            <button className="btn btn-primary w-50 mx-auto align-self-end"
                                onClick={() => {
                                    history.push(`/books`)
                                }}>Back to list</button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-5'>
                    <Comments comments={book.comments} />
                    <NewComment bookId={book.id} books={books} />
                    
                </div>
            </div>
    )
}

const mapStateToProps = ({ BooksReducer }) => {
    return {
        books: BooksReducer.books
    }
}

export default connect(mapStateToProps)(BookWithComments)