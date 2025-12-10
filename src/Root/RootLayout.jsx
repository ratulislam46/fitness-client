import React from 'react';
import Navbar from '../Layout/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Layout/Footer/Footer';
import RootDynamicTitle from '../Components/DynamicTitle/RootDynamicTitle';
import ScrollProgress from '../Components/ScrollProgress/ScrollProgress';

const HomeLayout = () => {
    return (
        <>
            <RootDynamicTitle></RootDynamicTitle>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='min-h-[calc(100vh-200px)] relative z-10'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <section>
                <ScrollProgress />
            </section>
        </>
    );
};

export default HomeLayout;