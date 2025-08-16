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
            <li>Linux</li>
          </ul>
          <h2 className="text">Cloud Platforms:</h2>
          <p>In parenthesis are services wich I haved closely work with.</p>
          <ul>
            <li>CI/CD (GitHub Actions, Azure DevOps)</li>
            <li>Azure (Entra, Functions, CosmosDB, Managed SQL, App Service, AKS, AKV, AppConfig, etc.)</li>
            <li>Amazon Web Services (IAM, Lightsail, Amplify, Route53, EC2, S3, Lambda, AppConfig)</li>
            <li>Google Cloud Platform (Cloud Run, Cloud Functions, Contact Center AI)</li>
          </ul>
        </div>
      </div>
      <br />
    </Slide>
  )
}

export default SkillsComponent
