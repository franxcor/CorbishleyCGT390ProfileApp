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
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

import {HashRouter, Routes, Route} from "react-router-dom";
import { ModeContext } from './contexts/ModeContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx'
import ProtectedRoute from './contexts/ProtectedRoute.jsx'


function App() {
  const {mode} = useContext(ModeContext);


  return (
    <AuthProvider>
      <HashRouter>
        <header>
          <Navbar ></Navbar>
        </header>
        <main className={mode ? "dark" : "light"}>
          <Routes>
            <Route path="/" element={<ProtectedRoute> <HomePage/> </ProtectedRoute>}/>
            <Route path="/add-profile" element={<ProtectedRoute><AddProfile/> </ProtectedRoute>}/>
            <Route path="/about" element={<ProtectedRoute><AboutPage/> </ProtectedRoute>}/>
            <Route path="profile/:id" element={<ProtectedRoute><ProfileLayoutPage/> </ProtectedRoute>}>
              <Route index element={<ProtectedRoute> <ProfileDetails/> </ProtectedRoute>} />
              <Route path="edit" element={<ProtectedRoute> <ProfileEditPage/> </ProtectedRoute>} />
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="*" element={<NotFound/>}/>
            
          </Routes>
        </main>
        
      </HashRouter>
    </AuthProvider>
    
  )
}

export default App;
