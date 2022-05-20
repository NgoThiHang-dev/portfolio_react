import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./../Contact/contact.css"

export const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xbm6a6o', 'template_ui8sqyr', form.current, '_66uFtxRRsc-XwDzy')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact" id="">
            <div className="contact-title">
                <span>Get in touch</span>

                <span>Contact me</span>
                <div className="blur contact-blur1"></div>
            </div>
            <div className="contact-form">
                <form className="c-form" ref={form} onSubmit={sendEmail}>
                    <input name="user_name" placeholder="Name" type="text" className="c-form-input"></input>
                    <input name="user_email" placeholder="Email" type="email" className="c-form-input"></input>
                    <textarea name="message" placeholder="Message" className="c-form-texarea" rows="10"></textarea>
                    <div className="contact-button button-po">
                        <button type="submit">Send</button>
                    </div>
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div className="blur contact-blur2"></div>
                </form>
            </div>
        </div>
    )
}
