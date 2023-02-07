import React from 'react'
import { Navbar, Newsletter, Title } from '../../components'
import { Feedback, Footer, Map } from '../../container'
import './contact.scss'

function Contact() {
    return (
        <div className="contact">
            <Navbar />

            <div className="contact-header">
                <Title title={"Contact Us"} previous={"Home"} next={"Contact us"} />
            </div>

            <Map />
            <Feedback />
            <Footer />
        </div>
    )
}

export default Contact