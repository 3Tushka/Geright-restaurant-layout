import React from 'react'
import logo from '../../assets/logo.png';
import './Bar.scss'

function Bar() {
    return (
        <div className="bar bg__wrapper">
            <div className="bar__wrapper">
                <div className="bar__logo">
                    <img src={logo} alt="logo-bar" />
                </div>
                <ul className="bar__menu">
                    <li className="bar__menu-bar">
                        <p> <a href="">Bar Menu</a>
                        </p>
                    </li>
                    <li className="bar__menu-food">
                        <p> <a href="">Food Menu</a></p>
                    </li>
                    <li className="bar__menu-dessert">
                        <p><a href="">Dessert Menu</a></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Bar;