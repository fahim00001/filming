import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/footer';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
       <>
        <Banner></Banner>
        <Services></Services>
        <Reviews></Reviews>
       </>
    );
};

export default Home;