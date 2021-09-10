import Book from "./Book"
import '../css/CardList.css' // import from css

const BookList = ({books}) => { //  props: cards   {cards} = props
	return (
		<div className="card-list">
			{books.map(book=> <Book 
			key = {book.id}
			book = {book}  // book = {book} -> props.
			/* onIncClickHandler={onIncClickHandler}
			onDecClickHandler={onDecClickHandler} */

			
/*			id ={book.id}
 			title = {book.title}
			author={book.author}
			genre={book.genre}
			yearIssue={book.yearIssue}
			src ={book.cover} *//>)}
{/* 			<Card title="Card-1"
				subtitle="Subtitle1"
				text="some text1" 
				src='../favicon.ico'/>
			<Card title="Card-2"
				subtitle="Subtitle2"
				text="some text2" 
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/227px-React-icon.svg.png
				"/>
			<Card title="Card-3"
				subtitle="Subtitle3"
				src='../favicon.ico'
				/> */}
		</div>
	)
}
export default BookList

/* export default function CardList(){
	return(
		<div className="class-list">
			<Card title="Card-1"
			subtitle="Subtitle1"
			text = "some text1"/>
	  <Card title="Card-2"
			subtitle="Subtitle2"
			text = "some text2"/>
	  <Card title="Card-3"
			subtitle="Subtitle3"
			text = "some text3"/>
		</div>
	)
} */