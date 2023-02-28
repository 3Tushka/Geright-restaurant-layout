import React from 'react'
import { images } from '../../constants'
import ContactForm from './ContactForm/ContactForm'
import './feedback.scss'

function Feedback() {
    return (
        <div className="feedback bg__wrapper section__padding">
            <ContactForm />
            <div className="feedback-image image__cover">
                <img src={images.laurels} alt="laurels" />
            </div>
        </div>
    )
}

export default Feedback