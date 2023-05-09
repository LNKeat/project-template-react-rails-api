import React, { useState, useContext } from 'react'
import { CamperContext } from '../App'

function MyReservations() {
  const [username, setUsername] = useState("")
  const camper = useContext(CamperContext)
  console.log(camper)
    
    

  return (
    <div>
        <h1>This is me:</h1>
        <br />
        <ul>
          <li>{camper?.username}</li>
        </ul>
    </div>
  )
}

export default MyReservations