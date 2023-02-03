import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Questions } from '../../container/Questions/Questions';
import { Footer } from '../../container';

import './faq.scss'
import Title from '../../components/Title/Title';

function Faq() {
    return (

        <div className="faq">
            <div className="faq-navbar">
                <Navbar />
            </div>
            <Title title={"Frequently Asked Questions"} previous={"Home"} next={"FAQ"} />
            <Questions />
            <Footer />
        </div>
    )
}

export default Faq