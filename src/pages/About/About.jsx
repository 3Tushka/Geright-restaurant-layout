import React from 'react'
import { Navbar, SubHeading } from '../../components'
import { images } from '../../constants'
import Title from '../../components/Title/Title'

import './about.scss'
import Headtitle from '../../components/HeadTitle/Headtitle'
import { Chef, Customers, Footer, Gallery, Intro, Laurels } from '../../container'

function AboutPage() {
    return (
        <div className="about-page bg__wrapper">
            <Navbar />
            <div className="about-page-header">
                <Title title={"What We Offer"} previous={"Home"} next={"Our Services"} />
            </div>
            <Headtitle heading={"Serving Quality"} title={"We at Gericth are serving our customers for over a decade."} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et."} />
            <div className="about-page-buttons">
                <button className="readmore custom__button">Read More</button>
                <button className="readmore custom__button">Contact Us</button>
            </div>
            <div className="about-page-logo">
                <img src={images.logo} alt="about-logo" />
            </div>

            <Headtitle heading={"Our History"} title={"serving customers for over a decade"} />

            <div className="about-info">
                <div className="about-info-container">
                    <div className="about-info-container__desc">
                        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam fugiat unde quidem impedit porro deleniti illo commodi eum, consequuntur necessitatibus, molestiae libero? Corrupti aliquid commodi consequuntur molestias nemo odit possimus.</p>
                    </div>
                    <div className="about-info-container__image">
                        <img src={images.tavern} alt="tavern" />
                    </div>
                </div>
                <div className="about-info-container">
                    <div className="about-info-container__image">
                        <img src={images.designTavern} alt="inside-tavern" />
                    </div>
                    <div className="about-info-container__heading">
                        <h1 className="headtext__cormorant">Over the years</h1>
                    </div>
                    <div className="about-info-container-box counter">
                        <div className="counter__item">
                            <SubHeading title={"30+"} />
                            <p className="p__opensans">Breakfast options</p>
                        </div>
                        <div className="line"></div>
                        <div className="counter__item">
                            <SubHeading title={"50+"} />
                            <p className="p__opensans">Dinner options</p>
                        </div>
                        <div className="line"></div>
                        <div className="counter__item">
                            <SubHeading title={"8"} />
                            <p className="p__opensans">New locations</p>
                        </div>
                    </div>
                </div>
            </div>

            <Headtitle heading={"About Us"} title={"Happy Hours With Us"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et."} />
            <div className="about-video">
                <Intro />
            </div>
            <div className="about-page-logo">
                <img src={images.logo} alt="about-logo" />
            </div>

            <Chef />
            <Customers />
            <Laurels />
            <Gallery />
            <Footer />
        </div>
    )
}

export default AboutPage