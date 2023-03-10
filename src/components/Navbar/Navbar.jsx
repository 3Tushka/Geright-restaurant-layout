import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { images } from '../../constants';

import {
  Link
} from 'react-router-dom';

import './Navbar.scss';

const Menu = () => (
  <>
    <li><Link to="/src/pages/Homepage">Home</Link></li>
    <li><Link to="/src/pages/About">About</Link></li>
    <li><Link to="/src/pages/Team">Team</Link></li>
    <li><Link to="/src/pages/FAQ">FAQ</Link></li>
    <li><Link to="/src/pages/Contact">Contact</Link></li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="navbar__links">
        <Menu />
      </ul>
      <div className="navbar__buttons">
        <button className="btn">
          <p>Log in/Registration</p>
        </button>
        <div className="line"></div>
        <button className="btn">
          <p>Book Table</p>
        </button>
      </div>
      <div className="navbar__smallscreen">
        <GiHamburgerMenu color='var(--color-white)' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (

          <div className="navbar__smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar__links-smallscreen-links">
              <Menu />
            </ul>
          </div>
        )}
      </div>
    </div>
  )
};
export default Navbar; 
