import React, { useRef, useState } from "react";
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";
import { useContext } from "react";

// import { useRef } from "react";
const  Contact = () => {
 const form =useRef();

 const [done, setDone] =useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nagguk5', 'template_weq5vc7', form.current, 'nFJWvqipmwWHn0qlr')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


    return(
        <div className="contact-form" id="contact">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                    <span>Contact me</span>
                    <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                    <span className="Font">Phone: +93748588456</span>
                    <br />
                    <span className="Font">Email: azadehahmadi223@gmail.com</span>
                    <div
                    className="blur s-blur1"
                    style={{background: "#ABF1FF94"}}>
                    </div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                   
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type='phone' name='phone' className="user" placeholder="your Number" />
                   <input type="email" name="user_email" className="user" placeholder="Email"/>
                   <textarea name="message" className="user" placeholder="Message" />
                   <input type="submit" value="Send"  className="button" /> 
                   <span>{done &&  "Thanks for contactin me!"}</span>
                   <div
                   className="blur c-blur1"
                   style={{background: "var(--purple"}}>
                   </div>
                </form>
            </div>
        </div>
    )
}
export default Contact;