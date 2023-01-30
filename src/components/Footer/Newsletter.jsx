import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.scss';

const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter-heading">
      <SubHeading title={"Newsletter"} />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p>And never miss latest Updates!</p>
    </div>

    <div className="newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
