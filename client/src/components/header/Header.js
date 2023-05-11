import React from "react";
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
        <div style={{textAlign:"center"}}>
          <a href="/"><button>Campsites</button></a>
          <button onClick={handleLogoutClick}>Logout</button>
          <a href="/my-reservations"><button>My Reservations</button></a>
        </div>
      ) : (
        <div id="wrapper">
          <div className="column">
          <Login setCamper={setCamper} />
          </div>
          <div className="column">
          <SignUp setCamper={setCamper} />
          </div>
        </div>
      )}
      </section>
    </header>
  );
}

export default Header;
