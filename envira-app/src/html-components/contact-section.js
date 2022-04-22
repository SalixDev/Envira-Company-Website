import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import Enter from "../SVGs/enter.svg";
import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect (() => {
    Aos.init({ duration: 400});
  }, []);

    return (
        <div id='intro' className="contact-container">
            <ContactForm/>
            <div className="contact-right lg:overflow-x-visible overflow-x-hidden">
                <ContactInfo/>
                <img src= {Enter} alt="contact us" className="md:p-4 pt-5 w-[100%] h-auto md:ml-8"
                 data-aos="fade-left" data-aos-delay="100" data-aos-once/>
            </div>
        </div>
        );
    };

export default ContactSection;
    