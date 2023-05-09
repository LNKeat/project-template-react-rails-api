import React, { useState, useContext } from 'react'
import { CamperContext } from '../App'

function MyReservations({ campsites }) {
  const [username, setUsername] = useState("")
  const camper = useContext(CamperContext)
  camper && console.log(camper.reservations)
  console.log("campsites: ", campsites)

  function find_site_number(res){
    const campsite = campsites.find((site) => site.id === res.campsite_id)
    return campsite.site_number
  }
    
    

  return (
    <div>
      {camper && <>
          <h2>Username: {camper.username}</h2>
          <ul>
            {camper.reservations.map((res) => (
              <li key={res.id}>Campsite: {find_site_number(res)}, Dates: {res.start_date} - {res.end_date}</li>
            ))}
          </ul>
    </>}
    </div>
  )
}

export default MyReservations