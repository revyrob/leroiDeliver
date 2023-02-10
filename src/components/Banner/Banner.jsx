import React from 'react'
import rossland from '../../assets/images/rossland.jpg';

function Banner() {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center mx-auto max-w-screen-xl'>
<div className='w-full md:w-1/2 flex flex-col justify-between items-center font-black'><h1 className='text-4xl my-4'>Simple</h1>
<h1 className='text-4xl my-4'>Fast</h1>
<h1 className='text-4xl my-4'>Friendly</h1></div>
<div className='w-full md:w-1/2'><img src={rossland} alt='rossland' className='w-full'></img>
</div>
    </section>
    
  )
}

export default Banner