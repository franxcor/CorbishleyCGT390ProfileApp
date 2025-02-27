import { useState, useEffect, useContext } from 'react'
import Navbar from './components/Navbar.jsx'
import './styles/App.css'
import HomePage from './pages/HomePage.jsx'
import AddProfile from './pages/AddProfile.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFound from './pages/NotFound.jsx'
import ProfileDetails from './pages/ProfileDetails.jsx'
import ProfileEditPage from './pages/ProfileEditPage.jsx'
import ProfileLayoutPage from './pages/ProfileLayoutPage.jsx'

import {HashRouter, Routes, Route} from "react-router-dom";
import { ModeContext } from './contexts/ModeContext.jsx';


function App() {
  const {mode} = useContext(ModeContext);


  return (
    <HashRouter>
      <header>
        <Navbar ></Navbar>
      </header>
      <main className={mode ? "dark" : "light"}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/add-profile" element={<AddProfile/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="profile/:id" element={<ProfileLayoutPage/>}>
            <Route index element={<ProfileDetails/>} />
            <Route path="edit" element={<ProfileEditPage/>} />
          </Route>
          <Route path="*" element={<NotFound/>}/>
          
        </Routes>
      </main>
      
    </HashRouter>
  )
}

export default App;
