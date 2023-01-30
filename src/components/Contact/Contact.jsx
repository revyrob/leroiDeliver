import React from 'react'
import ContactForm from '../ContactForm/ContactForm'

function Contact() {
  return (
    <section id='contact'>
        <h1 className='text-2xl font-black mt-8 mb-4 '>Contact Us</h1>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
<p>Hello 👋</p>
        </div>
        <div className='md:w-1/2'>
        <ContactForm/>
        </div>
        </div>
    </section>
  )
}

export default Contact