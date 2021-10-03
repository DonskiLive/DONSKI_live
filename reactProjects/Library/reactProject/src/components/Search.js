import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { bookSearch } from '../store/books/actionsCreator';
import { getBooks } from '../data/booksData'

const Search = ({loading, bookSearch }) => {
	const history = useHistory()

	const [input, setInput] = useState({
		find: ''
	})

	const changeFieldHandler = event => {
		setInput({ ...input, [event.target.name]: event.target.value })
		const tempBookArr = getBooks()
		if (event.target.value.trim() !== '') {
			const filteredBooks = tempBookArr.filter(book => book.title.toLowerCase().startsWith(event.target.value.toLowerCase()))
			bookSearch(filteredBooks)
		} else {
			bookSearch(getBooks())
		}
	}

	const onFocusHandler = () =>{ 
		history.push(`/books`)
	}

	return (
		<div>
			<input className="ms-2 mt-1"
				type="text"
				placeholder="Search book title"
				name="find"
				value={input.find}
				onChange={changeFieldHandler}
				onFocus={onFocusHandler}
			/><svg onClick={() => { setInput({ find: '' }); bookSearch(getBooks()) }} style={{ color: "white", marginBottom: "4px", cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-repeat ms-2" viewBox="0 0 16 16">
				<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
				<path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
			</svg>
		</div>
	)
}

const mapStateToProps = ({ booksReducer }) => {
	return {
		loading: booksReducer.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		bookSearch: (filteredBooks) => dispatch(bookSearch(filteredBooks))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)