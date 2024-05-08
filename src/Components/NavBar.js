import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function NavBar({ isLoggedIn, setIsLoggedIn }) {
    console.log(isLoggedIn);
    const navigate = useNavigate();
    return (
        <div className="NavBar">
            <div>
                <img src="https://image.similarpng.com/very-thumbnail/2021/05/Logo-design-illustration-on-transparent-background-PNG.png" alt="daksh" onClick={() => { navigate("/") }} height={70} loading="lazy" />
            </div>
            <div>
                <nav className="nav-bar">
                    <div>
                        <button onClick={() => { navigate("/") }}>Home</button>
                        <button onClick={() => { navigate("/") }}>About</button>
                        <button onClick={() => { navigate("/") }}>Contact</button>
                    </div>
                    <div>
                        {!isLoggedIn && <button onClick={() => { navigate("/login")}}>Login</button>}
                        {!isLoggedIn && <button onClick={() => { navigate("/signup") }}>Sign Up</button>}
                        {isLoggedIn && <button onClick={() => { navigate("/");setIsLoggedIn(!isLoggedIn);toast.success("Logget Out") }}>Log Out</button>}
                        {isLoggedIn && <button onClick={() => { navigate("/DashBoard") }}>DashBoard</button>}
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
