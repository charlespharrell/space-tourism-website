import React from 'react'

function DestinationTitan() {
  return (
    <div> 
        <div className="img-box">
        <img  className='image'src="./image-titan.png" alt="" />
      </div>

        <div className="planet-content">
     The only moon known to have a dense atmosphere other than Earth, Titan 
    is a home away from home (just a few hundred degrees colder!). As a 
    bonus, you get striking views of the Rings of Saturn.
  </div>

   <hr className='planet-line' />

    <div className='plan'>
      <div className="average-distance">AVG.DISTANCE</div>
      <div className="distance"> 1.6 bil. km</div>
    </div>
    <div className="plan2">
      <div className="estimate">EST. TRAVEL TIME</div>
      <div className="travel-time">7 YEARS</div>
    </div></div>
  )
}

export default DestinationTitan