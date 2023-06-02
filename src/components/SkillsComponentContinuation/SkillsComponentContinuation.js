import React from 'react'
import './SkillsComponentContinuation.css'
import { Slide } from 'react-awesome-reveal'

const SkillsComponentContinuation = () => {
  return (
    <Slide>
      <div className="skills-content">
        <div className="text-card">
          <h3 className="text">Skills and technical expertise continuation.</h3>
          <br/>
          <h2 className="text">Operating Systems:</h2>
          <ul>
            <li>Microsoft Windows 10 & 11</li>
            <li>Linux</li>
          </ul>
          <h2 className="text">Cloud Services:</h2>
          <ul>
            <li>Azure</li>
            <li>AWS</li>
          </ul>
          <h2 className="text">Techs:</h2>
          <ul>
            <li>GraphQL</li>
            <li>MQTT</li>
            <li>Push Notification Services (PNS)</li>
          </ul>
          <h3 className="text">And some more stuff!</h3>
        </div>
      </div>
      <br />
    </Slide>
  )
}

export default SkillsComponentContinuation
