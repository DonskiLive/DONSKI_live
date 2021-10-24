import { Route, Redirect } from 'react-router-dom';
import './App.css';
import AuthComponent from './components/AuthComponent';
import Header from './components/Header';
import Home from './components/Home';
import {useSelector, useDispatch} from 'react-redux'
import {appSelector, authSuccess} from './store/app'
import { useEffect } from 'react';
import Loader from './components/Loader';
import ContactMain from './components/ContactMain';

function App() {
  const {loading, auth} = useSelector(appSelector);
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(authSuccess())
}, [dispatch])

  return (
    <div className="App">
      <Header />
      <hr />
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={ContactMain} />
        <Route path='/login' component={AuthComponent} />
      {loading && <Loader />}
      {auth && <Redirect exact from = '/' to='/contacts'/>}
    </div>
  );
}

export default App;
