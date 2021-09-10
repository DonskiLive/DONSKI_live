import '../css/Book.css'
/* import Button from './Button' */
import Counter from './CounterF'
import { MyContext } from "./App"
import { useContext } from 'react'

/* export default function Card(props){
	return(
		<div className="card">
			<h2>{props.title}</h2>
			<h5>{props.subtitle}</h5>
			<p>{props.text}</p>
		</div>
	)
}
 */
/* export default function Card({title, subtitle, text='unknown'}){ */
export default function Book({book:{title, author, genre, yearIssue, cover, id, price, quantity}}){ // {title, subtitle, text} = props создание переменной с помощю деструкторизации
	const {imgClickHandler} = useContext(MyContext)
	return(
		<div className="card" id = {"book_"+ id}>
			<h2 onClick = {titleClickHandler}>{title ?? 'no data'}</h2>
			<h5>{author ?? 'no data'}</h5>
			<p>Genre: {genre ?? 'no data'} </p>
			<p>year of issue: {yearIssue}</p> {/* {text ? text : 'unknown' */}
			<img src={cover} alt={title ?? 'no data'} onClick ={()=>imgClickHandler(id)}/>
			{/* <Button clickHandler = {(e)=>clickHandler(e, 'w100')}/> */}
			{/* <Counter min={0} max={5}/> */}
			<h3>Price: {price} &euro;</h3>
			<Counter id={id} 
					quantity={quantity}
					/* onIncClickHandler={onIncClickHandler}
					onDecClickHandler={onDecClickHandler} *//>
			<h3 style={{color:"red"}}>Total: {price * quantity} &euro;</h3>
		</div>
	)
}

/* function clickHandler(e, className){
	console.log(e) // SyntheticBaseEvent
	console.log(e.target.parentNode)
	const event = e.nativeEvent // привычный event
	console.log(event)
	e.target.parentNode.querySelector('img').classList.toggle(className)
}
 */
function titleClickHandler(e){
	e.target.style.color = 'red'
}