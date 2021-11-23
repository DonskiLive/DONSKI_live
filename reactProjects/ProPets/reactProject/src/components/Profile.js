import React from 'react'
import { Row, Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { GrEdit } from "react-icons/gr";
import { FaSave } from "react-icons/fa";
import { userSelector, getUserAction, updateUserAction } from './../redux/userReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Loader from './../components/Loader'
import { FaUserCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";


const Profile = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserAction(localStorage.getItem('LOCAL_ID')));
    }, [dispatch]);

    
    const user = useSelector(userSelector);
    console.log(user)

    const [email, setEmail] = useState(user.email);
    const [phoneInput, setPhoneInput] = useState(user.phone);
    const [avatarInput, setAvatarInput] = useState(user.avatar);
    const [petInput, setPetInput] = useState(user.pet);
    const [nickNameInput, setNickNameInput] = useState(user.petNickname);
    const [petAvatarInput, setPetAvatarInput] = useState(user.petAvatar);

    useEffect(()=>{
        setEmail(user.email)
        setPhoneInput(user.phone)
        setAvatarInput(user.avatar)
        setPetInput(user.pet)
        setNickNameInput(user.petNickname)
        setPetAvatarInput(user.petAvatar)
    },[user])


    return (
        <>
         {!user.userId ? <Loader /> :
         
            <Col xl={8} md={7} className="posts_component">
                <h3>Your profile. <span>Change, edit and manage your data.</span></h3>
                <hr />
                <Row className="profile_row">
                    <div className="profile_subtitle">
                        <h4>My profile</h4>
                    </div>
                </Row>
                <Row className=' justify-content-between'>
                    <div className='p-4 col-6 d-flex align-items-center'>
                        {user.avatar ? <div className='pet_avatar'>
                            <img src={user.avatar} alt = {user.name}/>
                        </div>
                            : <FaUserCircle className='display-1' />}

                        <div className='user_name d-flex align-items-center'>
                            <h3 className='m-4 fs-5'>{user.name}</h3>
                            <GrEdit />
                        </div>
                    </div>
                </Row>
                <Form onSubmit={e => {
                    e.preventDefault();
                    console.log(email, avatarInput, petInput, nickNameInput, user.name, user.email)
                    dispatch(updateUserAction(user.userId, { email, avatar: avatarInput, pet: petInput, phone: phoneInput, petNickname: nickNameInput, petAvatar: petAvatarInput }));
                    history.push('.');

                }}>
                    <Form.Group className="mb-2 d-flex" controlId="email">
                        <Form.Label className="form-label col-2 text-end px-3 align-self-end mb-0">Email:</Form.Label>
                        <Form.Control className="profile_input mx-1"
                            value = {email}
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder={user.email} />
                    </Form.Group>
                    <Form.Group className="mb-2 d-flex" controlId="phone">
                        <Form.Label className="form-label col-2 text-end px-3 align-self-end mb-0">Phone:</Form.Label>
                        <Form.Control className="profile_input mx-1"
                            value = {phoneInput}
                            type="text"
                            onChange={e => setPhoneInput(e.target.value)}
                            placeholder={user.phone ? user.phone : 'Type your phone number'} />
                    </Form.Group>
                    <Form.Group className="mb-2 d-flex" controlId="userAvatar">
                        <Form.Label className="form-label col-2 text-end px-3 align-self-end mb-0">Avatar:</Form.Label>
                        <Form.Control className="profile_input mx-1"
                            value = {avatarInput}
                            type="text"
                            onChange={e => setAvatarInput(e.target.value)}
                            placeholder={getPlaceHolder(user, 'avatar', "Enter your avatar url")} />
                    </Form.Group>

                    <Form.Group className="mb-2 d-flex" controlId="pet">
                        <Form.Label className="form-label col-2 text-end px-3 align-self-end mb-0">My pet:</Form.Label>
                        <Form.Control className="profile_input mx-1 pet_input"
                            value = {petInput}
                            type="text"
                            onChange={e => setPetInput(e.target.value)}
                            placeholder={getPlaceHolder(user, 'pet', "Enter your pet art")} />
                    </Form.Group>
                    <Form.Group className="mb-2 d-flex" controlId="petNick">
                        <Form.Label className="form-label col-2 text-end px-3 align-self-end mb-0">Nick:</Form.Label>
                        <Form.Control className="profile_input mx-1 pet_input"
                            value = {nickNameInput}
                            type="text"
                            onChange={e => setNickNameInput(e.target.value)}
                            placeholder={getPlaceHolder(user, 'petNickname', "Type nickname your pet")} />
                    </Form.Group>
                    <Form.Group className="mb-2 d-flex" controlId="petAvatar">
                        <Form.Label className="form-label col-2 text-end px-3 align-self-end mb-0">Photo:</Form.Label>
                        <Form.Control className="profile_input mx-1 pet_input"
                            value = {petAvatarInput}
                            type="text"
                            onChange={e => setPetAvatarInput(e.target.value)}
                            placeholder={getPlaceHolder(user, 'petAvatar', "Enter photo url")} />
                    </Form.Group>

                    <div className="pet_avatar ms-auto pet_profile">
                        <img src={!user.petAvatar ? 'https://res.cloudinary.com/propets/image/upload/v1619609496/icon/1951910-200_bq2hry.png' : user.petAvatar} alt = 'pet avatar'></img>
                    </div>

                    <div className="d-grid gap-2 d-flex justify-content-end">
                        <Button className="align-self-center add_btn" type="submit">
                            <FaSave />  Save changes
                    </Button>
                    </div>

                </Form>

            </Col>
            }
        </>
    )
}



function getPlaceHolder(object, field, message) {
    return !object[field] ? message : object[field]
}

export default Profile;