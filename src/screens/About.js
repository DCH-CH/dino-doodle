import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';

const About = ({match}) => {
    return (
        <div>
            <Header activeView={{ about: 'active' }} />
            <Body match = {match}/>
            <Footer/>
        </div>
    );
};


export default About;