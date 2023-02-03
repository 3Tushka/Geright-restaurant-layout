import React from 'react'
import './title.scss'

const Title = ({ title, previous, next }) => (
    <div className="title bg__wrapper flex__center">
        <div className="title-header-title">
            <h1 className="headtext__cormorant">{title}</h1>
            <div className="breadcrumbs flex__center">
                <div className="breadcrumbs-first">
                    <p className='p__opensans'>{previous}</p>
                </div>
                <div className="breadcrumbs-arrow"></div>
                <div className="breadcrumbs-second">
                    <p className='p__opensans'>{next}</p>
                </div>
            </div>
        </div>
    </div>
);

export default Title