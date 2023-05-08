import React, { useState } from "react";

function Login({ setCamper }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setCamper(user));
        
        setErrors([])
      } else {
        r.json().then((details) => setErrors(details.errors))
      }
      setUsername("")
      setPassword("")
    });
  
  }

  return (
    <div style={{width:"200px"}}>
      <form onSubmit={handleSubmit}>
        <h4>Login</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username1"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password1"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <ul>
        {errors.map((error, ind) => (
          <li key={ind}>{error}</li>
        ) )}
      </ul>
    </div>
  );
}

export default Login;