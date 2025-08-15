import React from 'react'
import './SoftEngineerComponent.css'
import { Slide } from 'react-awesome-reveal'

const SoftEngineerComponent = () => {
  const linkedinRef = 'https://www.linkedin.com/in/emilio-feliciano-330a1021b/'

  return (
    <Slide>
      <div className="content">
        <div className="text-card">
          <h1 className="text">Bio</h1>
          <h2 className="text m-adjust">
            Results-driven Full Stack Engineer with extensive experience in designing, 
            developing, and securing enterprise-level applications for the financial and tech sectors. 
            Proven expertise in modernizing monolithic systems to distributed microservice architectures. 
            Played a pivotal role in a critical Identity Provider (IDP) migration that reduced identity and access management incidents by ~82%.
            I always strive to maintain the highest level of code quality by adopting best practices such as, SOLID principles, benchmarking, documentation, and testing.
          </h2>
        </div>
      </div>
      <br />
      <br />
      <a href={linkedinRef}><img alt="LinkedIn" src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png.original.png" width="32" /></a>
      <br />
    </Slide>
  )
}

export default SoftEngineerComponent
