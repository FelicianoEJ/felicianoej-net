import React, { useState, useEffect, useRef } from 'react'
import Net from 'vanta/dist/vanta.net.min'
import HeadComponent from './components/HeadComponent/HeadComponent'
import { ArrowLeft, ArrowRight } from '@icon-park/react'
import './App.css'

const App = () => {
  const [page] = useState(0)
  const [vantaEffect, setVantaEffect] = useState(0)

  const myRef = useRef(null)
  // gold metallic color: 0xd4af37,
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        Net({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: document.body.scrollHeight,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
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

  return (
    <div ref={myRef}>
      <HeadComponent />
      <div className="arrow-btns-container">
        <div className="arrow-btn-wrapper">
          <button hidden={(page===2)} className="btn arrow-btn">
            <ArrowLeft theme="outline" size="32" fill="#fff" strokeWidth={3} />
          </button>
        </div>
        <div className="arrow-btn-wrapper">
          <button className="btn arrow-btn">
            <ArrowRight theme="outline" size="32" fill="#fff" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
