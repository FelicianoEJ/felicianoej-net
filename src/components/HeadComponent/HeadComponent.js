import React from 'react'
import './HeadComponent.css'
import { Slide } from 'react-awesome-reveal'
import { FileCode, ExperimentOne, FlightAirflow } from '@icon-park/react'

const HeadComponent = () => {
  return (
    <Slide>
      <div id="alias-content">
        <h1 className="text">Hi,</h1>
        <h2 className="text">I am Emilio a.k.a FelicianoEJ</h2>
        <br />
        <h2 className="text">
          <FileCode theme="outline" size="20" fill="#fff" strokeWidth={3} />
          &nbsp; Software Engineer
        </h2>
        <h2 className="text">
          <ExperimentOne
            theme="outline"
            size="20"
            fill="#fff"
            strokeWidth={3}
          />
          &nbsp; Test Lead
        </h2>
        <h2 className="text">
          <FlightAirflow
            theme="outline"
            size="20"
            fill="#fff"
            strokeWidth={3}
          />
          &nbsp; Pilot
        </h2>
        <br />
      </div>
    </Slide>
  )
}

export default HeadComponent
