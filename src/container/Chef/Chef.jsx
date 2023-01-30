import React from 'react';
import chef from '../../assets/chef.png'
import sign from '../../assets/sign.png'
import SubHeading from '../../components/SubHeading/SubHeading';

import './Chef.scss';

const Chef = () => (
  <div className="chef flex__center bg__wrapper" id='chef'>
    <div className="chef__image">
      <img src={chef} alt="chef-image" />
    </div>
    <div className="chef-info">
      <div className="chef-info-titleBox">
        <div className="chef-info-titleBox__sub-title">
          <SubHeading title={"Chef`s Word"} />
        </div>
        <div className="chef-info-titleBox__main-title">
          <h1>What we believe in</h1>
        </div>
      </div>
      <div className="chef-info-desc">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, ipsum facilis. Quis, eligendi. Ratione possimus minima, reprehenderit tempora suscipit quos quisquam nam eum aliquam quod fuga esse, numquam sapiente ex.</p>
      </div>
      <div className="chef-info-personal">
        <div className="chef-info-personal__name">
          <h3>Kevin Luo</h3>
        </div>
        <div className="chef-info-personal__position">
          <p>Chef & Founder</p>
        </div>
        <div className="chef-info-personal__signature-image">
          <img src={sign} alt="chef-sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
