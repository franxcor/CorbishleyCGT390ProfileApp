import { useState, useEffect, useContext } from 'react'
import About from '../components/About.jsx'
import '../styles/App.css'
import Wrapper from '../components/Wrapper.jsx'

function AboutPage() {
  
  const [clicked, setClicked] = useState(false)
  
  const handleClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
      <Wrapper >
        <About></About>
        <button onClick = {handleClick}>{clicked ? "checked" : "unchecked"}</button>
      </Wrapper>
     
  )
}

export default AboutPage;

const appStyle = {
  profileCards : {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '400px',
  }
}