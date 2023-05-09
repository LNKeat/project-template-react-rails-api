import React, { useState, useContext, useEffect } from 'react'
import { CamperContext, CampsitesContext } from '../App';
import UpdateResForm from '../../components/updateReservation/UpdateResForm';

function MyReservations() {
  const camper = useContext(CamperContext)
  const campsites = useContext(CampsitesContext)
  const [username, setUsername] = useState("")
  const [camperReservations, setCamperReservations] = useState([])
  const [showRes, setShowRes] = useState(false)
  const [reservation, setReservation] = useState({})

  useEffect(() => {
    setCamperReservations(camper?.reservations || [])
  }, [camper])

  function find_site_number(res){
    const campsite = campsites?.find((site) => site.id === res.campsite_id)
    return campsite?.site_number
  }

  function handleUpdateClick(res){
    setShowRes(true)
    setReservation(res)
  }

  function handleDeleteClick(res){
    fetch(`/reservations/${res.id}`, { 
      method: "DELETE" 
    }).then((r) => {
      if (r.ok) {
        const updatedReservations = camper.reservations.filter((r) => r.id !== res.id)
        setCamperReservations(updatedReservations)

      }
    })
  }

  return (
    <div>
      {camper && <>
        <h2>Username: {camper.username}</h2>
        {/* shows reservation to be updated */}
        {showRes && <UpdateResForm reservation={reservation} setShowRes={setShowRes} />}
        <hr />
      {/* list of camper's reservations */}
          <ul>
            {camperReservations.map((res) => (
              <li key={res.id} style={{padding:"15px"}}>Campsite: {find_site_number(res)} , Dates: {res.start_date} - {res.end_date}
              <br />
              <button onClick={() => handleUpdateClick(res)}>Update Reservation</button>
              <button onClick={() => handleDeleteClick(res)}>Delete Reservation</button>
              </li>
            ))}
          </ul>
    </>}
    </div>
  )
}

export default MyReservations