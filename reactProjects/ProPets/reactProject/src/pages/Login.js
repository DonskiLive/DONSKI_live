import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { Form, FormLabel } from 'react-bootstrap'
import logo from './../images/logo-green.svg'
import { FaPaw } from "react-icons/all";
import styles from '../css_modules/tabs.module.css';
import { loginAction, errorSelector } from '../redux/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, Redirect } from "react-router-dom";

const Login = ({auth}) => {
    const [enterLogin, setEnterLogin] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector(errorSelector);
    console.log(error, 'login')

    function handleClick(e) {
        console.log('handleClick');
        e.preventDefault();
        dispatch(loginAction(enterLogin, password));
       /*  history.push('/main') */
    }


    return (
        <>
        {auth && <Redirect exact from='/login' to='/main' />}
        <div className='modal-backdrop'>
            <Modal
                show={true}
                centered
                size='lg'
            >
                <Modal.Header>
                    <img src={logo} alt="ProPets logo" />
                    <span className='ms-4 m-color-text'> Welcome!</span>
                </Modal.Header>
                <Modal.Body>
                    <div className='col-10 p-2 m-background-color mx-auto'>
                        <h5 className='text-center text-white fw-bold mb-0'>Sign up</h5>
                    </div>
                    <div className='col-10 text-right align-self-stretch mx-auto mb-4'>
                        <Form className='w-100 mt-5 pr-2'>
                            <div className="d-flex align-items-center mb-3">
                                <FormLabel htmlFor='registerEmail'
                                    className={`${styles.label} col-3 text-end mb-0`}>Email:</FormLabel>
                                <input id='registerEmail'
                                    type='text' placeholder='Enter your email'
                                    value={enterLogin}
                                    className={`col-9 ms-2 ${styles.inputs}`}
                                    onChange={event => { setEnterLogin(event.target.value) }} />
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FormLabel htmlFor='registerPassword'
                                    className={`${styles.label} col-3 text-end mb-0`}>Password:</FormLabel>
                                <input id='registerPassword' type='password'
                                    placeholder='*****************'
                                    value={password}
                                    className={`col-9 ms-2 ${styles.inputs}`}
                                    onChange={event => { setPassword(event.target.value) }} />
                            </div>
                           
                        </Form>
                        <div className='col-9 my-2 ms-auto'> 
                            <div className={`${styles.statusMessageWrapper} mt-2 ms-2`}>
                                {error && <p className={styles.statusMessage}>{error}</p>}
                            </div>
                        </div>
                        <div className='text-center mt-5'>
                            <h4>Not register yet? <Link to='/registration' className='m-color-text'>Sign up</Link></h4>
                        </div>
                    </div>

                </Modal.Body>

                <Modal.Footer className='col-10 mx-auto mb-3'>
                    <div className='row align-items-center flex-sm-wrap'>
                        <div className='col-sm-6 col-12 p-0 d-flex'>
                            <button className={`${styles.formButton} ${styles.cancelButton} me-3`}
                                onClick={() => {
                                    history.push('/')
                                }}>Cancel
                            </button>
                            <button className={`${styles.formButton} ${styles.submitButton} me-0`}
                                onClick={(e) => { handleClick(e) }}>
                                <FaPaw color='white' className={` ${styles.pawIcon}`} />Submit
                            </button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    )
}

export default Login;

