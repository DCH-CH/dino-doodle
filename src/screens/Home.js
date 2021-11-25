import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';

const Home = ({match})=> {
    function goToDino(){
        window.location.assign('/dino')
        console.log(window.location.pathname);
    }
    return (
    <div>
        <Header activeView={{home:'active'}} />
        <Body match = {match} fc={goToDino.bind()}/>
        <Footer/>

    </div>
); };

export default Home;

