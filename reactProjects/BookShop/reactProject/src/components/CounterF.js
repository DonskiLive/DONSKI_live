import '../css/Button.css'
/* import { useState } from 'react' */
//useState это huck крюк
/* import { useContext } from 'react' */
/* import { MyContext } from "./App" */
/* import { MyCnt } from "./AppF.js" */

/* const CounterF = ({ id, quantity }) => {
	const cnt = useContext(MyCnt)
	return (
		<div className="counter">
			<h4>Quantity: {quantity}</h4>
			<button onClick={() => cnt.onDecClickHandler(id)}>-</button>
			<button onClick={() => cnt.onIncClickHandler(id)}>+</button>
		</div>
	) */

		/* 		<MyContext.Consumer >
					{{onDecClickHandler, onIncClickHandler} => {
						return (
							<div className="counter">
								<h4>Quantity: {quantity}</h4>
								<button onClick={() => onDecClickHandler(id)}>-</button>
								<button onClick={() => onIncClickHandler(id)}>+</button>
							</div>)
					}}
				</MyContext.Consumer> */

		/* 		<div className="counter">
					<h4>Quantity: {quantity}</h4>
					<button onClick={()=>onDecClickHandler(id)}>-</button>
					<button onClick={()=>onIncClickHandler(id)}>+</button>
				</div> */
/* }

export default CounterF */




import { MyContext } from "./App"

const CounterF = ({ id, quantity }) => {
	return (
		<MyContext.Consumer >
			{cnt => {
				return (
					<div className="counter">
						<h4>Quantity: {quantity}</h4>
						<button className='button-style button-minus' onClick={() => cnt.onDecClickHandler(id)}>remove</button>
						<button className='button-style button-plus' onClick={() => cnt.onIncClickHandler(id)}>add</button>
					</div>)
			}}
		</MyContext.Consumer>
	)
}

export default CounterF







/* const CounterF = ({min, max}) => {
	const [count, setCount] = useState(min)
	const inc=()=> {
		if(count < max){
		setCount(count + 1)
		console.log(count)}
	}
	const dec =()=> {
		if(count > min){
		setCount(count - 1)
		console.log(count)}
	}
	return (
		<div className="counter">
			<h4>Quantity: {count}</h4>
			<button onClick={dec}>-</button>
			<button onClick={inc}>+</button>
		</div>
	)
}

export default CounterF */