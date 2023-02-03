import React from 'react'
import './notfound.scss'
import { images } from '../../constants';
import { Navbar, SubHeading } from '../../components'

const NotFound = () => {
    return (
        <div className="error">
            <Navbar />
            <div className="error-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <div className="error-container flex__center">
                <div className="error-container__title">
                    <h1 className='headtext__cormorant'>404</h1>
                </div>
                <SubHeading />
                <div className="error-container__desc">
                    <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                </div>
                <div className="error-container__button">
                    <button className="error-btn custom__button">Back To Home</button>
                </div>
            </div>

            <div className="error-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <div className="error-rights flex__center">
                <p>2023 Gerícht. All Rights reserved.</p>
            </div>
        </div>
    )
}

export default NotFound