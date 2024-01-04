import React from 'react'
import shibaInu from '../assets/shibaInu.png'
import groge from '../assets/groge.png'
import erc20 from '../assets/erc20.jpg'
import therai from '../assets/Therai.png'
import memeHouse from '../assets/MemeHouse.png'
import Anomes from '../assets/anomes.png'
import portfolio from '../assets/portfolio.png'


export default function Portfolio() {
    const Projects=[
        {
            name:'Portfolio website',
            desc:'My portfolio website',
            image:portfolio,
            link:'https://walexi.netlify.app',
            status:'finished'
        }, 

        {
            name:'ShibaInu',
            desc:'A meme token website',
            image:shibaInu,
            link:'https://shibainu.netlify.app',
            status:'finished'
        }, 

        {
            name:'Anomes',
            desc:'Full stack anononymous messaging app',
            image:Anomes,
            link:'https://anomes.netlify.app',
            status:'finished'
        },
        {
            name:'MemeHouse',
            desc:'Full stack meme app',
            status:'ongoing',
            link:'',
            image:memeHouse,
        },
        {
            name:'Groge',
            desc:'A meme token website',
            image:groge,
            link:'https://groge.netlify.app',
            status:'finished'
        },
        {
            name:'WaleCoin',
            desc:'An Erc20 token',
            image:erc20,
            link:'',
            status:'finished'
        },
        {
            name:'Therai',
            desc:'An AI based application (private)',
            image:therai,
            link:'',
            status:'ongoing'
        },

      
    ]

  return (
    <div className='pt-40 px-10 sm:20 flex flex-col items-center'>
        <span className='w-full text-center text-5xl font-semibold'>Portfolio</span>

        <div className='grid sm:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-10 pt-20 items-center'>
            {Projects?.map((project)=>(
                <a href={project.link}>
                    <div className='rounded-lg flex flex-col pb-2 relative' style={{backgroundColor:'#242232',boxShadow:'0 4px 15px rgba(0, 0, 0, 0.3)'}} >
                        {project.status == "ongoing"?
                            <div className="absolute top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center" style={{backgroundColor:'rgba(0,0,0,0.95)'}}>
                                <span className='text-white text-center '>
                                    {project.desc}
                                </span>
                            </div>
                            :
                            <div className="absolute top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center" style={{backgroundColor:'rgba(0,0,0,0.6)'}}>
                                <span className='text-white text-center '>
                                    {project.desc}
                                </span>
                            </div>
                            }
                    
                    
                        <img src={project.image} alt="" className='rounded-lg' />
                    
                        
                        <span className='mt-2 w-full text-white text-lg font-semibold text-center'>{project.name}</span>
                    </div>
                </a>
            
            ))

            }
        </div>
    </div>
  )
}
