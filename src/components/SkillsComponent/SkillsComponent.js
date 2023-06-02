import React from 'react'
import './SkillsComponent.css'
import { Slide } from 'react-awesome-reveal'

const SkillsComponent = () => {
  return (
    <Slide>
      <div className="skills-content">
        <div className="text-card">
          <h3 className="text">Skills and technical expertise.</h3>
          <br/>
          <h2 className="text">Languages:</h2>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
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
        </div>
      </div>
      <br />
    </Slide>
  )
}

export default SkillsComponent
