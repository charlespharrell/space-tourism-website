import React from 'react'
import './Destination.css'
import DestinationMars from './DestinationMars'
import DestinationEuropa from './DestinationEuropa'
import DestinationMoon from './DestinationMoon'
import DestinationTitan from './DestinationTitan'

import { useState } from 'react'

function Destination() {

  const [destination, setDestination]= useState(3)

        const DestinationTitle= [
            'MOON',
            'MARS',
            'EUROPA',
            'TITAN'
        ]

  const destination_details=()=>{
        if (destination===0){
          return <DestinationMoon/>
        }
        else if (destination ===1){
          return <DestinationMars/>
        }
        else if (destination ===2){
          return <DestinationEuropa/>
        }
        else if (destination ===3){
          return <DestinationTitan/>
        }
  }   
  
  const handleMoon=(e)=>{
    e.preventDefault();
    if(handleMoon){
      setDestination(0)
    }
  }
  const handleMars=(e)=>{
    e.preventDefault();
    if(handleMars){
      setDestination(1)
    }
    
  }
  const handleEuropa=(e)=>{
    e.preventDefault();
    if(handleEuropa){
      setDestination(2)
    }
    
  }
  const handleTitan=(e)=>{
    e.preventDefault();
    if(handleTitan){
      setDestination(3)
    }
  }
  return (
    <div>

    <div className='container-destination'>
      <img className='destination-background' src="./background-destination-desktop.jpg" alt="" />
      <img className='destination-tabletbackground' src="./background-destination-tablet.jpg" alt="" />
      <img className='destination-phonebackground' src="./background-destination-mobile.jpg" alt="" />

      <div className="pick-box" >
        <div className="one">01</div>
        <div className="pick">PICK YOUR DESTINATION</div>
      </div>

      <div className="planet-details">
        <div className="planet-option">
          <ul>
            <li onClick={handleMoon} >MOON</li>
            <li onClick={handleMars}>MARS</li>
            <li onClick={handleEuropa}>EUROPA</li>
            <li onClick={handleTitan}>TITAN</li>
          </ul>
        </div>

       <hr className={destination===1?"hrMars":"hrMars2" }/>
        <hr className={destination===0?'hrMoon':'hrMoon2' }/>
        <hr className={destination===2?"hrEuropa":"hrEuropa2"}  />
        <hr className={destination===3?"hrTitan":"hrTitan2"} />

        <div className="planet-name">{DestinationTitle[destination]}</div>

        <div className="destination-details">{destination_details()}</div>

      </div>

    </div>
    </div>
  )
}

export default Destination