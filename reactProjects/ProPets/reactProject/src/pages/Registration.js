import Modal from 'react-bootstrap/Modal'
import { useState} from 'react'
import { Form, FormLabel } from 'react-bootstrap'
import logo from './../images/logo-green.svg'
import { FaPaw } from "react-icons/all";
import styles from '../css_modules/tabs.module.css';
import { registrationAction, errorSelector } from '../redux/authReducer';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, Redirect } from "react-router-dom";

const Registartion = ({auth}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();
    
    const error = useSelector(errorSelector);

    function handleClick(e) {
        setConfirmPasswordMessage('');
        console.log('handleClick');

        if (passwordRegister === passwordConfirm) {
            e.preventDefault();
            dispatch(registrationAction(email, passwordRegister, name));          

        } else {
            console.log('!passwordRegister===passwordConfirm');
            setConfirmPasswordMessage('Passwords do not match. Please try again.')
        }
        
        console.log(error)
    }


    return (
        <>
        {auth && <Redirect exact from='/registration' to='/main/profile' />}
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
                        <Form className='w-100 mt-4 pr-2'>
                            <div className="d-flex align-items-center mb-3">
                                <FormLabel htmlFor='registerName'
                                    className={`${styles.label} col-3 text-end mb-0`}>Name:</FormLabel>
                                <input id='registerName' value={name} type='text'
                                    placeholder='Enter your full name'
                                    className={`col-9 ms-2 ${styles.inputs}`}
                                    onChange={event => { setName(event.target.value) }} />
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FormLabel htmlFor='registerEmail'
                                    className={`${styles.label} col-3 text-end mb-0`}>Email:</FormLabel>
                                <input id='registerEmail'
                                    type='text' placeholder='Enter your email'
                                    value={email}
                                    className={`col-9 ms-2 ${styles.inputs}`}
                                    onChange={event => { setEmail(event.target.value) }} />
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FormLabel htmlFor='registerPassword'
                                    className={`${styles.label} col-3 text-end mb-0`}>Password:</FormLabel>
                                <input id='registerPassword' type='password'
                                    placeholder='*****************'
                                    value={passwordRegister}
                                    className={`col-9 ms-2 ${styles.inputs}`}
                                    onChange={event => { setPasswordRegister(event.target.value) }} />
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <FormLabel htmlFor='repeatRegisterPassword' className={`${styles.label} col-3 text-end mb-0`}>Password:
                                </FormLabel>
                                <input id='repeatRegisterPassword' type='password'
                                    placeholder='*****************'
                                    value={passwordConfirm}
                                    className={`col-9 ms-2 ${styles.inputs}`}
                                    onChange={event => { setPasswordConfirm(event.target.value) }} />
                            </div>
                        </Form>
                        <div className='col-9 my-2 ms-auto'> 
                            <p className={`${styles.subscription} ms-2`}>Please re-enter your password</p>
                            <div className={`${styles.statusMessageWrapper} mt-2 ms-2`}>
                                {confirmPasswordMessage && <p className={styles.statusMessage}>{confirmPasswordMessage}</p>}
                            </div>
                            <div className={`${styles.statusMessageWrapper} mt-2 ms-2`}>
                                {error && <p className={styles.statusMessage}>{error}</p>}
                            </div>
                        </div>
                    </div>

                </Modal.Body>

                <Modal.Footer className='col-10 mx-auto mb-3'>
                    <div className='row align-items-center justify-content-center flex-wrap-reverse flex-sm-wrap'>
                        <div className='col-sm-6 col-12 p-0'>
                            <p className={`${styles.subscription}  mt-2`}>Password must have at least 8 characters with at least one Capital letter, at least one lower case letter and at
                                least one number or special character.</p>
                        </div>
                        <div className='col-sm-6 col-12 p-0 justify-content-end d-flex flex-wrap-reverse flex-sm-wrap'>
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

export default Registartion;

