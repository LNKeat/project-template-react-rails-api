import React from 'react'

function Logout() {
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => console.log("logged out"));
    }

    return (
        <header>
            <button onClick={handleLogout}>Logout</button>
        </header>
    );
}

export default Logout