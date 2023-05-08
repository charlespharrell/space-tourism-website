import React from 'react'

function DestinationMars() {
  return (
    <div>
       <div className="img-box">
        <img  className='image'src="./image-mars.png" alt="" />
      </div>
        <div className="planet-content">
          Don't forget to pack your hicking boots. You'll need them 
          to tackle Olympus Mons, the tallest planetary mountain our solar
          system. It;s two and half ties the size of Everest. 
        </div>

         <hr className='planet-line' />

          <div className='plan'>
            <div className="average-distance">AVG.DISTANCE</div>
            <div className="distance">225 MIL.KM</div>
          </div>
          <div className="plan2">
            <div className="estimate">EST. TRAVEL TIME</div>
            <div className="travel-time">9 MONTHS</div>
          </div>
        
    </div>
  )
}

export default DestinationMars