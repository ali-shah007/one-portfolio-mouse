import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
    
        const name = form.current['name'].value.trim();
        const email = form.current['email'].value.trim();
        

        // Form validation
        if (!name) {
            setError('Name is required');
            return;
        }
        if (!email) {
            setError('Email is required');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Invalid email format');
            return;
        }

        setPopupMessage('Sending message...');
        setShowPopup(true);
        setError('');

        emailjs
          .sendForm('service_1nktqrk', 'template_mld9jcf', form.current, 'FdSRX__UgVs90SMPn')
          .then(
            () => {
              setPopupMessage('Message sent ✅');
              setTimeout(() => {
                setShowPopup(false);
                setPopupMessage(''); // Reset popup message
              }, 5000);
            },
            (error) => {
              console.log('FAILED...', error.text);
              setPopupMessage('Failed to send message');
              setTimeout(() => {
                setShowPopup(false);
                setPopupMessage(''); // Reset popup message
              }, 5000);
            },
          );
    };
    
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="email" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <input type='submit' value="Let's talk" className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300' />
                        {error && <p className="text-red-500">{error}</p>}
                    </form>
                </div>
                {showPopup && (
                    <div className='fixed top-24 right-14 bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg'>
                        {popupMessage}
                        {popupMessage === 'Sending message...' && (
                            <div className='h-1 bg-green-700 mt-2 w-full relative'>
                                <div className='absolute top-0 left-0 h-1 bg-green-300 animate-progress'></div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Contact;
