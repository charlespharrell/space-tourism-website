import React from 'react'

function DestinationEuropa() {
  return (
    <div>
        <div className="img-box">
        <img  className='image'src="./image-europa.png" alt="" />
      </div>
         <div className="planet-content">
         The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
        winter lover’s dream. With an icy surface, it’s perfect for a bit of 
        ice skating, curling, hockey, or simple relaxation in your snug 
        wintery cabin.
        </div>

         <hr className='planet-line' />

          <div className='plan'>
            <div className="average-distance">AVG.DISTANCE</div>
            <div className="distance">  628 mil. km</div>
          </div>
          <div className="plan2">
            <div className="estimate">EST. TRAVEL TIME</div>
            <div className="travel-time">3 YEARS</div>
          </div>
    </div>
  )
}

export default DestinationEuropa