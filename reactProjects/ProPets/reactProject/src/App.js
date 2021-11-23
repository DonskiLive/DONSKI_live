import './App.css';
import { Route, Switch} from 'react-router-dom'
import Start from './pages/start';
import { appSelector, initApp} from './redux/appReducer';
import Loader from './components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import Main from './pages/main';
import Registration from './pages/Registration'
import Login from './pages/Login';
import { useEffect } from 'react';


function App() {
  const isLoading = useSelector(appSelector).isLoading;
  const auth = useSelector(appSelector).auth;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(initApp())
    }, [dispatch])
    console.log(auth);
 
  return (
    <div className="App">
       <Switch>
          <Route exact path='/'>
            <Start auth={auth} />
          </Route>
          <Route path='/main' component={Main} />
          <Route path='/registration'>
            <Registration auth={auth} />
          </Route>
          <Route path ='/login'>
            <Login auth={auth} />
          </Route>
        </Switch>  
      {isLoading && <Loader />}
           
      
    </div>
  );
}

export default App;

//{auth && <Redirect exact  from='/' to='/main' />}