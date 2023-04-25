import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import ReleaseSection from './components/ReleaseSection'
import ExploreSection from './components/ExploreSection'
import FooterSection from './components/FooterSection'

function App() {
  

  return (
    <>
      <HeroSection />
      <ReleaseSection />
      <ExploreSection />
      <FooterSection />
    </>
  )
}

export default App
