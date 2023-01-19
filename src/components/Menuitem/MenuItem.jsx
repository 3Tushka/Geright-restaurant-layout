import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, price, tags }) => (
  <div className="specials-menuitem">
    <div className="specials-menuitem-head">
      <div className="specials-menuitem-head__name">
        <p style={{ color: "#DCCA87" }}>{title}</p>
      </div>

      <div className="specials-menuitem-head__line" />

      <div className="specials-menuitem-head__price">
        <p>{price}</p>
      </div>
    </div>
    <div className="specials-menuitem-sub">
      <p style={{ color: "#aaa" }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
