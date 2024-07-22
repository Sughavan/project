import React from 'react'
import './Head.css';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Head = () => {
  return (
    <div>

       <div class="a"> 
        <header class="head">
            <ul class="u_l_nav">
            <li class="li"><h1 class="logo"><a class="lo">eKart</a></h1></li>

                <li class="li"><a class="active">HOME</a></li>

                <li class="li"><a class="active">CATEGORY</a>
                
                </li>

                <li class="li"><a class="active">CONTACT</a></li>

                <li class="li"style={{}}><a class="active">ABOUT</a></li>

                <li class="li"style={{float:'right'}}><a class="active"><div class="account"> <AccountCircle/></div></a></li>
                
            </ul>
            
        
        </header>
       
        </div>
    </div>
  )
}

export default Head