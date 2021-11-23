import { Redirect } from 'react-router-dom'
import HeaderGreen from "./../components/HeaderGreen";
import StartContent from "./../components/StartContent";
import Footer from "./../components/Footer";


const Start = ({auth}) => {
    console.log(auth)
    return (    
        <>
        {auth && <Redirect from='/' exact to='/main' />}
            <HeaderGreen />
            <StartContent/>
            <Footer/>
        </>
    );
};

export default Start;
