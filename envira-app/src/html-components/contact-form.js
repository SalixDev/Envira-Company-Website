
import React, { useState } from 'react';

export default function ContactForm () {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
    <div className="w-[50%]] h-auto mx-10 mt-4 md:ml-10 md:mt-0">
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
                <label>Company (optional)
                    <input type="text" id="company" name="company" value={company} onChange= {(e) => setCompany(e.target.value)}></input>
                </label>
            </div>
            <div className='form-components'>
                <label>Message
                    <textarea type="text" id="message" name="message" value={message} onChange= {(e) => setMessage(e.target.value)}></textarea>
                </label>
            </div>
        </div>
        <button type="submit" className="float-right">SUBMIT</button>
    </div>
  );
}