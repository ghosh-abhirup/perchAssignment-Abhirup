import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import ReleaseSection from './components/ReleaseSection'
import ExploreSection from './components/ExploreSection'
import FooterSection from './components/FooterSection'

function App() {
  
  useEffect(()=>{
    window.addEventListener("message", (e)=>{
      console.log(e.data)
    })
  },[])
  

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
