import style from '../styles/wrapper.module.css';
import { useContext } from 'react';
import { ModeContext } from '../contexts/ModeContext';
// using to replace other divs
const Wrapper = ({children}) => {
    const {mode} = useContext(ModeContext);
    return <div className={`${style["section"]} ${mode === 'dark' ? style["darkMode"]: ""}`}> <div className={style["container"]}> {children} </div> </div>
}

export default Wrapper;