import React from 'react'
import './SoftEngineerComponent.css'
import { Slide } from 'react-awesome-reveal'

const SoftEngineerComponent = () => {
  const linkedinRef = 'https://www.christophergironofficial.com/'
  return (
    <Slide>
      <div className="content">
        <h1 className="text">Bio</h1>
        <h2 className="text">
          Passionate software engineer with experience in multiple areas such as
          web development, network engineering, and internal corporate
          applications. Experienced in working with monolithic systems and
          microservices utilizing software-defined networking approaches. Highly
          focus on developing technical experience by participating in
          cooperative and professional environments while providing a very
          comprehensive intellectual service.
        </h2>
        <br />
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
      <div className="content">
        <a href={linkedinRef}>LinkedIn</a>
      </div>
      <br />
    </Slide>
  )
}

export default SoftEngineerComponent
