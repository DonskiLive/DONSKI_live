

const Button = ({clickHandler})=>{
	return(
		<button onClick ={clickHandler}>click me</button>
	)
}

// e - SyntheticBaseEvent {_reactName: "onClick", _targetInst: null, type: "click", nativeEvent: PointerEvent, target: button, …}


/* function clickHandler(e){console.log(e)} */


export default Button