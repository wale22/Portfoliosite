import React, { useState } from 'react'
import fb from '../assets/fb.png'
import cv from '../assets/cv.png'
import twitter from '../assets/twitter.png'
import whatsapp from '../assets/whatsapp.png'
import linkden from '../assets/linkedin.png'
import gh from '../assets/github.png'





export default function Contact_bar({screen}) {
    if(screen === 'big'){
        return (
            <div className='flex flex-col gap-3 px-4 py-2 bg-gray-300 rounded-r-md' style={{backgroundColor:'#33333F'}}>
                <a href="">
                    <img src={linkden} alt="linkedin" className='w-6' />
                </a>

                <a href="">
                    <img src={whatsapp} alt="whatsapp" className='w-6'/>
                </a>

                <a href="">
                    <img src={fb} alt="fb" className='w-6'/>
                </a>

                <a href="">
                    <img src={twitter} alt="twitter" className='w-6'/>
                </a>

                <a href="">
                    <img src={gh} alt="github" className='w-6'/>
                </a>

                <a href="">
                    <img src={cv} alt="cv" className='w-6'/>
                </a>

            </div>
        )

    }else{

        return (
            <div>
              
            </div>
        )
    }

}
