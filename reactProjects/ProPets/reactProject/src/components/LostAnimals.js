import React, { useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch} from 'react-redux';
import { appSelector } from './../redux/appReducer';
import {useHistory, NavLink } from 'react-router-dom'
import {getAllLostsAction, lostsSelector} from './../redux/lostsReducer';
import { Card, Container} from 'react-bootstrap';
import {FaMapMarker} from 'react-icons/fa'
import Loader from './Loader';



const LostAnimals = () => {
  const auth = useSelector(appSelector).auth;
  const history = useHistory();
  const losts = useSelector(lostsSelector);
  const dispatch = useDispatch();


  useEffect(()=>{
    if(losts.length ===0){
    dispatch(getAllLostsAction())}
  }, [dispatch, losts])

  return (
    <>
    <Col xl={8} md={7} className="posts_component">
      <h3>Lost pets </h3>
      <hr />
      {!auth && <p className="col-md-12 col-9 pl-xl-4 ml-xl-2 my-md-4 my-3 pt-lg-2 pt-md-4">
      Would you like to publish a post? <span
          onClick={()=>{
            history.push('/');
          }}
          className="text-uppercase font-weight-bolder">join</span> to our community!
      </p>}
      
      <Container className="d-flex p-0 flex-wrap">
        {          
        losts.map((lost)=>
           <Col  sm= {1} md= {6} xl = {4} key ={lost.postId}><Card className = "lost_card"  style={{ width: '' }}>
          <Card.Body className = "">
            <Card.Title className = 'lost_title'>{lost.nickname}</Card.Title>
            <Card.Text className = "d-flex align-items-center">
              <FaMapMarker className="map_marker col-1"/> {lost.location}
            </Card.Text>
            <div className = "lost_img mb-2">
            <Card.Img variant="" src={lost.img} /> 
            </div>
            <NavLink className = "lost_details nav-linkp-0" aria-current="page" to={`/main/losts/${lost.postId}`}>view details <span>&raquo;</span>	 </NavLink>
          </Card.Body>
          </Card>
          </Col> 
        )
      }
      </Container>      
    </Col>
    {losts.length===0 && <Loader/>}
    </>
  )

}

export default LostAnimals;