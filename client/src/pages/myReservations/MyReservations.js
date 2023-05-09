import React, { useState, useContext } from 'react'
import { CamperContext, CampsitesContext } from '../App';

function MyReservations() {
  const [username, setUsername] = useState("")
  const camper = useContext(CamperContext)
  const campsites = useContext(CampsitesContext)
    
  console.log("campsites: ", campsites, "me: ", camper)

  function find_site_number(res){
    const campsite = campsites?.find((site) => site.id === res.campsite_id)
    return campsite?.site_number
  }

  return (
    <div>
      {camper && <>
          <h2>Username: {camper.username}</h2>
          <ul>
            {camper.reservations.map((res) => (
              <li key={res.id}>Campsite: {find_site_number(res)} , Dates: {res.start_date} - {res.end_date}</li>
            ))}
          </ul>
    </>}
    </div>
  )
}

export default MyReservations