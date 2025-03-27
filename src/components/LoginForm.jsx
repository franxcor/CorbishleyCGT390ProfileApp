import {useContext, useRef, useLayoutEffect} from 'react';
import {ModeContext} from '../contexts/ModeContext';
import style from '../styles/profileform.module.css';
import useAuthForm from '../hooks/authFormHook';
import { useSelector } from 'react-redux';

const LoginForm = ({isRegister = false}) => {
    const mode = useSelector((state => state.mode.mode))
    const {data, error, submitting, successMessage, handleInput, handleSubmit} = useAuthForm(isRegister);
    const usernameRef = useRef(null);


    useLayoutEffect(() => {
        usernameRef.current.focus();
    }, [])

    return (
        <div className={`${style["background"]} ${mode === "dark" ? style["darkMode"] : ""}`}>
            <form onSubmit={handleSubmit} className={`${style["container"]} ${mode === "dark" ? style["darkMode"] : ""}`}>
            <input
                ref={usernameRef}
                name="username"
                placeholder="Username"
                type="text"
                required
                value={data.username}
                className={style["biography"]}
                onChange={handleInput}
                ></input>
            {isRegister && <input
                name="email"
                placeholder="Email"
                type="email"
                required
                value={data.email}
                className={style["biography"]}
                onChange={handleInput}
                ></input> }
            <input
                name="password"
                placeholder="Password"
                type="Password"
                required
                minLength = '8'
                value={data.password}
                className={style["biography"]}
                onChange={handleInput}
                >
                </input>
                <br></br>
                <button type="submit" className={style["submit"]} 
                disabled={submitting || data.username === "" || data.password === ""  || (isRegister && data.email.trim() === "") ? true: false}>
                    Submit</button>
                {error.general && <p>{error.general}</p>}
                {successMessage.general && <p>{successMessage.general}</p>}
                
            </form>
        </div>
    )
}

export default LoginForm;