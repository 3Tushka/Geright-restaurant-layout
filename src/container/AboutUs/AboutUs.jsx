import React from 'react';
import knife from '../../assets/knife.png';
import G from '../../assets/G.png';
import { SubHeading } from '../../components';

import './AboutUs.scss';

const AboutUs = () => (
  <div className="about">
    <div className="about__g-image flex__center">
      <img src={G} alt="g-letter" />
    </div>
    <div className="about__content flex__center">
      <div className="about__info">
        <div className="about__info-title">
          <h1 className="headtext__cormorant">About Us</h1>
          <SubHeading />
        </div>
        <div className="about__info-desc">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus provident soluta inventore debitis fugit saepe suscipit, a impedit exercitationem vitae, earum ut quia alias ab, veniam cumque. Ut, eveniet nemo?</p>
        </div>
        <div className="about__info-btn custom__button">
          <p>Know More</p>
        </div>
      </div>
      <div className="about__knife-image">
        <img src={knife} alt="knife" />
      </div>
      <div className="about__history">
        <div className="about__history-title">
          <h1 className="headtext__cormorant">Our History</h1>
          <SubHeading />
        </div>
        <div className="about__history-desc">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus provident soluta inventore debitis fugit saepe suscipit, a impedit exercitationem vitae, earum ut quia alias ab, veniam cumque. Ut, eveniet nemo?</p>
        </div>
        <div className="about__history-btn custom__button">
          <p>Know More</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
