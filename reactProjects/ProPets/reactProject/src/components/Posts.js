import React from 'react'
import { postsSelector, getAllPostsAction } from '../redux/postsReducer';
import { Container, Card, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { appSelector } from './../redux/appReducer';
import Loader from './../components/Loader';
import { NavLink } from 'react-router-dom';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import moment from "moment"


const Posts = () => {
    const posts = useSelector(postsSelector);
    const dispatch = useDispatch();
    const isLoading = useSelector(appSelector).isLoading;

    useEffect(() => {
        console.log(posts, 'posts page')
        if (posts.length === 0)
            dispatch(getAllPostsAction());
    }, [dispatch, posts])


    return (
        <>
            <Col xl={8} className="posts_component">
                <Container>
                    {
                        posts.map((post) =>
                            <Card key={post.postId} style={{ width: '' }}>
                                <Row className='align-items-center mb-3'>
                                    <div className='pet_avatar'>
                                        <img src={post.petAvatar} alt='per-avatar'></img>
                                    </div>
                                    <div className='user_name col-8'>
                                        <h3 className = 'mb-0'>{post.petNickname ? post.petNickname : 'Anonymous'}</h3>
                                        <small>{(typeof post.created === 'string') ? post.created : moment(post.created.seconds * 1000).format('LL')}</small>
                                    </div>
                                </Row>
                                <Card.Img variant="top" src={post.img} />
                                <Card.Body>
                                    <Card.Title className='fs-3'>{post.title}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <NavLink className="nav-link post_link p-0" aria-current="page" to={`/main/${post.postId}`}>more...</NavLink>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="post_likes fs-4 p-0">
                                                {post.likes.count} </div>
                                            {checkLike(post, localStorage.getItem('LOCAL_ID')) ?
                                                <FaThumbsUp className="fs-5 col-1 p-0 like_item" />
                                                :
                                                <FaRegThumbsUp className="fs-5 col-1 p-0 like_item" />
                                            }
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>)
                    }

                </Container>
            </Col>
            {isLoading && <Loader />}
        </>
    )

}

export function checkLike(post, userId) {
    return post.likes.users.find(user => user === userId);
}

export default Posts;

