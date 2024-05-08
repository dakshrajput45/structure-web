import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm"

function Template({title,desc1,desc2,im,formtype,setIsLoggedIn}) {

    return (
        <div>
            <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formtype==='login' ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div>
                    <p>OR</p>
                </div>
            </div>
            <button><p>Sign Up with Google</p></button>
            </div>
            <div>
                <img src={im} alt="img" loading="lazy"/>
            </div>
        </div>
    );
}

export default Template;