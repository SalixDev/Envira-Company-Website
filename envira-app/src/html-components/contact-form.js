import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContactForm () {
    useEffect (() => {
        Aos.init({ duration: 300});
      }, []);
    return (
    <div className="flex flex-col justify-center items-center md:items-end w-[50%]] h-auto mx-10 my-6 md:ml-0 md:mt-0"
    data-aos="fade-right" data-aos-once>
        <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
            <div className='contact-left-container'>
                <div className="text-enviraGreen text-4xl font-sfproBold mb-1 mt-2 text-center">
                    Order Our Services
                </div>
                <div className='text-lg text-white mb-2 text-center'>
                    As a fully accredited waste haulier we prefer to collect the materials
                     from our customer's site ourselves.
                </div>
                <div className='text-xl text-white mb-10 font-sfproMed bg-enviraOrange rounded-full p-1 text-center'>
                     Have one of our customer representatives reach out and go over logistics today. 
                </div>

                {/* netlify form */}
                <input type="hidden" name="form-name" value="contact"/>

                <div className='flex gap-8'>
                    <div className='form-components'>
                        <label>
                            Name*
                            <input type="text" name="name" placeholder='Enter your name (required)'></input>
                        </label>
                    </div>
                    <div className='form-components'>
                        <label>
                            Email*
                            <input type="text" name="email" placeholder='Enter your email (required)'></input>
                        </label>
                    </div>
                </div>
                <div className='form-components'>
                    <label>
                        Subject
                        <input type="text" name="subject" placeholder='Enter subject (optional)' ></input>
                    </label>
                </div>
                <div className='form-components'>
                    <label>
                        Message
                        <textarea name="message" placeholder='Enter your message (optional)'></textarea>
                    </label>
                </div>

            </div>
            <button type="submit" data-aos="fade-up" data-aos-delay="175" data-aos-once
            className=''>SEND</button>
        </form>
    </div>
  );
}