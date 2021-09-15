import './App.css';
import React from 'react'
import Countries from './components/Countries';
import Meals from './components/Meals';

export const CountryContext = React.createContext()

export default class App extends React.Component {
  state = {
    currentCountry: null
  }

  changeCountry = (selectedCountry) => {
    this.setState({ ...this.state, currentCountry: selectedCountry })
  }

  onClickHandler = () => {
    console.log('hello')
  }


  render() {
    return (
      <> <CountryContext.Provider value={{
            changeCountry: this.changeCountry
          }}>
        <div className="container my-5">
         <Countries />
          
        </div></CountryContext.Provider>
        <div className="container my-5">
          {this.state.currentCountry ? <Meals country = {this.state.currentCountry}/> : null}
        </div>
      </>
    );
  }
}