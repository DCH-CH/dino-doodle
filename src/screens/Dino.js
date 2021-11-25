import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';

const Dino = ({match})=>{
    return (
    <div>
        <Header activeView={{dino:'active'}}/>
        <Body match = {match}/>
        <Footer/>
    </div>);

};

export default Dino;