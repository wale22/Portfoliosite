import React, { useState } from 'react'
import './App.css'
import Banner from './sections/Banner'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import ContactMe from './sections/ContactMe'
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/');

function App() {

  return (
    <div className='w-full min-h-screen relative text-white'  style={{backgroundColor:'rgba(27,26,36)'}} >
      <Banner/>
      <About/>
      <Portfolio/>
      <ContactMe/>
    </div>
  )
}

export default App
