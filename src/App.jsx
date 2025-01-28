import { useState } from 'react'
import ProfileCard from './components/ProfileCard.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import './styles/App.css'
import Wrapper from './components/Wrapper.jsx'

import ReginaImage from './assets/regina.jpg'
import CadyImage from './assets/cady.jpg'

function App() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }

    
  }
  const profiles = [
    {
      img: ReginaImage,
      Name: "Regina George",
      Email: "regina@gmail.com",
      title: "Mean Girl 1"
    },
    {
      img: CadyImage,
      Name: "Cady Heron",
      Email: "cady@gmail.com",
      title: "Mean Girl 2"
    },
    {
      img: ReginaImage,
      Name: "Regina George 2",
      Email: "regina2@gmail.com",
      title: "Mean Girl 3"
    },
    {
      img: CadyImage,
      Name: "Cady Heron 2",
      Email: "cady2@gmail.com",
      title: "Mean Girl 4"
    }
  ]

  //get titles
  const titles=[...new Set(profiles.map((profile) => profile.title))];

  //get names 
  const names=[...new Set(profiles.map((profile) => profile.Name))];

  const [title, setTitle] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(filteredProfiles);
  };

  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleClear = () => {
    setTitle("");
    setName("");
  }

  const filteredProfiles = profiles.filter((profile) => {
    // if (title === ""){
    //   return true;
    // } else {
    //   return profile.title === title;
    // }
    return (title === "" || profile.title === title) && (profile.Name.toLowerCase().includes(name.toLowerCase())); //one liner
  })

  return (
    <div className = "section">
      <Wrapper>
        <Navbar></Navbar>
      </Wrapper>
      <Wrapper>
        <About></About>
        <button onClick = {handleClick}>{clicked ? "checked" : "unchecked"}</button>
      </Wrapper>
      <Wrapper>
        <div className="filter-wrapper" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="filter-select" style={{padding: '15px'}}>
            <label htmlFor='title-select'>Select a Title:</label>
            <select id="title-select" onChange={handleTitleChange} value={title}>
              <option value=""> ALL </option>
              {titles.map((title)=> (<option key={title} value={title}>{title}</option>))}

              {/* <option vlaue="Mean Girl 1">Mean Girl 1</option>
              <option vlaue="Mean Girl 2">Mean Girl 2</option>
              <option vlaue="Mean Girl 3">Mean Girl 3</option>
              <option vlaue="Mean Girl 4">Mean Girl 4</option> */}
            </select>
          </div>
          <div className="filter-search" style={{padding: '15px'}}>
            <label htmlFor='name-search'>Search by Name:</label>
            <input onChange={handleNameChange} placeholder='search for a name' value={name}/>
          </div>
          <button onClick={handleClear} style={{margin: '15px', padding: '5px'}}> Clear </button>
        </div>

        <div className = "profileCardContainer" style={appStyle.profileCards}>

          {filteredProfiles.map(profile => <ProfileCard key={profile.Email} {...profile}/>)} 
         
          {/*{profiles.map(profile => <ProfileCard key= {profile.Email} img = {profile.img} Name = {profile.Name} Email = {profile.Email} role = {profile.Role}></ProfileCard>)}*/}

        </div>
      </Wrapper>
      
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