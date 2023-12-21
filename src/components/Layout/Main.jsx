import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/footer';

const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;