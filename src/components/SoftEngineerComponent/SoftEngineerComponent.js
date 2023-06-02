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
            Passionate software engineer with experience in multiple areas such as
            web development, network engineering, and internal corporate
            applications. Experienced in working with monolithic systems and
            microservices utilizing software-defined networking approaches.
            Through my years of work, I have gained experience in the Microsoft 
            ecosystem ranging from application development in the .Net platform 
            to the use of cloud services both in Azure and Amazon AWS. 
            I have led .net6.0 and .net7.0 project development for different types of services. 
            Some examples of projects that I have owned are web API for mobile and web-based clients, 
            identity providers (a.k.a IDP), toolings for developers and testers, among many others. 
            The majority of my interactions with databases are via raw SQL, ORM (EntityFramework), 
            Micro-ORM (StackOverflow Dapper), DBMS, and NoSQL (MongoDB). 
            I always strive to maintain the highest level of code quality by using strategies such as UnitTesting, 
            implementing SOLID principles as much as possible, Benchmark testing for code performance, 
            code reviews, and best practices.
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
