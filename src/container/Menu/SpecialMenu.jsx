import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import { data, images } from '../../constants';

import './SpecialMenu.scss';

const SpecialMenu = () => (
  <div className="specials" id='menu'>
    <div className="specials-title">
      <div className="specials-title__sub-text flex__center">
        <SubHeading title="Menu That Fits You Pallete" />
      </div>
      <div className="specials-title__main-text flex__center">
        <h1>Today`s Special</h1>
      </div>
    </div>
    <div className="specials-menu">
      <div className="specials-menu_wine">
        <p className="specials-menu__heading">Wine & Beer</p>
        <div className="specials-menu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className="specials-menu-menu_img">
        <img src={images.menu} alt="menu-img" />
      </div>
      <div className="specials-menu_coctails">
        <p className="specials-menu__heading">Cocktails</p>
        <div className="specials-menu_menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="specials-button flex__center">
      <button className="specials-menu_btn custom__button flex__center">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
