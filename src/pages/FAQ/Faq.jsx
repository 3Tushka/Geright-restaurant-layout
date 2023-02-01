import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Questions } from '../../container/Questions/Questions';
import { Footer } from '../../container';

import './faq.scss'

function Faq() {
    return (

        <div className="faq">
            <div className="faq-navbar">
                <Navbar />
            </div>
            <div className="faq-header bg__wrapper flex__center">
                <div className="faq-header-title">
                    <h1 className="headtext__cormorant">Frequently Asked Questions</h1>
                    <div className="breadcrumbs flex__center">
                        <div className="breadcrumbs-first">
                            <p className='p__opensans'>Home</p>
                        </div>
                        <div className="breadcrumbs-arrow"></div>
                        <div className="breadcrumbs-second">
                            <p className='p__opensans'>FAQ</p>
                        </div>
                    </div>
                </div>
            </div>

            <Questions />
            <Footer />
        </div>
    )
}

export default Faq