import React, { useState } from "react";

function SignUp({ setCamper }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [reservations, setReservations] = useState([])
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        is_admin: isAdmin,
        reservations
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setCamper(user));
        setUsername("");
      } else {
        r.json().then((details) => setErrors(details.errors))
      }
      setPassword("");
      setPasswordConfirmation("")
    });
    
  }

  return (
    <div style={{width:"200px"}}>
      <form onSubmit={handleSubmit}>
        <h4>Sign Up</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">Sign Up</button>
      </form>
      <ul>
        {errors.map((error, ind) => (
          <li key={ind}>{error}</li>
        ) )}
      </ul>
    </div>
  );
}

export default SignUp;