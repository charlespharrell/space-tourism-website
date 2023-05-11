import React from 'react'
import './Crew.css'
import { useState, useEffect } from 'react'
// import CrewMap from './CrewMap'
import CrewCommander from './CrewCommander'
import CrewMission from './CrewMission'
import CrewPilot from './CrewPilot'
import CrewFlight from './CrewFlight'

function Crew() {

  const [crew, setCrew]=useState(0)
  
  const role=['COMMANDER', 'MISSION SPECIALIST', 'PILOT', 'FLIGHT ENGINEER']

  const crew_name=(e)=>{
    if (crew===0){
      return <CrewCommander/>
    }
    else if(crew===1){
      return<CrewMission/>
  }
  else if(crew===2){
    return<CrewPilot/>
  }
  else if ( crew===3){
    return <CrewFlight/>
  }
  }
  useEffect(()=>{
      fetch('http://localhost:8000/crew')
      .then(res=>{
       return res.json()
      })
      .then(data=>{
          console.log(data)
          setCrew(data)
      })
  },[])

  const handleCommander=()=>{
    if (handleCommander){
      setCrew(0)
    }
  }
  const handleMission = ()=>{
    if(handleMission){
      setCrew(1)
    }
  }
    const handlePilot=()=>{
      if(handlePilot){
        setCrew(2)
      }
    }
    const handleFlight=()=>{
      if(handleFlight){
        setCrew(3)
      }
    }
  
  return (
    <div className='crew-container'>    
        <img className='crew-background' src="./background-crew-desktop.jpg" alt="" />
        <img className='crew-mobilebackground' src="./background-crew-mobile.jpg" alt="" />
        <div className="pick-box-crew">
              <div className="one-crew">02</div>
              <div className="pick-crew">MEET YOUR CREW</div>
        </div>

        <div className="crew-details">
              <div className="occupation">{role[crew]}</div>
              <div className="crew-name">{crew_name()}</div>
        
        </div>
        <div className="circle-box" >
          <div className="circle onee" onClick={handleCommander} ></div>
          <div className="circle two"  onClick={handleMission}></div>
          <div className="circle three"  onClick={handlePilot}></div>
          <div className="circle four"  onClick={handleFlight}></div>
        </div>

        
    </div>

  )
}

export default Crew