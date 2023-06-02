import React from 'react'
import './HeadComponent.css'
import { Slide } from 'react-awesome-reveal'
import { FileCode, FlightAirflow } from '@icon-park/react'

const HeadComponent = () => {
  return (
    <Slide>
      <div className="content">
        <div className="text-card">
          <h1 className="text">Hi,</h1>
          <h2 className="text">I am Emilio a.k.a FelicianoEJ</h2>
          <br />
          <h2 className="text">
            <FileCode theme="outline" size="20" fill="#e8e6e3" strokeWidth={3} />
            &nbsp; Software Engineer
          </h2>
          <h2 className="text">
            <FlightAirflow
              theme="outline"
              size="20"
              fill="#e8e6e3"
              strokeWidth={3}
            />
            &nbsp; Pilot
          </h2>
          <br />
        </div>
      </div>
    </Slide>
  )
}

export default HeadComponent
