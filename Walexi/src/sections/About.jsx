import React from 'react'
import wale from '../assets/walepic.png'
import mobileDev from '../assets/mobileDev.png'
import webdev from '../assets/webdev.png'
import smartContract from '../assets/smartContract.png'
import bot from '../assets/bot.png'
import aidev from '../assets/aidev.png'
import firebase from '../assets/firebase.png'
import redux from '../assets/redux.png'
import js from '../assets/js.png'
import css from '../assets/css.png'
import fastapi from '../assets/fastapi.svg'
import c from '../assets/c.png'
import html from '../assets/html.png'
import Zustand from '../assets/zutandlogo.png'
import react from '../assets/react.png'
import python from '../assets/python.png'
import sagemker from '../assets/sagemaker.svg'
import postgress from '../assets/postgress.png'
import tailwind from '../assets/tailwind.png'
import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel';
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item';







export default function About() {
    const services=[
        {
            name:"Full Stack Web Development",
            icon: webdev,
            content:"I specialize in building web applications using Reactjs, Tailwind CSS, Zustand, and FastAPI. From dynamic interfaces to strong backends, I ensure tailored solutions and seamless cloud or server deployment. Let's bring your vision to life with efficient and innovative web development."
        },

        {
            name:"Smart Contract Development",
            icon: smartContract,
            content:"I specialize in writing smart contracts for decentralized applications (DApps) and crypto tokens using Solidity. With a focus on efficiency and security, I bring your blockchain projects to life. Let's turn your ideas into functional and secure decentralized solutions."
        },

        {
            name:"AI Application Development",
            icon: aidev,
            content:"I specialize in developing AI-based applications that cater to your unique needs. From enhancing efficiency to delivering intelligent solutions, I bring impactful AI solutions to your business. Let's collaborate to create applications that meet and exceed your expectations."
        },
        
        {
            name:"Full Stack Mobile Development",
            icon: mobileDev,
            content:"I specialize in impactful mobile app development using React Native, Zustand, and Firebase. Whether it's a compact app or a comprehensive solution, I ensure a seamless user experience. FastAPI ensures a robust backend, and I deploy to various platforms with efficiency. Let's bring your mobile app vision to life with innovation."
        },

        {
            name:"Bots Creation",
            icon: bot,
            content:"I specialize in crafting Telegram and WhatsApp bots that streamline communication and automate tasks. Whether it's enhancing user engagement or providing efficient solutions, I create bots that align with your specific needs. Let's transform your messaging platforms into powerful communication tools."
        },


    ]

    const skill=[
        {
            name:'Html',
            image:html
        }, 
        {
            name:'Css',
            image:css
        },
        {
            name:'Python',
            image:python
        },
        {
            name:'ReactJs',
            image:react
        },
        {
            name:'ReactNative',
            image:react
        }, 
       
        {
            name:'C++',
            image:c
        },
        {
            name:'FastApi',
            image:fastapi
        },
        {
            name:'Javascript',
            image:js
        },
        {
            name:'Zustand',
            image:Zustand
        },
        {
            name:'Redux',
            image:redux
        },
        {
            name:'Firebase',
            image:firebase
        },
        {
            name:'TailwindCss',
            image:tailwind
        },
        {
            name:'AWS Sagemaker',
            image:sagemker
        },
        {
            name:'Postgressql',
            image:postgress
        },
    ]


  return (
    <div className='min-h-screen w-full text-white flex flex-col pt-10 sm:px-5 px-2 md:px-10'>
        <div className='border-b-2 border-gray-800  py-16'>
            <h1 className='text-center w-full font-semibold text-orange-600'>About Me</h1>
            <div className='w-full flex-1 flex flex-row justify-around items-center pt-20'>
                <img src={wale} alt="logo" className='w-2/5 h-5/6' />

                <div className='w-2/4 h-full pt-10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  pr-10'>
                    <p className='text-3xl font-semibold text-white-300 '>Who is Walexi?</p>
                    <div className='mt-5 text-gray-400'>
                    Hey, I'm Walexi – a teenage developer with a passion for turning ideas into reality through code. With over two and a half years of experience, I thrive in the dynamic world of technology.
                    I specialize in crafting full-stack web and mobile applications, creating intelligent bots, and building decentralized applications using Solidity for smart contracts. I'm your go-to person for Web3 development, adapting to new trends with ease.
                    My toolkit includes ReactJS, Python, React Native, JavaScript, MySQL, PostgreSQL, CSS, HTML, Tailwind CSS, and I add a touch of motion with Framer Motion. The depth of my knowledge extends to C++, showcasing my versatility and commitment to staying on the cutting edge of technology.
                    But it's not just about the tech stack; it's about collaboration. I work seamlessly with teams, bringing a positive spirit and an ability to navigate challenges efficiently. Whether it's diving into the world of decentralized finance or creating an immersive user experience, I'm up for the challenge.
                    Join me on this coding adventure as we explore the limitless possibilities of technology. Together, let's build innovative solutions and adapt to the ever-evolving landscape of development.
                    </div>
                </div>
            
            </div>
        </div>

        <div className=' mt-20 md:mt-20 px-5 md:px-10 sm:text-start text-center'>
            <span className='md:text-5xl text-5xl font-semibold '>My Services</span>
            <p className='mt-2 md:text-base text-gray-400'>Services I Offer To My Clients.</p> 

            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20 md:gap-y-10 mt-28 items-center'>
                {services?.map((service)=>(
                    <div className='px-2 sm:px-5 flex flex-col py-5 rounded-lg' style={{backgroundColor:'#242232',boxShadow:'0 4px 15px rgba(0, 0, 0, 0.3)'}} >
                        <div className=' flex justify-center'>
                            <div className='px-2 py-2 glass rounded '>
                                <img src={service.icon} alt="" className='h-20' />
                            </div>
                        </div>
                     
                        <span className='mt-6 w-full text-white text-lg font-semibold text-center'>{service.name}</span>

                        <p className="mt-4 text-md text-center text-gray-400"> 
                            {service.content}
                        </p>
                    </div>
                ))

                }
                <div>
                </div>
            </div>
        </div>


        <div className='md:mt-40 mt-20 px-5 text-center'>
            <span className='text-5xl font-semibold w-full text-center'>My Skills</span>
            <p className='mt-2 text-gray-400'>Programming Languages and Frameworks I use.</p> 


            <div className='grid md:grid-cols-4 grid-cols-2 lg:grid-cols-6 gap-x-5 gap-y-10 mt-20 items-center'>
                {skill?.map((service)=>(
                    <div className='px-5 py-5 glassSkill rounded  flex flex-col items-center ' style={{boxShadow:'0 4px 15px rgba(0, 0, 0, 0.3)'}} >
                        <img src={service.image} alt="" className='h-16 w-16' />
                        <span className='mt-6 w-full text-white text-lg font-semibold text-center'>{service.name}</span>

                    </div>
                     
                ))

                }
             
            </div>
        </div>
      
    </div>

  )
}
