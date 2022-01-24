import React from 'react'
import './SkillsComponent.css'
import { Slide } from 'react-awesome-reveal'

const SkillsComponent = () => {
  return (
    <Slide>
      <div className="content">
        <h3 className="text">I write literature in</h3>
        <ul>
          <li className="text">React (JS)</li>
          <li className="text">DotNet (C#)</li>
          <ul>
            <li className="text">Aspnetcore</li>
            <li className="text">EntityFramework</li>
            <li className="text">Blazor</li>
          </ul>
          <li className="text">Html and CSS</li>
        </ul>
        <h3 className="text">And few more!</h3>
      </div>
      <br />
    </Slide>
  )
}

export default SkillsComponent
