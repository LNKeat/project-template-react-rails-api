import React, { useState, useContext, useEffect } from 'react'
import { CamperContext, CampsitesContext } from '../App';
import UpdateResForm from '../../components/updateReservation/UpdateResForm';

function MyReservations() {
  const camper = useContext(CamperContext)
  const campsites = useContext(CampsitesContext)
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
        const updated = camper.reservations.filter((ele) => ele.id != res.id)
        setCamperReservations(updated)      
      }
    })
  }

  return (
    <div>
      {camper && <>
        <h2>Username: {camper.username}</h2>
        {/* shows reservation to be updated */}
        {showRes && <UpdateResForm reservation={reservation} setReservation={setReservation} setShowRes={setShowRes} camperReservations={camperReservations} setCamperReservations={setCamperReservations} />}
        <hr />
      {/* list of camper's reservations */}
      {camperReservations != 0 ? 
          <ul>
            {camperReservations.map((res) => (
              <li key={res.id} style={{padding:"15px"}}>Campsite number: {find_site_number(res)}, Dates: {res.start_date} - {res.end_date}
              <br />
              <button onClick={() => handleUpdateClick(res)}>Update Reservation</button>
              <button onClick={() => handleDeleteClick(res)}>Delete Reservation</button>
              </li>
            )) 
          }
          </ul> : 
          <h2>No reservations to display</h2>}
    </>}
    </div>
  )
}

export default MyReservations