import React, { useState } from 'react'
import './Tech.css'
import TechCapsule from './TechCapsule'
import TechSpace from './TechSpace'
import TechVehicle from './TechVehicle'

function Tech() {

  const[tech, setTech]=useState(0)
  const TechTerm =[
                'LAUNCH VEHICLE',
                'SPACEPORT',
                'SPACE CAPSULE',
  ]

  const TechContent=()=>{
    if(tech === 0){
      return<TechVehicle/>
    } 
    else if(tech === 1){
      return<TechSpace/>
    }
    else if(tech ===2){
      return<TechCapsule/>
    }
  }
  const handleTechOne=(e)=>{
    e.preventDefault()
      if (handleTechOne){
        setTech(0)
      }
  }
  const handleTechTwo=(e)=>{
    e.preventDefault()
      if (handleTechTwo){
        setTech(1)
      }
  }
  const handleTechThree=(e)=>{
    e.preventDefault()
      if (handleTechThree){
        setTech(2)
      }
  }
  return (
    <div className='tech-container'>
    
      <img className='tech-background' src="./background-technology-desktop.jpg" alt="" />
      <img className='tech-mobilebackground' src="./background-technology-mobile.jpg" alt="" />
      <img className='tech-tabletbackground' src="./background-technology-tablet.jpg" alt="" />
      <div className="pick-box-tech">
              <div className="one-tech">03</div>
              <div className="pick-tech">SPACE LAUNCH 101</div>
        </div>

        <div className="tech-circle-box">
          <div className={tech===0?"circle-fill": "tech-circle"} onClick={handleTechOne}><div className="tech-num">1</div></div>
          <div className={tech===1?"circle-fill": "tech-circle"} onClick={handleTechTwo}><div className="tech-num">2</div></div>
          <div className={tech===2?"circle-fill": "tech-circle"} onClick={handleTechThree}><div className="tech-num">3</div></div>
        </div>

        <div className="tech-details">
          
        <div className="term">THE TERMINOLOGY</div>
          <div className="launch">{TechTerm[tech]}</div>
          <div className="tech-content">{TechContent()}</div>
          
        </div>
    </div>
  )
}

export default Tech