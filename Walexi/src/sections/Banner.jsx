import React, { useState } from 'react'
import '../App.css'
import Contact_bar from '../components/Contact_bar'
import logo from '../assets/walexi.png'
import wale from '../assets/walepic.png'
import bgImg from '../assets/bgImg.webp'
import medal from '../assets/medal.png'
import { TypeAnimation } from 'react-type-animation';



function Banner() {

  return (
    <div className='w-full min-h-screen relative' >
      <div className='fixed top-48 left-0 z-50 flex justify-center'>
        <Contact_bar screen={'big'}/>
      </div>

      <div className='h-screen w-full ' style={{backgroundImage:`url(${bgImg})`,backgroundSize:'cover',
     backgroundRepeat:'no-repeat' }}>
        <div className='w-full h-full' style={{backgroundColor:'rgba(27,26,36,0.9)'}}>
          <div className='pt-4 flex px-10 justify-between items-center' >
            <img src={logo} alt="logo" className='w-32 h-8'/>
            <div className='flex gap-8 font-semibold '>
              <a href="#about" className='pointer text-white hover:scale-110 hover:text-white duration-300'>
                About
              </a>
              <a href="#portfolio" className='pointer text-white hover:scale-110 hover:text-white duration-300 '>
                Portfolio
              </a>
              <a href="#experience" className='pointer text-white hover:scale-110 hover:text-white duration-300'>
                Experience
              </a>
              <a href="#contact" className='pointer text-white hover:scale-110 hover:text-white duration-500'>
                Contact 
              </a>
            </div>
          </div>

          <div className=' h-5/6 flex flex-col pt-16 items-center text-white relative'>
            <img src={medal} alt="logo" className='w-40 absolute right-2 top-12'/>

            <div className='w-2/4 flex-col h-full justify-center flex '>
              <h1 className='font-bold text-orange-300 text-center'>MUSTAPHA</h1>
              <h1 className='font-bold text-center'>ADEBOWALE</h1>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'I am a full stack Web and Mobile app developer.',
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  'I build large and small scale mobile applications.',
                  2000,
                  'I build large and small scale web applications.',
                  2000,
                  'I also build defi projects and crypto tokens.',
                  2000,
                  'I am also an Ai developer.',
                  2000,
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize:'1.4em',marginTop:'1em', display:'inline-block', textAlign:'center' }}
                repeat={Infinity}
              />
            </div>

            <div className='flex justify-end '>
              <img src={wale} alt="logo" className='mt-8 w-80' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
