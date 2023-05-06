import React from "react";
import { Link } from "react-router-dom";
import Login from "../users/Login";
import SignUp from "../users/Signup";
import Logout from "../users/Logout";
import Home from "../../pages/home/Home";

function Header({ camper, setCamper }) {
  console.log(camper: ", camper)
  function handleLogoutClick() {
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
          
         
          <Login setCamper={setCamper} />
          <SignUp setCamper={setCamper} />
          <Logout />
          <nav>
            <Link to="me">My Profile</Link>
          </nav>

          {/* <Routes>
            <Route path=":id" element={<UserProfile />} />
            <Route path="me" element={<OwnUserProfile />} />
          </Routes> */}
        </>
      )}


    </header>
  );
}

export default Header;
