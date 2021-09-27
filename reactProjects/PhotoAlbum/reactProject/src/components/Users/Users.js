import { useContext } from 'react';
import { AppContext } from '../../App';
import User from './User';

const Users = ({ history }) => {
    const { users, currentUser } = useContext(AppContext);
    return (
        <div className='container'>
            <h1 className='text-center my-5'>{users.length ? 'All our users' : 'You can be first one!'}</h1>
            <div className="row row-cols-2 row-cols-md-4 justify-content-center">
                {users.map(user => <User key={user.id} user={user} />)}
            </div>
            {!currentUser && <>
                <hr />
                <div className='d-grid gap-2 col-4 mx-auto'>
                    <button className='btn btn-primary mb-3'
                        onClick={() => history.push('/registration')}>
                        Registration
                    </button>
                </div> 
            </>
            }
        </div>
    )
}
export default Users;
