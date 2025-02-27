import React from 'react';
import style from '../styles/navBar.module.css';
import {Link} from 'react-router-dom';
import {useContext} from "react";
import {ModeContext} from "../contexts/ModeContext";
import { AuthContext } from '../contexts/AuthContext';


const Navbar = () => {
    const {isLogin, logout} = useContext(AuthContext);
    const {mode, toggleMode} = useContext(ModeContext);
    return (
        <div className={`${style["navBarDiv"]} ${mode === "dark" ? style["darkMode"] : ""}`}>
            <ul className={style["list"]}>
                {isLogin && <li className={style["listItem"]}><Link to="/">Home</Link></li>}
                
                {isLogin && <li className={style["listItem"]}><Link to="/add-profile">Add Profile</Link></li>}
                
                { isLogin && <li className={style["listItem"]}><Link to="/about">About</Link></li>}
                
            </ul>
            { isLogin? <button onClick={logout}>Logout</button>:
            <ul className={style["list"]}>
                <li className={style["listItem"]}><Link to="/register">Register</Link></li>
                <li className={style["listItem"]}><Link to="/login">Login</Link></li>
            </ul>
            }
            <button className={`${style["button"]}`} onClick={toggleMode}>{mode ? "Light Mode" : "Dark Mode"}</button>
        </div>
    );
};
export default Navbar;

