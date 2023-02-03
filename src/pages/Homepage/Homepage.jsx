import React from 'react'
import { Navbar } from '../../components';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Bar, Customers, Blog } from '../../container';

function Homepage() {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <Bar />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Customers />
            <Laurels />
            <Blog />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
    )
}

export default Homepage