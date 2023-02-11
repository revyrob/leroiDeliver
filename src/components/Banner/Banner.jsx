import React from 'react'
import rossland from '../../assets/images/rossland.jpg';
import { useRef } from "react";
import { useInView } from "framer-motion";

function Banner() {
  //useRef and useInView for the photo of myself moving into the screen when 'inview'
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className='flex flex-col md:flex-row justify-center items-center mx-auto max-w-screen-xl'>
    
    <div className='sm:order-1 w-full md:w-1/2 order-2 flex flex-col justify-between items-center font-black'  ref={ref}>
    <h1 className='text-4xl my-4' style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
    }} >Simple</h1>
    <h1 className='text-4xl my-4' style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>Fast</h1>
    <h1 className='text-4xl my-4' style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s"
    }}>Friendly</h1>
    </div>
    
    <div className='sm:order-2 w-full md:w-1/2 order-1'>
    <img src={rossland} alt='rossland' className='w-full'/>
    </div>
    </section>
    
    )
  }
  
  export default Banner