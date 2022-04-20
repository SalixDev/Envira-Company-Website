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
        <div>
            <div className="text-enviraGreen text-4xl font-sfproBold mb-6">Contact Us</div>
            <div className='flex gap-8'>
                <div className='form-components'>
                    <label>Name
                        <input type="text" id="name" name="" value={name} onChange= {(e) => setName(e.target.value)}></input>
                    </label>
                </div>
                <div className='form-components'>
                    <label>Email
                        <input type="text" id="email" name="email" value={email} onChange= {(e) => setEmail(e.target.value)}></input>
                    </label>
                </div>
            </div>
            <div className='form-components'>
                <label>Subject
                    <input type="text" id="subject" name="subject" value={subject} onChange= {(e) => setSubject(e.target.value)}></input>
                </label>
            </div>
            <div className='form-components'>
                <label>Message
                    <textarea type="text" id="message" name="message" value={message} onChange= {(e) => setMessage(e.target.value)}></textarea>
                </label>
            </div>
        </div>
        <button type="submit" data-aos="fade-up" data-aos-delay="200" data-aos-once>SEND</button>
    </div>
  );
}