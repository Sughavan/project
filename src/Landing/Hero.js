import React from 'react'
import './Hero.css'
import img from '../Images/ecom1.png'
const Hero = () => {
  return (
    <div>
      

        <div class="hero">
            <img class="heroimg" src={img}></img>
          <div class="herotext">
          <h1 class="herobold">something or may be qoute</h1>
          <p class="heropara">something or may be a qoute</p>
          <button class="herobut"> button</button>
          </div>
        </div>
        <div class="section2"></div>
        
      
    </div>
  )
}

export default Hero