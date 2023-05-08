import React from 'react'

function DestinationMoon() {
  return (
    <div>
        <div className="img-box">
        <img  className='image'src="./image-moon.png" alt="" />
      </div>
         <div className="planet-content">
         See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites.
        </div>

         <hr className='planet-line' />
          <div className='plan'>
            <div className="average-distance">AVG.DISTANCE</div>
            <div className="distance"> 384,400 km</div>
          </div>
          <div className="plan2">
            <div className="estimate">EST. TRAVEL TIME</div>
            <div className="travel-time">3 days</div>
          </div>
    </div>
  )
}

export default DestinationMoon