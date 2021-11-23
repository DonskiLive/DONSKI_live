import React from 'react'
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Img from 'react-bootstrap/Image';
import { FaMapMarker } from 'react-icons/fa'
import moment from 'moment';
import { lostsSelector } from '../redux/lostsReducer';

const Lost = () => {
    const { id } = useParams();

    const losts = useSelector(lostsSelector);
    const index = losts.findIndex(p => p.postId === id);
    const lost = losts[index];

    return (
        <Col xl={8} className="posts_component">
            <div className="lost_header d-flex align-items-end">
                <h3 className="m-0">Lost pets </h3>
                <div className='lost_nickname px-3 fs-1 lh-1 fw-bold'>{lost.nickname}</div> |
                <p className='lost_location px-3 mb-0'><FaMapMarker className="map_marker col-1 mb-1" /> {lost.location}</p>
            </div>
            <hr />
            <Row className = "mt-5">
                <Col className="col-6">
                    <div className="lost_img mb-2" style={{ height: '27rem' }}>
                        <Img src={lost.img} />
                    </div>
                </Col>
                <Col className="col-6 ps-4">
                    <h4 className = "lost_type fs-3 " style={{ color: '#06B2BB' }}>{lost.type}{lost.breed ? `, ${lost.breed}` : ''} </h4>
                    <p className='lost_date mb-0'>{moment(lost.created.seconds * 1000).format('LL')}</p>
                    <hr />
                    <p className = "p_lost mb-0 mt-5"><span>Color: </span>{lost.color}</p>
                    <p className = "p_lost mb-0"><span>Gender: </span>{lost.gender}</p>
                    <p className = "p_lost mb-5"><span>Height: </span>{lost.height}</p>
                    <p className = "p_lost mt-5"><span>Distinctive features: </span>{lost.features}</p>
                </Col>
            </Row>
            <hr />
            <Row className = "mt-5">
              <p className = "p_lost mb-5"><span>Description: </span>{lost.description}</p>
              <p className = "p_lost m-0"><span>Owner: </span>{lost.ownerName}</p>
              <p className = "p_lost m-0"><span>Phone: </span>{lost.phone}</p>
              <p className = "p_lost m-0"><span>Email: </span>{lost.email}</p>
            </Row>
        </Col>
    )

}

export default Lost;