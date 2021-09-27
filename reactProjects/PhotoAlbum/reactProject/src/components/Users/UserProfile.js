import { AppContext } from '../../App'
import { useContext, useState } from 'react'
import UserAlbums from './UserAlbums'
import { useHistory } from 'react-router-dom'

const UserProfile = () => {

	const { getCurrentUser, updateUser, deleteUser } = useContext(AppContext)
	const [user, setUser] = useState(getCurrentUser());
	const history = useHistory()

	const changeFieldHandler = event => {
		setUser({ ...user, [event.target.name]: event.target.value })
	}

	const submitHandler = event => {
		event.preventDefault()
		if (!user.fName.trim() || !user.email.trim() || !user.password.trim()) return
		updateUser(user)
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className="card col-4 text-center p-3 my-2">
					{user.email !== "demo" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-octagon-fill position-absolute text-danger" viewBox="0 0 16 16" onClick={() => {
						if (window.confirm(`You really want to delete user: ${user.fName} ${user.lName}?`)) {
							deleteUser(user.id)
							history.push('/')
						}
					}} style={{ top: "5px", right: "5px", cursor: "pointer" }}>
						<path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
					</svg>}
					
					<h3 className="card-title">{user.fName} {user.lName}</h3>
					{user.avatar ? <img src={user.avatar} className="card-img-top" alt="..." /> :
						<svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" fill="currentColor" className="bi bi-person-fill mx-auto text-primary" viewBox="0 0 16 16">
							<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
						</svg>}
					<div className="card-body">
						<form onSubmit={submitHandler}>
							<div className="form-group">
								<label>First Name</label>
								<input type="text"
									className="form-control"
									name="fName"
									value={user.fName}
									onChange={changeFieldHandler} />
							</div>
							<div className="form-group">
								<label>Last Name</label>
								<input type="text"
									className="form-control"
									name="lName"
									value={user.lName}
									onChange={changeFieldHandler} />
							</div>
							<div className="form-group">
								<label>Email</label>
								<input type="text"
									className="form-control"
									name="email"
									value={user.email}
									disabled
                                    /* onChange={changeFieldHandler} */ />
							</div>
							<div className="form-group">
								<label>Password</label>
								<input type="text"
									className="form-control"
									name="password"
									value={user.password}
									onChange={changeFieldHandler} />
							</div>
							<div className="form-group mb-2">
								<label>Avatar</label>
								<input type="text"
									className="form-control"
									name="avatar"
									value={user.avatar}
									onChange={changeFieldHandler} />
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary w-100">Save changes</button>
							</div>
						</form>
					</div>
				</div>
				<UserAlbums />
			</div>
		</div>
	)
}

export default UserProfile