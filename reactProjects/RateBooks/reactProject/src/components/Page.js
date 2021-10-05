import { Route, Switch } from 'react-router-dom';
import BookInfo from './BookInfo';
import Books from './Books';
import Home from './Home';
import AddBookForm from './AddBookForm';
import BookWithComments from './BookWithComments';


const Page = ()=>{
    return(
        <Switch>
            <Route exact path = '/book/:id' component = {BookInfo}/>
            <Route exact path = '/comments/:id' component = {BookWithComments}/>
            <Route path = '/books' component = {Books}/>
            <Route path = '/add_book' component = {AddBookForm}/>
            <Route path = '/' component = {Home}/>
        </Switch>
    )
}

export default Page