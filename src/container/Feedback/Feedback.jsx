import React from 'react'
import './feedback.scss'
import { images } from '../../constants'
import { TextInputs } from '../../components'

export default function Feedback() {

    return (
        <div className="feedback bg__wrapper section__padding">
            <div className="feedback-form flex__center">
                <form action="/">
                    <TextInputs label={"Full Name"} />
                    <TextInputs label={"Email Address"} />
                    <TextInputs label={"Message"} />

                    <button className="custom__button">Subscribe</button>
                </form>
            </div>
            <div className="feedback-image image__cover">
                <img src={images.laurels} alt="laurels" />
            </div>
        </div>
    )
}