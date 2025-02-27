import style from "../styles/about.module.css";
import { ModeContext } from '../contexts/ModeContext.jsx'
import { useContext } from "react";


const About = () => {
    const {mode} = useContext(ModeContext);
    return (
        <div className={`${style["container"]} ${mode === "dark" ? style["darkMode"] : ""}`}>
            <h1> About</h1>
            <p> An About Page for the profile app </p>
        </div>
    )
}
export default About;