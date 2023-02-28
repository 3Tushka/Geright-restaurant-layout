import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contactform.scss';

const ContactForm = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_un5vzvk', 'template_shz8rg6', form.current, 'fh-CadU2_cbi5dpwL')
            .then((result) => {
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            {/* <!-- name --> */}
            <div class="form-group">
                <input
                    type="name"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                    required
                />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
                <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                    required
                />
            </div>

            <div class="form-group">
                <textarea
                    name="message"
                    placeholder="Message"
                    class="form-control"
                    id="email_body"
                    rows="10"
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary custom__button">
                Submit
            </button>
        </form>
    );
}
export default ContactForm;
