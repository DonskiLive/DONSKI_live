import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { appSelector } from './../redux/appReducer';
import { Route, Switch } from 'react-router-dom';
import LostAnimals from '../components/LostAnimals';
import FoundAnimals from '../components/FoundAnimals';
import Hotels from '../components/Hotels';
import Walking from '../components/Walking';
import Fostering from '../components/Fostering';
import VetHelp from '../components/VetHelp';
import SidebarLeft from '../components/sidebarLeft/SidebarLeft';
import SidebarRight from '../components/sidebarRight/SidebarRight';
import HeaderWhite from '../components/HeaderWhite';
import Posts from '../components/Posts';
import AddPost from '../components/AddPost';
import Profile from '../components/Profile';
import Loader from './../components/Loader'
import Post from './../components/Post'
import AddLostAnimals from '../components/AddLost';
import Lost from './../components/Lost';

const Main = () => {

    const isLoading = useSelector(appSelector).isLoading;
    const auth = useSelector(appSelector).auth;
    console.log(isLoading, 'main')
    return (
        <>
            <div className="outer_container">
                <HeaderWhite />
                <Container fluid>
                    <Row className="flex-nowrap">
                        <SidebarLeft />
                        {isLoading && <Loader />}
                        {auth && <Switch>
                            <Route path="/main/add-post" component={AddPost} />
                            <Route path="/main/profile" component={Profile} />
                            <Route path="/main/hotels" component={Hotels} />
                            <Route path="/main/walking" component={Walking} />
                            <Route path="/main/fostering" component={Fostering} />
                            <Route path="/main/vethelp" component={VetHelp} />
                            <Route path="/main/:id" exact component={Post} />
                            <Route path="/main" exact component={Posts} />

                        </Switch>}
                        <Switch>
                            <Route path="/main/losts" exact component={LostAnimals} />
                            <Route path="/main/losts/add-lost" exact component={AddLostAnimals} />
                            <Route path="/main/losts/:id" exact component={Lost} />
                            <Route path="/main/founds" exact component={FoundAnimals} />                            
                        </Switch>
                        <SidebarRight />
                    </Row>
                </Container>
            </div>
            
        </>
    )
}

export default Main;
