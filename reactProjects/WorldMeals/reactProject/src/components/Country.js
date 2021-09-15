import React, {useContext} from 'react'
import { CountryContext } from "../App"

const Country =({country}) =>{
const context = useContext(CountryContext) // instead of CountryContext.Consumer possible to use useContext
console.log(country)
	return (
		<div className="col-6 col-sm-4 col-md-3">
			<button onClick={()=>context.changeCountry(country.strArea)} className="btn btn-outline-primary my-1 w-100">{country.strArea}</button>
		</div>
	)
}

export default Country




/* import { CountryContext } from "../App"

const Country =({country}) =>{
console.log(country)
	return (
		<CountryContext.Consumer>{
            context =>{
		<div className="col-6 col-sm-4 col-md-3">
			<button onClick={()=>context.changeCountry(country.strArea)} className="btn btn-outline-primary my-1 w-100">{country.strArea}</button>
		</div>
		}}
        </CountryContext.Consumer>
	)
}

export default Country */