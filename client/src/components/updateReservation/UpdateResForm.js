import React, { useState, useContext, useEffect } from 'react';
import { CamperContext, CampsitesContext } from '../../pages/App';
import { useNavigate } from 'react-router';

function UpdateResForm({ reservation, setReservation, setShowRes, camperReservations, setCamperReservations }) {
    // TO DO: catch & display errors from PUT request for updated reservation
    const camper = useContext(CamperContext)
    const campsites = useContext(CampsitesContext)
    const [startDate, setStartDate] = useState(reservation.start_date)
    const [endDate, setEndDate] = useState(reservation.end_date)
    const [errors, setErrors] = useState([])
    console.log(camperReservations)


    function handleSubmit(event) {
        event.preventDefault();
        const updatedRes = {
            start_date: startDate,
            end_date: endDate
        }
        fetch(`/reservations/${reservation.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(updatedRes)
        }).then((r) => {
            if (r.ok){
                r.json()
                .then((data) => {
                    console.log("data: ", data)
                    setReservation(data)
                    setShowRes(false)
                    const updResList = camperReservations.filter((res) => data.id != res.id)
                    const finalUpdate = [data, ...updResList]
                    setCamperReservations(finalUpdate)
                })
            } else {
                r.json()
                .then((details) => setErrors(details.errors))
            }
        })   
    }

    function findSiteNumber(){
        const campsite = campsites.find((site) => site.id == reservation.campsite_id)
        return campsite.site_number
    }

    return (
        <div>
            <h3>Reservation id: {reservation.id}</h3>
            <h4>Campsite number: {findSiteNumber()}</h4>
            <form onSubmit={handleSubmit}>
                <label>Start Date:
                    <input
                        type="date"
                        value={startDate}
                        onChange={(event) => setStartDate(event.target.value)}
                    />
                </label>
                <label>End Date:
                    <input
                        type="date"
                        value={endDate}
                        onChange={(event) => setEndDate(event.target.value)}
                    />
                </label>
                <button type="submit">Update Dates</button>
            </form>
            <ul style={{color:"red"}}>
                {errors.map((error, ind) => (
                    <li key={ind}>{error}</li>
                ))}
            </ul>


            <br />
            <button onClick={() => setShowRes(false)}>Hide reservation</button>
        </div>
    )
}

export default UpdateResForm