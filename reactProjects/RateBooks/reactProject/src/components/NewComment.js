import Field from './Field'
import Textarea from './Textarea'
import Select from './Select'
import { useForm } from "react-cool-form";
import { connect } from 'react-redux';
import { addComment } from '../store/booksReducer/BooksActionsCreator';

const NewComment = ({addCommentToBook, bookId}) => {
	const { form, use } = useForm({
		defaultValues: { name: '', text: '', note: '' },
		onSubmit: (values, { reset }) => {
			addCommentToBook(bookId, {...values, id: Date.now(), bookId, like: 0, dislike: 0 })
			reset()
		}
	})
	const errors = use('errors', { errorWithTouched: true })

	return (
		<div className=" mx-auto mb-3 text-start">
			<h3 className="text-center">Add your comment</h3>
			<form ref={form} noValidate>
				<Field
					label="Your name"
					id="name"
					name="name"
					placeholder="type your name"
					required
					minLength={4}
					error={errors.name}
				>
				</Field>
				<Textarea
					label="Your comment"
					id="text"
					name="text"
					required
					placeholder="type your comment"
					error={errors.text}
				>
				</Textarea>
				<Select
					label="Your note"
					id ='note'
					name='note'
					required
					error={errors.note}
					placeholder="type your comment"
				>
						<option value="" disabled>Select rate</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
				</Select>
				<input type="submit" className="btn btn-primary mt-2 w-100"/>
			</form>
		</div>)
}

const mapDispatchToProps = dispatch =>{
    return{
        addCommentToBook: (id, comment)=>{dispatch(addComment(id, comment))}
    }
}

export default connect (null, mapDispatchToProps)(NewComment) 



/* import { useState } from 'react'
import { connect } from 'react-redux';
import { setBooks } from '../store/booksReducer/BooksActionsCreator';

const NewComment = ({ bookId, books, setBooks }) => {
    const [comment, setComment] = useState({ name: '', text: '', note: 0 });

    const onChangeHandler = event => {
        setComment((comment) => {
            return { ...comment, [event.target.name]: event.target.value }
        })
    }

    const onClickHandler = () => {
        if (comment.name.trim() === '' || comment.text === '' || comment.note === 0) {
            alert('To add a comment, all fields must be filled')
        } else {
            setBooks(createBooksArrWithNewComment(books, bookId, comment))
            setComment({ ...comment, name: '', text: '', note: 0 })
        }
    }

    return (
        <div className="card bg-light mb-2" style={{ height: '60vh', minHeight: '400px' }}>
            <div className="card-body text-start">
                <div className="h4 card-title mt-3 text-center">New comment</div>
                <div className="mb-3">
                    <label htmlFor="nameText" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="nameText"
                        name="name"
                        placeholder="Write your name"
                        value={comment.name}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="commentText" className="form-label">Comment</label>
                    <textarea
                        className="form-control form-control-sm"
                        id="commentText"
                        rows="3"
                        name="text"
                        placeholder="Write your comment"
                        value={comment.text}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Note: </label>
                    <select className="form-select"
                        aria-label="Default select example"
                        name="note"
                        value={comment.note}
                        onChange={onChangeHandler}
                    >
                        <option >Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className='d-flex justify-content-end'>
                    <button type="button" className="btn btn-sm btn-primary" onClick={onClickHandler}>Add Comment</button>
                </div>

            </div>
        </div>
    )
}

const createBooksArrWithNewComment = (books, bookId, comment) => {
    const newBooks = [...books]
    const index = newBooks.findIndex(book => book.id === bookId)
    const book = { ...newBooks[index] };
    const newComments = [...book.comments];
    newComments.push({ ...comment, id: Date.now(), note: +comment.note })
    book.comments = newComments;
    console.log(book.comments)
    book.rate = (newComments.reduce((sum, comment) => sum += comment.note, 0) / newComments.length).toFixed(1);
    newBooks[index] = book;
    return newBooks
}

const mapDispatchToProps = dispatch => {
    return {
        setBooks: (booksArr) => { dispatch(setBooks(booksArr)) }
    }
}

export default connect(null, mapDispatchToProps)(NewComment) */