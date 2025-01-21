import { useState } from 'react'
import ProfileCard from './components/ProfileCard.jsx'
import ProfileCard2 from './components/ProfileCard2.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import './styles/App.css'

function App() {

  return (
    <div className = "section">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <About></About>
      </div>
      <div className = "profileCardContainer" style={appStyle.profileCards}>
        <ProfileCard></ProfileCard>
        <ProfileCard2></ProfileCard2>
      </div>
    </div>
  )
}

export default App;

const appStyle = {
  profileCards : {
    display: 'flex',
    justifyContent: 'center',
  }
}