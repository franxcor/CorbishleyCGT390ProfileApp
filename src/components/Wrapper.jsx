import style from '../styles/wrapper.module.css';
import { useContext } from 'react';
import { ModeContext } from '../contexts/ModeContext';
import { useSelector } from 'react-redux';
const Wrapper = ({children}) => {
    const mode = useSelector((state => state.mode.mode));
    return <div className={`${style["section"]} ${mode === 'dark' ? style["darkMode"]: ""}`}> <div className={style["container"]}> {children} </div> </div>
}

export default Wrapper;