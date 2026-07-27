import "../css/Footer.css";
import logo from "../assets/PaletteTown.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img
                    src={logo}
                    alt="PaletteTown Logo"
                    className="logo"
                />
                <p>
                    Your one-stop shop for premium art supplies.
                </p>

                <p className="footer-copy">
                    © 2026 PaletteTown. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;