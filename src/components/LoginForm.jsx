import {useState, useContext, useEffect} from 'react';
import style from '../styles/profileform.module.css';
import {ModeContext} from '../contexts/ModeContext';
import {AuthContext} from '../contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = ({isRegister = false}) => {
    const {mode} = useContext(ModeContext);
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const [error, setError] = useState("")
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleInput = (e) => {
        console.log(isRegister)
        setData({...data, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData();
        formData.append("username", data.username.trim());
        formData.append("password", data.password.trim());
        if (isRegister) formData.append("email", data.email.trim());
        formData.append("action", isRegister ? 'register' : 'login');
        try {
            const response = await fetch(`https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/auth.php`, {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if(data.success) {
                setData({username: "", password: "", email: ""});
                setSuccessMessage(data.message);
                setError("");
                login();
                navigate("/")
            } else {
                console.log(error)
                setError(data.error);
                setSuccessMessage("");
            }
        } catch (error){
            setError(error);
            setSuccessMessage("");
        } finally {
            setSubmitting(false);
        }
        
    }


    return (
        <div className={`${style["background"]} ${mode === "dark" ? style["darkMode"] : ""}`}>
            <form onSubmit={handleSubmit} className={`${style["container"]} ${mode === "dark" ? style["darkMode"] : ""}`}>
            <input
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
                {/* error && <p>{error}</p> */}
                {/* successMessage && <p>{successMessage}</p> */}
            </form>
        </div>
    )
}

export default LoginForm;