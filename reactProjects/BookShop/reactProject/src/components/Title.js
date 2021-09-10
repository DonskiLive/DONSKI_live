export default function Title(props){
/* 	console.log(props) */
	return (
		<h1>{props.title ?? 'Hello world!'}</h1>
	)
}
/* <h1>{props.title ? props.title : 'Hello world!'}</h1> */