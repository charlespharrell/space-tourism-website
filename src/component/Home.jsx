import React, { } from 'react'
import './Home.css'

function Home() {
   
  return (
    <html>
  <div className='container'>
        
            <img className='home-background' src="./background-home-desktop.jpg" alt="" /> 
            <img src="./background-home-tablet.jpg" alt="" className="home-tabletBackgound" />    
            <img src="./background-home-tablet.jpg" alt="" className="home-mobileBackgound" />    
            <div className='space-box'>
                <div className="so">SO, YOU WANT TO TRAVEL TO</div>

                <div className='space'>SPACE</div>

                <div className='content'>Let's face it: If you want to go to space, you might as well
                    genuinely go to outer space and not hover 
                    kind of on the edge of it. Well sit back and relax because we'll give 
                    you a truly out of the world experience!
                </div>
            </div>

            <div className="explore_circle">
                <div className="explore">EXPLORE</div>
            </div>
        </div>
    </html>
  )
}

export default Home