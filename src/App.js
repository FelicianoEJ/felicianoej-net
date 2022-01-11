import React, { useState, useEffect, useRef } from 'react'
import Net from 'vanta/dist/vanta.net.min'
import HeadComponent from './components/HeadComponent/HeadComponent'
import './App.css'

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(0)

  const myRef = useRef(null)
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
          color: 0xcdcdcd,
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
    </div>
  )
}

export default App
