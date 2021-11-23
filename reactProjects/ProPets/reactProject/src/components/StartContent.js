import React, {Fragment, useState} from 'react';
import searchIcon from '../images/Group 11.svg';
import animals from '../images/8347@2x.png';
import {FaCircle} from "react-icons/all";
import {NavLink, useHistory} from 'react-router-dom';


const StartContent = () => {
    const [lostButtonHoverStyle, setLostButtonHoverStyle] = useState('');
    const [foundButtonHoverStyle, setFoundButtonHoverStyle] = useState('');

    const [lostMessage, setLostMessage] = useState('I lost my pet!')
    const [findMessage, setFindMessage] = useState('I found a pet!')

    const history = useHistory()

    return (
        <Fragment>
            <section className="container-fluid main-puppy">
                <div className="main-wrapper container-xl">
                    <div className="row">
                        <h1 className="col-xl-6 col-md-7 col-sm-12 py-5 px-lg-4 px-3 mb-3 mt-md-5">Welcome to
                            your <span>pawfessional </span>
                            community!</h1>

                    </div>
                    <div className={`row col-lg-7 col-md-9 col-sm-11 lost-button-wrapper ${lostButtonHoverStyle}`}>
                        <div className="">
                           <NavLink to ='/main/founds'> <div onMouseOver={()=>{
                                setLostButtonHoverStyle('wrapper-lost-button-hover');
                                setLostMessage('Click to find');
                            }} onMouseOut={()=>{
                                setLostButtonHoverStyle('');
                                setLostMessage('I lost my pet!');
                            }} className="lost-button">
                                <div className="py-4 d-flex justify-content-between">
                                    <h2 className="text-button">{lostMessage}</h2>
                                    <img className="icon-search" src={searchIcon} alt="search-icon"/>
                                </div>
                            </div></NavLink>
                    </div>
                </div>
                <div className={`row col-lg-6 col-md-8 col-sm-10 found-button-wrapper ${foundButtonHoverStyle}`}>
                    <div className="">
                    <NavLink to ='/main/losts'> <div  onMouseOver={()=>{
                                setFoundButtonHoverStyle('wrapper-found-button-hover');
                                setFindMessage('What to do?')
                            }} onMouseOut={()=>{
                                setFoundButtonHoverStyle('');
                                setFindMessage('I found a pet!')
                            }} className="found-button">
                                <div id="c" className="py-4">
                                    <h2 className="text-button">{findMessage}</h2>
                                </div> 
                        </div> </ NavLink>
                    </div>
                </div>
                <div className="container-xl text-with-link">
                    <div className="row">
                        <p className="col-md-12 col-9 pl-xl-4 ml-xl-2 my-md-4 my-3 pt-lg-2 pt-md-4">
                            I’m okay, just want to <span
                            onClick={()=> history.push('/registration')}
                            className="text-uppercase font-weight-bolder">join</span> the pawsome community!
                        </p>
                    </div>
                </div>
                </div>

                
            </section>


            <section className="jumbotron-fluid green-wrapper">
                <div className="container-sm">
                    <div className="row text-center justify-content-center py-2">
                        <h2 className="col-10 col-xl-9 py-md-5 py-3 my-4">Our fluffy space for lovers, admirers, dads and moms
                            of our
                            four-legged, winged, tailed
                            guys.</h2>
                    </div>
                </div>
            </section>

            <section className="container list-pet-needs-wrapper">
                <div className="row pt-lg-5 pb-lg-4 pb-3 my-lg-4">
                    <div className="col-md-9 col-lg-5 py-md-4 pb-5 animals-picture">
                        <img src={animals} alt="animals" width="100%"/>
                    </div>
                    <div className="px-lg-0 px-md-5 px-5 col-md-10 col-lg-7 list-items">
                        <h3 className="d-flex col-md-9 col-lg-10 col-xl-12 p-0">Here is collected everything that your pet
                            needs:</h3>
                        <ul>
                            <li>
                                <FaCircle size='0.8em' className='list-point'/>
                                professional veterinarian tips;
                            </li>
                            <li>
                                <FaCircle size='0.8em' className='list-point'/>
                                useful information about education and care;
                            </li>
                            <li>
                                <FaCircle size='0.8em' className='list-point'/>
                                information about pet-sitting and walking service;
                            </li>
                            <li>
                                <FaCircle size='0.8em' className='list-point'/>
                                and of course, great communication with new friends in your social network!
                            </li>
                        </ul>
                        <p className="my-3 pt-lg-2 pt-md-4 text-with-link p-0">
                            Make an account and <span
                            onClick={()=> history.push('/registration')}
                            className="text-uppercase font-weight-bolder">join</span> to us!
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
        


    );
};

export default StartContent;