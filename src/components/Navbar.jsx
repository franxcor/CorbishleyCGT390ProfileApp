import React from 'react';
import style from '../styles/navBar.module.css';

const Navbar = ({switchMode, darkMode}) => {
    return (
        <div className={`${style["navBarDiv"]} ${darkMode ? style["darkMode"] : ""}`}>
            <a href="#" className={`${style["links"]} ${darkMode ? style["darkMode"] : ""}`}>Home</a>
            <a href="#" className={`${style["links"]} ${darkMode ? style["darkMode"] : ""}`}>About</a>
            <a href="#" className={`${style["links"]} ${darkMode ? style["darkMode"] : ""}`}>Other</a>
            <button className={`${style["button"]} ${darkMode ? style["darkMode"] : ""}`} onClick={switchMode}>Switch Mode</button>
        </div>
    );
};
export default Navbar;

