import React from 'react'
import './SkillsComponent.css'
import { Slide } from 'react-awesome-reveal'

const SkillsComponent = () => {
  return (
    <Slide>
      <div className="skills-content">
        <div className="text-card">
          <h2 className="text">Skills and technical expertise.</h2>
          <br />
          <h2 className="text">Proficient Languages:</h2>
          <ul>
            <li>C# (and by extension Java)</li>
            <li>Python</li>
            <li>Go</li>
            <li>TypeScript (and by extension JavaScript)</li>
            <li>SQL</li>
          </ul>
          <h4 className="text">Honorable metions:</h4>
          <ul>
            <li>JSON & XML (and by extension HTML)</li>
            <li>CSS</li>
            <li>Shell Scripting (PowerShell, Bash)</li>
          </ul>
          <h2 className="text">Platforms:</h2>
          <ul>
            <li>Windows</li>
            <li>Linux (Debian)</li>
          </ul>
          <h2 className="text">Cloud Platforms:</h2>
          <ul>
            <li>Azure</li>
            <li>CI/CD (GitHub Actions, Azure DevOps)</li>
            <li>Amazon Web Services (AWS)</li>
          </ul>
        </div>
      </div>
      <br />
    </Slide>
  )
}

export default SkillsComponent
