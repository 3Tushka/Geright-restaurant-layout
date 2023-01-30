import React from 'react';
import findus from '../../assets/findus.webp';
import { SubHeading } from '../../components';
import './findus.scss';

const FindUs = () => (
  <div className="findUs flex__center">
    <div className="findUs-contact">
      <div className="findUs-contact-title">
        <SubHeading title={"Contact"} />
        <h1 className='headtext__cormorant'>Find Us</h1>
      </div>
      <div className="findUs-contact-address">
        <p className='p__cormorant'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
      </div>
      <div className="findUs-contact-openingHours">
        <h3 className="findUs-contact-openingHours__title">
          Opening Hours
        </h3>
        <div className="findUs-contact-openingHours__time">
          <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>
      </div>
      <button className="findUs-button custom__button">Visit Us</button>
    </div>
    <div className="findUs-image">
      <img src={findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
