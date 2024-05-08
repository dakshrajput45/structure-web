import { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const[showPassword,setShowPassword]=useState(false);
    function changeHandler(event) {
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value 
            }
        ))
    }

    function submitHandler (event){
        event.preventDefault();
        navigate("/Dashboard");
    }
    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email id" />
            </label>
            <label>
                <p>
                    Password<sup>*</sup>
                </p>
                <input
                    required
                    name="password"
                    type={showPassword?("text"):("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Password" />

                <span onClick={()=>{setShowPassword(!showPassword)}}>
                    {showPassword ? (<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                </span>

                <p>Forget Password</p>
                <button>Sign In</button>
            </label>
        </form>
    );
}

export default Login;