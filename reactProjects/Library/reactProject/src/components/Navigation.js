import { NavLink } from 'react-router-dom'
import Auth from './Auth'
import Search from './Search'

const Navigation = () => {

    return (
        <nav className="navbar navbar-expand" style={{ backgroundColor: "rgb(0, 0, 0, .9)" }}>
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/books">
                            Books
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/bookCreator">
                            Add book
                        </NavLink>
                    </li>
                    <Search />
                </ul>
                <Auth />
            </div>
        </nav>
    )
}

export default Navigation