import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import mail from '../../assets/icons/mail-icon.svg';


function Contact() {
  return (
    <section className='max-w-screen-xl' id='contact'>
        <h1 className='text-2xl font-black mt-8 mb-4 '>Contact Us</h1>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>

<a target="_blank" rel="noopener noreferrer" a href="mailto:kayle.robson@gmail.com">
        <div className='flex items-center justify-center'>
        <img className='mx-2' src={mail} alt='mail icon' /><p className=''>Email me</p>
        </div></a>

        </div>
        <div className='md:w-1/2'>
        <ContactForm/>
        </div>
        </div>
    </section>
  )
}

export default Contact