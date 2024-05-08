import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from "react-hot-toast"

function SignupForm({setIsLoggedIn}) {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        firstname: "", lastname: "", email: "", password: "", confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!==formData.confirmPassword)
            {
                toast.error("Password DO Mot Match")
            }
        setIsLoggedIn(true);
        toast.success("Account Created")
        const accountData ={
            ...formData
        };
        console.log(accountData)
        navigate("/Dashboard");
    }
    return (
        <div>
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            placeholder="Enter first Name"
                            value={formData.firstname} />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            placeholder="Enter last Name"
                            value={formData.lastname} />
                    </label>
                </div>
                <div>
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
                            Create Password<sup>*</sup>
                        </p>
                        <input
                            required
                            name="password"
                            type={showPassword ? ("text") : ("password")}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter Password" />

                        <span onClick={() => { setShowPassword(!showPassword) }}>
                            {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                        </span>
                    </label>
                    <label>
                        <p>
                            Confirm Password<sup>*</sup>
                        </p>
                        <input
                            required
                            name="confirmPassword"
                            type={showPassword ? ("text") : ("password")}
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            placeholder="Confirm Password" />

                        <span onClick={() => { setShowPassword(!showPassword) }}>
                            {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                        </span>
                    </label>
                    <button>Create Account</button>
                </div>
            </form> 
        </div>
    );
}
export default SignupForm