import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import mail from '../../assets/icons/mail-icon.svg';
import phone from '../../assets/icons/phone-icon.svg';

function Contact() {
  return (
     <section className='bg-red-900 max-w-screen-xl mx-auto p-4 md:px-8 mt-8' id='contact'>
    <h1 className='text-2xl mt-8 mb-4 text-slate-100'>Contact Us</h1>
    <div className='flex flex-col md:flex-row'>
      <div className='my-4 flex flex-col justify-around items-center md:pb-24 md:w-1/2'>
    
        <a target="_blank" rel="noopener noreferrer" a href="tel:+12502319693">
        <div className='flex items-center justify-center'>
        <img className='mx-2 h-8 my-4' src={phone} alt='phone icon' /><p className='text-slate-100'>Call me</p>
        </div></a>
        <a rel="noopener noreferrer" a href="mailto:kayle.robson@gmail.com">
        <div className='flex items-center justify-center'>
        <img className='mx-2 h-8' src={mail} alt='mail icon' /><p className='text-slate-100'>Email me</p>
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