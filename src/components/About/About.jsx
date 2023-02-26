import React from 'react'
import pic from '../../assets/images/kayle2.png';

function About() {
  return (
    <section id="about" className='max-w-screen-xl mx-auto p-8 '>
    
    <div className='sm:flex flex-col md:flex-row justify-around'>
    <img src={pic} alt="kayle robson" className='rounded-full flex items-center justify-center m-auto'/>
    <div className='sm:w-full md:w-1/2'>
    <h1 className='text-2xl font-black pt-8 mb-4 text-center md:text-3xl'>About</h1>
    <p className='text-left px-8 pb-8 text-2xl leading-relaxed'>Kayle Robson has been working in the service industry for more than a decade.  She is bilingual and has worked across 
    Western Canada and Europe.  With a passion for food and good service Kayle strives to meet clients needs.</p>    
    </div>
    </div>
    </section>
    )
  }
  
  export default About