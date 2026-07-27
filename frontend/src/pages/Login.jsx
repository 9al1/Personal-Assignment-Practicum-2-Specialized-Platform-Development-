import { useState } from "react";
import API from "../api";
import "../css/Auth.css";

function Login() {

    const [user,setUser] = useState({
        email:"",
        password:""
    });

    const handleLogin = async()=>{

        try {

            const response = await API.post(
                "/auth/login",
                user
            );

            localStorage.setItem(
                "token",
                response.data.token
            );
            
            alert("Login successful");
            
            window.location.href = "/";

        } catch(error){
            console.log(error);

            alert("Login failed");
        }
    };

    return (
        <div className="auth-container">

            <h1>
                Login
            </h1>

            <input
                type="email"
                placeholder="Email"
                onChange={(e)=>
                    setUser({
                        ...user,
                        email:e.target.value
                    })
                }
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>
                    setUser({
                        ...user,
                        password:e.target.value
                    })
                }
            />

            <button onClick={handleLogin}>
                Login
            </button>

        </div>
    );
}

export default Login;