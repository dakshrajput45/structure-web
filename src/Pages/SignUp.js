import Template from "../Components/Template";
import daksh from "../Components/daksh.jpg"
function SignUp({setIsLoggedIn}) {
    return (
      <div className="SignUp">
        <div>
        <Template
          title={"Welcome Back"}
          desc1={"join the Millions learning to code"}
          desc2="Education to future-proof your Career"
          im={daksh}
          formtype="login"
          setIsLoggedIn={setIsLoggedIn}
          />
        </div>
      </div>
    );
  }
  
export default SignUp;
  