import "../css/Navbar.css";
import logo from "../assets/PaletteTown.png";

import { Link, useNavigate } from "react-router-dom";


function Navbar() {


    const navigate = useNavigate();


    const token = localStorage.getItem("token");


    function logout() {

        localStorage.removeItem("token");

        navigate("/");

        window.location.reload();

    }



    return (

        <nav className="navbar">


            <Link to="/">

                <img
                    src={logo}
                    alt="PaletteTown Logo"
                    className="logo"
                />

            </Link>



            <ul className="nav-links">


                <li>

                    <Link to="/">
                        Home
                    </Link>

                </li>



                <li>

                    <Link to="/products">
                        Products
                    </Link>

                </li>



                {
                    token ? (

                        <li>

                            <button
                                className="logout-button"
                                onClick={logout}
                            >
                                Logout
                            </button>

                        </li>


                    ) : (

                        <>


                            <li>

                                <Link to="/login">
                                    Login
                                </Link>

                            </li>



                            <li>

                                <Link to="/register">
                                    Register
                                </Link>

                            </li>


                        </>

                    )

                }



            </ul>


        </nav>

    );

}


export default Navbar;