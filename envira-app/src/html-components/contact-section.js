import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import Enter from "../SVGs/enter.svg";
import React, {useEffect, Route, Routes, Router} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect (() => {
    Aos.init({ duration: 400});
  }, []);

    return (
        <div id='contact-us' className="contact-container">
            <ContactForm/>
            <div className="contact-right-container  overflow-x-hidden">
                <ContactInfo/>
                <img src= {Enter} alt="contact us" className="md:p-4 pt-5 lg:w-[100%] w-[60%] h-auto md:ml-8"
                 data-aos="fade-left" data-aos-delay="100" data-aos-once/>
            </div>
        </div>
        );
    };

export default ContactSection;
    