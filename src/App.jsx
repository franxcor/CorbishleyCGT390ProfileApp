import { useState } from 'react'
import ProfileCard from './components/ProfileCard.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import './styles/App.css'

import ReginaImage from './assets/regina.jpg'
import CadyImage from './assets/cady.jpg'

function App() {

  const profiles = [
    {
      img: ReginaImage,
      Name: "Regina George",
      Email: "regina@gmail.com",
      Role: "Mean Girl 1"
    },
    {
      img: CadyImage,
      Name: "Cady Heron",
      Email: "cady@gmail.com",
      Role: "Mean Girl 2"
    }
  ]

  return (
    <div className = "section">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <About></About>
      </div>
      <div className = "profileCardContainer" style={appStyle.profileCards}>

         {profiles.map(profile => <ProfileCard key= {profile.Email} {...profile}/>)}
        {/*{profiles.map(profile => <ProfileCard key= {profile.Email} img = {profile.img} Name = {profile.Name} Email = {profile.Email} role = {profile.Role}></ProfileCard>)}*/}
        
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