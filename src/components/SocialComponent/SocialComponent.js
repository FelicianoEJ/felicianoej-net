import React from 'react'
import './SocialComponent.css'
import { Fade } from 'react-awesome-reveal'
import { Github } from '@icon-park/react'

const SocialComponent = () => {
  const githubUrl = 'https://github.com/FelicianoEJ'
  return (
    <Fade className="mid">
      <a href={githubUrl}>
        <Github theme="outline" size="36" fill="#e8e6e3" strokeWidth={3} />
      </a>
    </Fade>
  )
}

export default SocialComponent
