import React, { useState, useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContactForm () {
    useEffect (() => {
        Aos.init({ duration: 300});
      }, []);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
    <div className="flex flex-col justify-center items-center md:items-end w-[50%]] h-auto mx-10 mt-4 md:ml-0 md:mt-0"
    data-aos="fade-right" data-aos-once>
        <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
            <div>
                <div className="text-enviraGreen text-4xl font-sfproBold mb-6">
                    Contact Us
                </div>

                {/* netlify form */}
                <input type="hidden" name="form-name" value="contact"/>

                <div className='flex gap-8'>
                    <div className='form-components'>
                        <label>
                            Name
                            <input type="text" name="name"></input>
                        </label>
                    </div>
                    <div className='form-components'>
                        <label>
                            Email
                            <input type="text" name="email"></input>
                        </label>
                    </div>
                </div>
                <div className='form-components'>
                    <label>
                        Subject
                        <input type="text" name="subject" ></input>
                    </label>
                </div>
                <div className='form-components'>
                    <label>
                        Message
                        <textarea name="message"></textarea>
                    </label>
                </div>

            </div>
            <button type="submit" data-aos="fade-up" data-aos-delay="175" data-aos-once>SEND</button>
        </form>
    </div>
  );
}