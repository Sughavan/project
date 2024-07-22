import React from 'react'
import './Landing.css';
import img1 from '../Images/1.jpeg';
import img2 from '../Images/2.png';
import img3 from '../Images/3.png';
import img4 from '../Images/4.jpeg';
import img5 from '../Images/5.jpeg';
import logo1 from '../Images/logo1.png'
import logo2 from '../Images/logo2.png'
import logo3 from '../Images/logo3.png'
import logo4 from '../Images/logo4.png'
import logo5 from '../Images/logo5.png'
import logo6 from '../Images/logo6.png'
import logo7 from '../Images/logo7.png'
import logo8 from '../Images/logo8.png'
import logo9 from '../Images/logo9.png'

import SlideShow from './Slideshow';

const Landing = () => {
  return (
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      
               <div class="sli">
      <fieldset class="slide">
        <div class="sliding">
        <SlideShow/>
        </div>
        </fieldset>
        </div>

        <br></br>
        
        <div class="shop">
          <h1 class="headhome">Shop by brands</h1>

        </div>
        <div class="slidebrand">
          <img src={logo1} alt='logo' class="bran"></img>
          <img src={logo2} alt='logo' class="bran"></img>
          <img src={logo3} alt='logo' class="bran"></img>
          <img src={logo4} alt='logo' class="bran"></img>
          <img src={logo5} alt='logo' class="bran"></img>
          <img src={logo6} alt='logo' class="bran"></img>
          <img src={logo7} alt='logo' class="bran"></img>
          <img src={logo8} alt='logo' class="bran"></img>
          <img src={logo9} alt='logo' class="bran"></img>
         
        </div>
        <br></br>
        <div class="shop">
          <h1 class="headhome">Best Selling Products</h1>
        </div>
        <br></br>
        <div class="fie">
            <fieldset class="field">
            <img class="product"  alt='product-1'></img>
            </fieldset>

            <fieldset class="field">
            <img class="product"  alt='product-1'></img>
            </fieldset>
            
            <fieldset class="field">
            <img class="product"  alt='product-1'></img>
            </fieldset>
            <fieldset class="field">
            <img class="product"  alt='product-1'></img>
            </fieldset>
            <fieldset class="field">
            <img class="product"  alt='product-1'></img>
            </fieldset>
            <fieldset class="field">
            <img class="product"  alt='product-1'></img>
            </fieldset>
            </div>
    </div>
  )
}

export default Landing