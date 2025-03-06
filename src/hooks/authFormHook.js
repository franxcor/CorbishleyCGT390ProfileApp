
import {AuthContext} from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {useState, useContext} from 'react';

function useAuthForm(isRegister) {
    
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

    return {handleSubmit, handleInput, data, error, submitting, successMessage}
}

export default useAuthForm;