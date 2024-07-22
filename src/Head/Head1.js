import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import './Head1.css';
const Head1 = () => {
  return (
    <div>
        <div class="nav_bar">
            <h1 class="navlogo">e'<span>Kart</span></h1>


            <ul>
                <li><a>Home</a></li>
                <li><a>Category <i class="fas fa-caret-down"></i></a>
                <div class="cat_drop">
                 <ul class="drop">
                    <li><a>Category</a></li>
                    <li><a>Category</a></li>
                    <li><a>Category</a></li>
                    <li><a>Category</a></li>
                 </ul>

                </div>
                
                </li>
                <li><a>Contact</a></li>
                <li><a>About</a></li>
                <li><a><AccountCircle/></a>
                <div class="prof_drop">
                    <ul class="drop">
                    <li><a>Profile</a></li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                    
                    </ul>
                </div>
                </li>
            </ul>
        </div>












    </div>
  )
}

export default Head1