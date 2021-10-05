import Comments from './Comments'
import NewComment from './NewComment'
import { connect } from 'react-redux'
import Loader from './Loader'

const BookWithComments = ({ history, match, books }) => {
    const bookId = +match.params.id
    const book = books.find(b => b.id === bookId)

    return (
        books.length === 0 ? <Loader /> :
            <div className='row justify-content-md-center mt-3'>
                <div className='col-sm-5'>
                    <div className="card" style={{ height: '60vh', minHeight: '400px', textAlign: 'center' }}>
                        <img src={book.cover} className="card-img-top mx-auto" alt='...' style={{ maxHeight: '100%', width: '320px' }} />
                        <div className="card-body">
                            <h4 className="card-title">{book.title}</h4>
                            <p className="card-text mb-1">Page quantity: {book.pageQnt}</p>
                            <p className="card-text mb-3">Rate: {book.rate ?? 'not rated yet'}</p>
                            <button className="btn btn-primary w-50 mx-auto align-self-end"
                                onClick={() => {
                                    history.push(`/books`)
                                }}>Back to list</button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-5'>
                    <NewComment bookId={book.id} books={books} />
                    <Comments comments={book.comments} />
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