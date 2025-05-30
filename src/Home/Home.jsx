import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Product from './Product';
import Renovation from './renovation';
import PartnerShowcasing from './PartnerShowcasing';
import OurWorks from './OurWorks';
import CompleteProject from './CompleteProject';
import SocialMediaCommunity from './SocialMediaCommunity';
import Footer from '../Footer/Footer';
import MinimalistSection from './MinimalistSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Product></Product>
            <Renovation></Renovation>
            <MinimalistSection></MinimalistSection>
            <PartnerShowcasing></PartnerShowcasing>
            <OurWorks></OurWorks>
            <CompleteProject></CompleteProject>
            <SocialMediaCommunity></SocialMediaCommunity>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;