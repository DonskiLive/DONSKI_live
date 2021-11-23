import React from 'react'
import { Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { FaPaw } from "react-icons/fa";
import { userSelector, getUserAction } from './../redux/userReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { appSelector } from './../redux/appReducer';
import Loader from './../components/Loader'
import { useHistory } from "react-router-dom";
import lostPicture from './../images/add_form_icon.svg';
import { addLostAction } from './../redux/lostsReducer';
import {serverTimestamp} from 'firebase/firestore';
import { storage } from './../config/firebase-config';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'


const AddLostAnimals = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const isLoading = useSelector(appSelector).isLoading;

    useEffect(() => {
        dispatch(getUserAction(localStorage.getItem('LOCAL_ID')));
    }, [dispatch]);


    const user = useSelector(userSelector);

    const [nickname, setNickname] = useState("");
    const [type, setType] = useState("");
    const [gender, setGender] = useState("")
    const [breed, setBreed] = useState("");
    const [color, setColor] = useState("");
    const [height, setHeight] = useState('45-70 cm')
    const [img, setImg] = useState('');
    const [phoneInput, setPhoneInput] = useState(user.phone);
    const [emailInput, setEmailInput] = useState(user.email);
    const [features, setFeatures] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [fileUrl, setFileUrl] = useState(null);

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const imageRef = ref(storage, file.name);
        const metaData = {
            contentType: 'image/jpeg'
        }
        await uploadBytes(imageRef, file, metaData)
        const url = await getDownloadURL(imageRef)
        setFileUrl(url);

    }


    return (
        <>
            <Col xl={8} md={7} className="posts_component">
                <h3>Lost your buddy? <span>Keep calm and complete the form.</span></h3>
                <hr />

                <Form className="mt-5" onSubmit={e => {
                    e.preventDefault();
                    const userId = localStorage.getItem('LOCAL_ID');
                    const postId = "lost_" + serverTimestamp().seconds;
                    const created = serverTimestamp();
                    const ownerName = user.name;
                    dispatch(addLostAction({ userId, postId, nickname, type, gender, breed, color, height, img: fileUrl, phone: phoneInput, email: emailInput, features, description, location, ownerName, created }));
                    history.push('/main/losts');

                }}>
                    <div className="d-flex mb-5 ">
                        <div className="col-7">
                            <Form.Group className="mb-2 d-flex" controlId="nickname">
                                <Form.Label className="form-label col-3 text-end px-3 align-self-end mb-0">Nickname:</Form.Label>
                                <Form.Control className="profile_input mx-1"
                                    value={nickname}
                                    type="text"
                                    onChange={e => setNickname(e.target.value)}
                                    placeholder="Type nickname your buddy" />
                            </Form.Group>
                            <Form.Group className="mb-2 d-flex" controlId="type">
                                <Form.Label className="form-label col-3 text-end px-3 align-self-end mb-0">Type:</Form.Label>
                                <Form.Control className="p-2 mx-1 my-2"
                                    as="select" onChange={e => setType(e.target.value)}>
                                    <option>Choose a type</option>
                                    <option>Dog</option>
                                    <option>Cat</option>
                                    <option>Rabbit</option>
                                    <option>Parrot</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-2 d-flex" controlId="gender">
                                <Form.Label className="form-label col-3 text-end px-3 align-self-end mb-0">Gender:</Form.Label>
                                <Form.Control className="p-2 mx-1 my-2"
                                    as="select" onChange={e => setGender(e.target.value)}>
                                    <option> Choose a gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-2 d-flex" controlId="breed">
                                <Form.Label className="form-label col-3 text-end px-3 align-self-end mb-0">Breed:</Form.Label>
                                <Form.Control className="profile_input mx-1"
                                    value={breed}
                                    type="text"
                                    onChange={e => setBreed(e.target.value)}
                                    placeholder="Type a breed your pet" />
                            </Form.Group>

                            <Form.Group className="mb-2 d-flex" controlId="color">
                                <Form.Label className="form-label col-3 text-end px-3 align-self-end mb-0">Color:</Form.Label>
                                <Form.Control className="profile_input mx-1"
                                    value={color}
                                    type="text"
                                    onChange={e => setColor(e.target.value)}
                                    placeholder="Type a color your buddy" />
                            </Form.Group>
                            <Form.Group className="mb-2 d-flex" controlId="height">
                                <Form.Label className="form-label col-3 text-end px-3 align-self-end mb-0">Height:</Form.Label>
                                <Form.Control className="p-2 mx-1 my-2"
                                    as="select" onChange={e => setHeight(e.target.value)}>
                                    <option> 45-70 cm</option>
                                    <option>71-100 cm</option>
                                    <option>101-130 cm</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-2 d-flex" controlId="petImg">
                                <Form.Label className="form-label col-3 text-end px-3 align-self-end mb-0">Photo:</Form.Label>
                                <Form.Control className="profile_input mx-1"
                                    value={img}
                                    type="text"
                                    onChange={e => setImg(e.target.value)}
                                    placeholder="Enter photo url" />
                            </Form.Group>
                            <Form.Group className="mb-2 mt-3 d-flex" controlId="petFeatures">
                                <Form.Label className="form-label col-3 text-end px-3 align-self-end mb-0">Distinktive features:
                                <br />
                                    <Form.Text className="text-muted">
                                        up to 60 char
                                </Form.Text>
                                </Form.Label>
                                <Form.Control className=""
                                    as="textarea"
                                    rows={2}
                                    onChange={e => setFeatures(e.target.value)}
                                    placeholder="Type distinktive features of your buddy" />
                            </Form.Group>
                            <Form.Group className="mb-2 mt-3 d-flex" controlId="petDescription">
                                <Form.Label className="form-label col-3 text-end px-3 align-self-end mb-0">Description:
                                <br />
                                    <Form.Text className="text-muted">
                                        up to 150 char
                                </Form.Text>
                                </Form.Label>
                                <Form.Control className=""
                                    as="textarea"
                                    rows={6}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="Type description of your buddy" />
                            </Form.Group>
                            <Form.Group className="mb-2 mt-3 d-flex" controlId="location">
                                <Form.Label className="form-label col-3 text-end px-3 align-self-end mb-0">Location:
                                <br />
                                </Form.Label>
                                <Form.Control className=""
                                    as="textarea"
                                    rows={2}
                                    onChange={e => setLocation(e.target.value)}
                                    placeholder="Type where your pet is lost" />
                            </Form.Group>

                        </div>
                        <div className="col-5 d-flex flex-column justify-content-between">
                            <div>
                                <img className='lost_icon' src={lostPicture} alt='lost pet' />
                            </div>

                            <Form.Group className='file_form'>
                                <Form.Label className="form-label mb-2">Upload a photo of your pet:</Form.Label>
                                <Form.File
                                    id="custom-file"
                                    label=""
                                    custom
                                    onChange={onFileChange}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <hr />
                    <Form.Group className="my-5 d-flex align-items-center" controlId="contacts">
                        <Form.Label className="form-label m-0 ">Contacts:</Form.Label>
                        <Form.Control className="profile_input mx-5 "
                            value={phoneInput}
                            type="text"
                            onChange={e => setPhoneInput(e.target.value)}
                            placeholder={getPlaceHolder(user, 'phone', "Type your phone")}
                            required />
                        <Form.Control className="profile_input mx-0"
                            value={emailInput}
                            type="text"
                            onChange={e => setEmailInput(e.target.value)}
                            placeholder={getPlaceHolder(user, 'email', "Type your email")} />
                    </Form.Group>

                    <div className="d-grid justify-content-end mt-5">
                        <Button className="m-0 add_btn" type="submit" disabled={fileUrl ? false : true} >
                            <FaPaw />  Publish
                    </Button>
                    </div>

                </Form>


            </Col>
            {isLoading && <Loader />}
        </>
    )
}



function getPlaceHolder(object, field, message) {
    return !object[field] ? message : object[field]
}


export default AddLostAnimals;