import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import DashBoard from "./Pages/DashBoard";
import NavBar from "./Components/NavBar";
import { useState } from "react";


function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="App">
      <div>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/DashBoard" element={<DashBoard/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
