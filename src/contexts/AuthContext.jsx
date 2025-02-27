import {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true" ? true: false);

    const login = () => {
        setIsLogin(true);
        localStorage.setItem("isLogin", "true");
    }

    const logout = () => {
        fetch(`https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/logout.php`)
        .then((response) => response.json())
        .then(data => {
            if (data.message) {
                setIsLogin(false);
                localStorage.setItem("isLogin", "false");
            } else {
                console.log(data);
            }
        })
        .catch(error => {
            console.log(error);
        })
        
    }

    return (
        <AuthContext.Provider value={{isLogin, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}