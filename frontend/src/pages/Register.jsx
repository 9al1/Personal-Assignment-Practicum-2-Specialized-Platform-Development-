import { useState } from "react";
import API from "../api";
import "../css/Auth.css";

function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleRegister = async () => {
        try {
            await API.post(
                "/auth/register",
                user
            );

            alert("Registration successful");

        } catch(error) {
            console.log(error);
            alert("Registration failed");
        }
    };

    return (
        <div className="auth-container">

            <h1>
                Register
            </h1>

            <input
                type="text"
                placeholder="Name"
                onChange={(e)=>
                    setUser({
                        ...user,
                        name:e.target.value
                    })
                }
            />

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

            <button onClick={handleRegister}>
                Register
            </button>

        </div>
    );
}

export default Register;