import { useState } from 'react'
import Error from './Error'
import { connect } from 'react-redux'
import { bookCreator } from '../store/books/actionsCreator'
import { useHistory } from 'react-router-dom';

const BookCreator = ({ creatBook, error, loading }) => {

    const history = useHistory()

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        yearIssue: '',
        genre: '',
        cover: '',
        text: '',
        pdf:''
    })

    const changeFieldHandler = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const submitHandler = event => {
        event.preventDefault()
        if (!formData.title.trim() || !formData.author.trim()) return
        creatBook(formData)
        setFormData({ ...formData, title: '', author: '', yearIssue: '', genre: '', cover: '', text: '', pdf: '' })
        history.push(`/books`)
    }

    return (
        <div className='container-fluid' style={{ backgroundImage: 'linear-gradient(rgb(200, 200, 200, 0.5), rgb(255, 255, 255))', minHeight: 'calc(100vh - 57px)', height: 'fit-content', backgroundRepeat: 'none', backgroundSize: 'cover', paddingTop: "10px" }}>
            <>{loading ? <div className="text-center my-5">
                <div className="spinner-grow mt-3" style={{ width: '2rem', height: '2rem', color: 'black' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-3 mt-3" style={{ width: '2rem', height: '2rem', color: 'black' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mt-3" style={{ width: '2rem', height: '2rem', color: 'black' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : <>
                <div className="container mt-4">
                    <div className="w-50 mx-auto">
                        {error.bookCreator && <Error message={error.bookCreator} />}
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <label>Book title</label>
                                <input type="text"
                                    className="form-control"
                                    name="title"
                                    value={formData.title}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Author</label>
                                <input type="text"
                                    className="form-control"
                                    name="author"
                                    value={formData.author}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Year of issue</label>
                                <input type="text"
                                    className="form-control"
                                    name="yearIssue"
                                    value={formData.yearIssue}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Genre</label>
                                <input type="text"
                                    className="form-control"
                                    name="genre"
                                    value={formData.genre}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Cover</label>
                                <input type="text"
                                    className="form-control"
                                    name="cover"
                                    value={formData.cover}
                                    onChange={changeFieldHandler} />
                            </div>                            
                            <div className="form-group">
                                <label>Download link</label>
                                <input type="text"
                                    className="form-control"
                                    name="pdf"
                                    value={formData.pdf}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group mb-2">
                                <label>Content</label>
                                <textarea type="text" className="form-control" name="text"
                                    value={formData.text}
                                    onChange={changeFieldHandler}></textarea>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-dark w-100 mt-2">Add new book</button>
                            </div>
                        </form>
                    </div>
                </div></>}</>
        </div>
    )
}

const mapStateToProps = ({ booksReducer }) => {
    return {
        error: booksReducer.error,
        currentLevel: booksReducer.currentLevel,
        loading: booksReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        creatBook: (book) => dispatch(bookCreator(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCreator)