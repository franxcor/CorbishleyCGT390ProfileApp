import LoginForm from "../components/LoginForm";
import Wrapper from "../components/Wrapper";
import {Link} from 'react-router-dom';


const LoginPage = () => {
    return (
        <Wrapper>
            <h1> Login Page </h1>
            <LoginForm></LoginForm>
            <Link to="/register">Don't have an account?</Link>
        </Wrapper>
        
    )
}

export default LoginPage;