import Template from "../Components/Template";
import daksh from "../Components/daksh.jpg"

function LogIn({setIsLoggedIn}) {
    return (
      <div className="LogIn">
        <div>
          <Template
          title={"Welcome Back"}
          desc1={"join the Millions learning to code"}
          desc2="Education to future-proof your Career"
          im={daksh}
          formtype="signup"
          setIsLoggedIn={setIsLoggedIn}
          />
        </div>
      </div>
    );
  }
  
export default LogIn;
  