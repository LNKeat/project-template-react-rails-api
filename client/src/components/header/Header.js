import React from "react";
import { Link } from "react-router-dom";
import Login from "../users/Login";
import SignUp from "../users/Signup";

function Header({ camper, setCamper }) {
  console.log("camper: ", camper)
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
      <section>
      {camper ? (
        <button onClick={handleLogoutClick}>Logout</button>
      ) : (
        <div id="wrapper">
          <Login setCamper={setCamper} />
          <SignUp setCamper={setCamper} />
        </div>
      )}
      </section>
    </header>
  );
}

export default Header;
