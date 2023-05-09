import React, { useState } from 'react'

function UpdateResForm({ reservation, setShowRes }) {
    const [startDate, setStartDate] = useState(reservation.start_date)
    const [endDate, setEndDate] = useState(reservation.end_date)

    function handleSubmit(event) {
        event.preventDefault();
        console.log("submited")
    }
    return (
        <div>
            <h3>Reservation id: {reservation.id}</h3>
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

            <br />
            <button onClick={() => setShowRes(false)}>Hide reservation</button>
        </div>
    )
}

export default UpdateResForm