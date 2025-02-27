import Wrapper from "../components/Wrapper";
import LoginForm from "../components/LoginForm";

const RegisterPage = () => {
    return (
        <Wrapper>
            <h1> Register Page </h1>
            <LoginForm isRegister={true}></LoginForm>
        </Wrapper>
        
    )
}

export default RegisterPage;