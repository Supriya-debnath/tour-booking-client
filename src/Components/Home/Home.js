import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destinations/Destination';
import NewsLatter from '../NewsLatter/NewsLatter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Destination></Destination>
            <NewsLatter></NewsLatter>
            
        </div>
    );
};

export default Home;