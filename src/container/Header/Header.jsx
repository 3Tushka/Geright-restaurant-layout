import React from 'react';
import { SubHeading } from '../../components';
import welcome from '../../assets/welcome.webp';

import './Header.scss';

const Header = () => (
  <div className="header">
    <div className="header__wrapper">
      <SubHeading title="Chase The New Flavour" />
      <h1 className="headtext__cormorant">
        The Key To Fine Dining
      </h1>
      <h3 className="header__sub-text">
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
      </h3>
      <button className="header__menu-btn custom__button">Explore Menu</button>
    </div>
    <div className="header__image">
      <img src={welcome} alt="welcome-photo" />
    </div>
  </div >
);

export default Header;
