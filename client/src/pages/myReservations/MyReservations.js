import React, { useState, useContext, useEffect } from 'react'
import { CamperContext, CampsitesContext } from '../App';

function MyReservations() {
  const camper = useContext(CamperContext)
  const campsites = useContext(CampsitesContext)
  const [username, setUsername] = useState("")
  const [camperReservations, setCamperReservations] = useState([])

  useEffect(() => {
    setCamperReservations(camper?.reservations || [])
  }, [camper])

  function find_site_number(res){
    const campsite = campsites?.find((site) => site.id === res.campsite_id)
    return campsite?.site_number
  }

  function handleDeleteClick(res){
    console.log("reservation: ", res, "campsites: ", campsites)
    fetch(`/reservations/${res.id}`, { 
      method: "DELETE" 
    }).then((r) => {
      if (r.ok) {
        const updatedReservations = camper.reservations.filter((r) => r.id !== res.id)
        console.log(updatedReservations)
        setCamperReservations(updatedReservations)

      }
    })
  }

  return (
    <div>
      {console.log("camper: ", camper)}
      {camper && <>
          <h2>Username: {camper.username}</h2>
          <ul>
            {camperReservations.map((res) => (
              <li key={res.id}>Campsite: {find_site_number(res)} , Dates: {res.start_date} - {res.end_date}
              <br />
              <a href=''>Update Reservation</a>
              <br />
              <button onClick={() => handleDeleteClick(res)}>Delete Reservation</button>
              </li>
            ))}
          </ul>
    </>}
    </div>
  )
}

export default MyReservations