import React from 'react'
import './SoftEngineerComponent.css'
import { Slide } from 'react-awesome-reveal'

const SoftEngineerComponent = () => {
  const linkedinRef = 'https://www.linkedin.com/in/emilio-feliciano-330a1021b/'

  return (
    <Slide>
      <div className="content">
        <h1 className="text">Bio</h1>
        <h2 className="text m-adjust">
          Passionate software engineer with experience in multiple areas such as
          web development, network engineering, and internal corporate
          applications. Experienced in working with monolithic systems and
          microservices utilizing software-defined networking approaches.
        </h2>
        <br />
      </div>
      <br />
      <div className="content">
        <a href={linkedinRef}><img alt="LinkedIn" src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png.original.png" width="32" /></a>
      </div>
      <br />
    </Slide>
  )
}

export default SoftEngineerComponent
