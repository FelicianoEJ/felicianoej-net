import React from 'react'
import './SkillsComponent.css'
import { Slide } from 'react-awesome-reveal'

const SkillsComponent = () => {
  return (
    <Slide>
      <div className="skills-content">
        <h3 className="text">Skills and technical expertise.</h3>
        <br/>
        <h2 className="text">Languages:</h2>
        <ul>
          <li>JavaScript</li>
          <li>Html</li>
          <li>CSS</li>
          <li>C#</li>
          <li>SQL</li>
        </ul>
        <h2 className="text">Platforms, Framworks and libraries:</h2>
        <ul>
          <li>
            Microsoft .NET
            <ul>
              <li>Aspnetcore (MVC and minimal-api)</li>
              <li>EntityFramework</li>
              <li>Blazor</li>
            </ul>
          </li>
          <li>Dapper</li>
          <li>React</li>
        </ul>
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
      <br />
    </Slide>
  )
}

export default SkillsComponent
