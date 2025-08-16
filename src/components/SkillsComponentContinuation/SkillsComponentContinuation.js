import React from 'react'
import './SkillsComponentContinuation.css'
import { Slide } from 'react-awesome-reveal'

const SkillsComponentContinuation = () => {
  return (
    <Slide>
      <div className="skills-content">
        <div className="text-card">
          <h3 className="text">Skills and technical expertise continuation.</h3>
          <h2 className="text">Tools:</h2>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Postman</li>
            <li>Figma</li>
            <li>ServiceNow</li>
          </ul>
          <h2 className="text">Frameworks & Libraries:</h2>
          <ul>
            <li>
              Microsoft .NET
              <ul>
                <li>AspNet Core (MVC and minimal-api)</li>
                <li>EntityFramework</li>
                <li>Blazor</li>
                <li>ML.Net</li>
              </ul>
            </li>
            <li>Dapper</li>
            <li>PyTorch</li>
            <li>Node (Express.js, Nest.js, React.js, Vue.js)</li>
            <li>Spring Boot</li>
            <li>jQuery</li>
          </ul>
          <h2 className="text">Techs:</h2>
          <ul>
            <li>AI (NLP with Google, LLM with multiple providers, Machine Learning with ML.NET and PyTorch)</li>
            <li>Identity Provider & Identity Access Management (Auth 0, Okta, EntraID and Keycloak)</li>
            <li>RESTful APIs</li>
            <li>WebSockets</li>
            <li>GraphQL</li>
            <li>Document Databases (Azure CosmosDB, MongoDB, DynamoDB)</li>
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
