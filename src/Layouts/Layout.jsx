import React from 'react';
import Navbar from '../Home/Navbar';
import { Outlet } from 'react-router-dom';
import HeroSection from '../Home/HeroSection';

const Layout = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;