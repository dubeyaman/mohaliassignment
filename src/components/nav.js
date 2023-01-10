import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Nav=()=>{
   
    return(
        <div>
         
         <ul className='nav-ul' >
                <li><Link to="/">Home Page</Link> </li>
    
                <li><Link to="/signup">signup</Link> </li>
               
            </ul>
        </div>
    )
}
export default Nav