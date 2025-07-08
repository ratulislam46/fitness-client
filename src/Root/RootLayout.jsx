import React from 'react';
import Navbar from '../Layout/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Layout/Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;