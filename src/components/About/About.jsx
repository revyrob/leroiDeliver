import React from 'react'
import pic from '../../assets/images/kayle2.png';

function About() {
  return (
    <section id="about" className='max-w-screen-xl mx-auto md:w-1/2'>
      
        <h1 className='text-2xl font-black mt-8 mb-4 '>About</h1>
        <div className='sm:flex flex-col md:flex-row justify-between'>
        <img src={pic} alt="kayle robson" className='rounded-full flex items-center justify-center max-w-[300px]'/>
        <div className='w-1/2'>
        <p>Kayle Robson has been working in the service industry for more than a decade.  She is bilingual and has worked across 
          Western Canada and Europe.  With a passion for food and good service Kayle strives to meet clients needs.</p>    
          </div>
          </div>
    </section>
  )
}

export default About