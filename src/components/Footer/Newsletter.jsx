import React, { useRef } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import emailjs from '@emailjs/browser';

import './Newsletter.scss';

const Newsletter = () => {

  const form = useRef();

  const sendSubscribe = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_un5vzvk', 'template_lzt162b', form.current, 'fh-CadU2_cbi5dpwL')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="newsletter">
      <div className="newsletter-heading">
        <SubHeading title={"Newsletter"} />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p>And never miss latest Updates!</p>
      </div>

      <div className="newsletter-input">
        <form ref={form} onSubmit={sendSubscribe} className="flex__center">
          <input type="email" name="email" placeholder="Enter your email address" className='email-newsletter-input' />
          <input type="submit" value="Send" className='custom__button button' />
        </form>
      </div>
    </div>)
};

export default Newsletter;
