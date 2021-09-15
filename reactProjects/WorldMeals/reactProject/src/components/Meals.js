import Loader from "./Loader"
import React from 'react';
import Error from "./Error";
import Meal from "./Meal";
import FoodApi from "../data"

export default class Meals extends React.Component {
	state = {
		loading: true,
		meals: [],
		error: null
	}

	renderMeals() {
		const { loading, meals, error } = { ...this.state }
		return loading && !error ? <Loader /> : error ? <Error /> : meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
	}

	/* 	constructor(props){
			super(props)
		}
	 */


	componentChangeCountry(country){
		this.setState({...this.state, loading: true})
		FoodApi.getMealsByCountry(country) // props sended from App.js we can use directly inside Class object 
			.then(data => {
				setTimeout(() => { this.setState({ ...this.state, loading: false, meals: [...data.meals] }) }, 2000)
			})
			.catch((error) => {
				this.setState({ ...this.state, loading: false, error: error.message })
			})
	}

	componentDidMount() {
		this.componentChangeCountry(this.props.country)
/* 		FoodApi.getMealsByCountry(this.props.country) // props sended from App.js we can use directly inside Class object 
			.then(data => {
				setTimeout(() => { this.setState({ ...this.state, loading: false, meals: [...data.meals] }) }, 2000)
			})
			.catch((error) => {
				this.setState({ ...this.state, loading: false, error: error.message })
			}) */
	}


	componentDidUpdate(prevProps) {
		if(prevProps.country !== this.props.country)
		/* this.setState({...this.state, loading: true}) */
		this.componentChangeCountry(this.props.country)
/* 		FoodApi.getMealsByCountry(this.props.country) // props sended from App.js we can use directly inside Class object 
			.then(data => {
				setTimeout(() => { this.setState({ ...this.state, loading: false, meals: [...data.meals] }) }, 2000)
			})
			.catch((error) => {
				this.setState({ ...this.state, loading: false, error: error.message })
			}) */
	}

	render() {
		return (
			<div className="row">
				{this.renderMeals()}
			</div>
		)
	}
}