import React from 'react';
import Navbar from '../Layout/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Layout/Footer/Footer';
import RootDynamicTitle from '../Components/DynamicTitle/RootDynamicTitle';

const HomeLayout = () => {
    return (
        <>
            <RootDynamicTitle></RootDynamicTitle>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='min-h-[calc(100vh-200px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;