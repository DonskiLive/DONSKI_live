import React,{ useState } from 'react'
import '../css/App.css';
import Title from './Title';
import { getBooks } from '../store/store.js'
import BookList from './BookList';

export const MyCnt = React.createContext()

const AppF = () => {
	const [books, setBooks] = useState(getBooks())

	const changeCounter = (id, isInc) => {
		const newBooks = [...books]
		const index = newBooks.findIndex(book => book.id === id)

		if (index >= 0) {
			const book = { ...newBooks[index] }
			if (isInc) {
				book.quantity++
			} else if (newBooks[index].quantity > 0) {
				book.quantity--
			}
			newBooks[index] = book;
			setBooks(newBooks)
		}
	}

	const onIncClickHandler = (id)=>{
		changeCounter(id, true)
	}
	const onDecClickHandler = (id)=>{
		changeCounter(id, false)
	}

	const orderHandler = () => {
		const orderBooks = books.filter(book => book.quantity > 0)
		console.log(orderBooks)
		let orderMessage = 'you order: '
		orderBooks.forEach(b => orderMessage += `${b.title}, `)
		orderMessage += `sum of your order: ${orderBooks.reduce((sum, b) => sum += b.quantity * b.price, 0)}`
		console.log(orderMessage)
	}
	return (
		<div className="App">
			<Title title='Bestseller / Buy Now!' />
			<MyCnt.Provider value={{
				onIncClickHandler: onIncClickHandler,
				onDecClickHandler: onDecClickHandler
				}}>
			<BookList books={books}/>
			</MyCnt.Provider>
			<button className="order-button" onClick={orderHandler}>order</button>
		</div>
	);
}

export default AppF