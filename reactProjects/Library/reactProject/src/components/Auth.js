import { Link, useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import { initialState, logout } from '../store/books/actionsCreator'
import { useEffect} from 'react'
import { resetCurrentLevel, getBooks, setBooksToLocalStorage} from '../data/booksData'
import {demoLibrary} from '../store/demoLibrary'

const Auth = ({currentLevel, initial, loading, books, userLogout})=>{

    if(!loading){
    const booksArray = getBooks()
    if(booksArray.length <= 3){setBooksToLocalStorage(demoLibrary); initial()}
    }
    
    useEffect(()=>{ 
        if(books.length ===0)
        initial()
        // eslint-disable-next-line
    }, [])

    const history = useHistory()
 return (
     <>
     {loading ? <span className="spinner-border spinner-border-sm me-2 text-light" role="status" aria-hidden="true"></span> : currentLevel ? <>
                <li className ="text-white me-4 list-unstyled">{`Logged with access level: ${currentLevel.name}`} </li>
                <li className ="text-white list-unstyled"
                    onClick = {()=>{
                        userLogout()
                        resetCurrentLevel()
                        history.push('/')
                    }}
                    style = {{cursor :'pointer'}}
                    >Logout</li>
                </> :
                <>
                <li className ="text-white me-4 list-unstyled">Actual access level: Standard</li>
                <Link className = 'nav-item' to="/login">Login</Link>
                </>
                } 
         
     </>
 )
}

const mapStateToProps = ({booksReducer})=>{
    return{
        currentLevel: booksReducer.currentLevel,
        loading: booksReducer.loading,
        books: booksReducer.books
    }
}

const mapDispatchToProps = dispatch => {
    return{
        initial: ()=>dispatch(initialState()),
        userLogout: ()=>dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)