import React from "react";
import { Link } from "react-router-dom";
import Login from "../users/Login";
import SignUp from "../users/Signup";

function Header({ camper, setCamper }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCamper(null);
      }
    })
  }
  return (
    <header id="header">
      <h1 style={{textAlign:"center"}}>Camp Here</h1>
      <section>
      {camper ? (
        <button onClick={handleLogoutClick}>Logout</button>
      ) : (
        <div id="wrapper">
          <div class="column">
          <Login setCamper={setCamper} />
          </div>
          <div class="column">
          <SignUp setCamper={setCamper} />
          </div>
        </div>
      )}
      </section>
    </header>
  );
}

export default Header;
