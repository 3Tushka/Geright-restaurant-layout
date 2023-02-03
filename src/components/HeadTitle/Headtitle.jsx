import React from 'react'
import SubHeading from '../SubHeading/SubHeading'
import './headtitle.scss'

const Headtitle = ({ heading, title, description }) => (
    <div className="headtitle">
        <div className="headtitle__heading">
            <SubHeading title={heading} />
        </div>
        <div className="headtitle__title">
            <h1 className="headtext__cormorant">{title}</h1>
        </div>
        <div className="headtitle__description">
            <p className="p__opensans">{description}</p>
        </div>
    </div>
);

export default Headtitle