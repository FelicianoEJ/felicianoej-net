import React, { useState, useEffect, useRef } from 'react'
import Net from 'vanta/dist/vanta.net.min'
import HeadComponent from './components/HeadComponent/HeadComponent'
import SoftEngineerComponent from './components/SoftEngineerComponent/SoftEngineerComponent'
import SkillsComponent from './components/SkillsComponent/SkillsComponent'
import SkillsComponentContinuation from './components/SkillsComponentContinuation/SkillsComponentContinuation'
import SocialComponent from './components/SocialComponent/SocialComponent'
import PilotComponent from './components/PilotComponent/PilotComponent'
import { ArrowLeft, ArrowRight } from '@icon-park/react'
import './App.css'

const App = () => {
  const [page, setPage] = useState(0)
  const [content, setContent] = useState(<HeadComponent />)
  const [vantaEffect, setVantaEffect] = useState(0)

  const rootRef = useRef(document.getElementById('root'))

  // gold metallic color: 0xd4af37,
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        Net({
          el: rootRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: document.body.clientHeight,
          scale: 1.0,
          scaleMobile: 2.0,
          color: 0x9b8248,
          backgroundColor: 0x141414,
          points: 14.0,
          maxDistance: 21.0,
          spacing: 16.0,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  useEffect(() => {
    switch (page) {
      case 0:
        setContent(<HeadComponent />)
        break
      case 1:
        setContent(<SoftEngineerComponent />)
        break
      case 2:
        setContent(<SkillsComponent />)
        break
      case 3:
        setContent(<SkillsComponentContinuation />)
        break
      case 4:
        setContent(<PilotComponent />)
        break
    }
  }, [page])

  return (
    <div className="container">
      {content}
      <div className="arrow-btns-container">
        <div className="arrow-btn-wrapper">
          <button
            hidden={page === 0}
            className="btn arrow-btn"
            onClick={() => setPage(page - 1)}
          >
            <ArrowLeft
              theme="outline"
              size="32"
              fill="#fff"
              strokeWidth={3}
            />
          </button>
        </div>
        <div className="arrow-btn-wrapper">
          <button
            hidden={page === 4}
            className="btn arrow-btn"
            onClick={() => setPage(page + 1)}
          >
            <ArrowRight
              theme="outline"
              size="32"
              fill="#fff"
              strokeWidth={3}
            />
          </button>
        </div>
      </div>
      <div className="social-container">
        <SocialComponent />
      </div>
    </div>
  )
}

export default App
