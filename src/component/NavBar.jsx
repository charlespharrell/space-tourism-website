import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    const [style, setstyle]= useState({})
    const[ isMenuClicked, setIsMenuClicked]=useState(false)

   const updateMenu =(e)=>{
    e.preventDefault()
    if(!isMenuClicked){

        setstyle({
                  display:'inline-block',
                  width: '50%',
              height: '35vh',
              backgroundColor: 'black',
              border: '1px solid none',
              filter: 'opacity(80%)',
              position: 'fixed',
              marginTop: '95px',
              marginLeft: '230px'
      })
    }
    else{
        setstyle({
            display:'none',
})
    }
   setIsMenuClicked(!isMenuClicked)
   }

  return (
    <div>
         <nav>
                <div >
                    <div className="logo-circle">
                     <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                    </div>
                </div>

                <hr className='hr' />

                <div className="hamburger">
               {isMenuClicked?
                <svg className='close-icon' onClick={updateMenu} xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>:
                <svg className='ham-icon' onClick={updateMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>}
  
                </div>
                <div className='show'>
                <div className='dropdown' style={style}>
                <ul className='nav-lists'>
                        <li><Link className='Links' to='/'>HOME</Link></li>
                        <li><Link className='Links'  to='/destination'>DESTINATION</Link></li>
                        <li><Link className='Links' to='/crew'>CREW</Link> </li>
                        <li><Link className='Links' to='/tech'>TECHNOLOGY</Link> </li>
                    </ul>
                </div> 
                </div>

                <div className="nav-box">
                    <ul className='nav-list'>
                        <li><Link className='Link' to='/'>HOME</Link></li>
                        <li><Link className='Link'  to='/destination'>DESTINATION</Link></li>
                        <li><Link className='Link' to='/crew'>CREW</Link> </li>
                        <li><Link className='Link' to='/tech'>TECHNOLOGY</Link> </li>
                    </ul>
                </div>
            </nav>
    </div>
  )
}

export default NavBar