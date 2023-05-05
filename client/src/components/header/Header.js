import React from "react";
import Login from "../users/Login";
import SignUp from "../users/Signup";
import Home from "../../pages/home/Home";

function Header({ camper, setCamper}) {
  function handleLogoutClick(){
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCamper(null);
      }
    })
  }
  return (
    <header>
      <h1>Camp Here</h1>
      {camper ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Home />
            <Login />
            <SignUp />
          </>
        )}
     
    
    </header>
  );
}

export default Header;
