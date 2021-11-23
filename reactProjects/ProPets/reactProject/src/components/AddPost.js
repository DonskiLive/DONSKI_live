import { useDispatch, useSelector } from 'react-redux';
import { addPostAction } from '../redux/postsReducer';
import { useState } from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { appSelector } from '../redux/appReducer';
import { useHistory } from "react-router-dom";
import { postsSelector } from '../redux/postsReducer';
import Loader from './../components/Loader'
import { userSelector } from '../redux/userReducer';
import {serverTimestamp} from 'firebase/firestore';

const AddPost = () => {
    const posts = useSelector(postsSelector);
    const isLoading = useSelector(appSelector).isLoading;
    const user = useSelector(userSelector);

    const [titleInput, setTitleInput] = useState('');
    const [textInput, setTextInput] = useState('');
    const [imgInput, setImgInput] = useState('');
    const id = "post_" + (posts.length + 1)

    const dispatch = useDispatch();
    const history = useHistory();


    return (
        <>
            <Col xl={8} className="posts_component">
                <h3>Your new post! <span>Simply text, add photo and publish.</span></h3>
                <hr />
                <Form onSubmit={e => {
                    e.preventDefault();
                    const userId = localStorage.getItem('LOCAL_ID');
                    const postId = id;
                    const likes = { count: 0, users: [] };
                    const comments = [];
                    const petAvatar = user.petAvatar ? user.petAvatar : 'https://res.cloudinary.com/propets/image/upload/v1619609496/icon/1951910-200_bq2hry.png';
                    const userName = user.name;
                    const petNickname = user.petNickname;
                    const created = serverTimestamp()
                    dispatch(addPostAction({ postId, title: titleInput, text: textInput, userId, img: imgInput, likes, comments, petAvatar, userName, petNickname, created }));
                    setTitleInput('');
                    setTextInput('');
                    setImgInput('');
                    history.push('/main')

                }}>
                    <Form.Group className="mb-5" controlId="postTitle">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text"
                            value={titleInput}
                            onChange={e => setTitleInput(e.target.value)}
                            placeholder="Type your post title" />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="postText">
                        <Form.Label>Text:</Form.Label>
                        <br />
                        <Form.Text className="text-muted">
                            up to 1500 char
                    </Form.Text>
                        <Form.Control as="textarea" rows={12}
                            value={textInput}
                            onChange={e => {
                                setTextInput(e.target.value)
                            }}
                            placeholder="Type your post text"
                        />

                    </Form.Group>
                    <Form.Group className="mb-5" controlId="postImg">
                        <Form.Label>Photo:</Form.Label>
                        <Form.Control type="text"
                            value={imgInput}
                            onChange={e => {
                                setImgInput(e.target.value)
                            }}
                            placeholder="Enter photo url" />
                    </Form.Group>

                    <Row className=' justify-content-between'>
                        <div className='p-4 col-6 d-flex align-items-center'>
                            <div className='pet_avatar'>
                                <img src={user.petAvatar ? user.petAvatar : 'https://res.cloudinary.com/propets/image/upload/v1619609496/icon/1951910-200_bq2hry.png'} alt='pet-avatar'></img>
                            </div>
                            <div className='user_name'>
                                <h3 className='m-2 fs-5'>{user.petNickname ? user.petNickname : 'Anonymus'}</h3>
                            </div>
                        </div>
                        <Button className="col-5 align-self-center add_btn" type="submit">
                            Publish
                </Button>
                    </Row>


                </Form>
            </Col>
            {isLoading && <Loader />}
        </>
    )
}

export default AddPost;