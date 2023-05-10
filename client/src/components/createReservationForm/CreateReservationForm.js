import React, { useContext, useState } from 'react'
import { CamperContext } from '../../pages/App';

function CreateReservationForm({ site, setViewSite }) {
    const camper = useContext(CamperContext)
    const [startDate, setStartDate] = useState("2023-05-24")
    const [endDate, setEndDate] = useState("2023-05-24")
    const [errors, setErrors] = useState([])


    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault()
        const newRes = {
            camper_id: camper.id,
            campsite_id: site.id,
            start_date: startDate,
            end_date: endDate
        }
        fetch('/reservations/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRes)
        })
            .then((r) => {
                if (r.ok) {
                    console.log('res success')
                } else {
                    r.json().then((details) => setErrors(details.errors))
                }
            })
    }
    return (
        <div>
            <button onClick={() => setViewSite(false)}>View all campsites</button>
            <h2>Single campsite view for site number: {site.site_number}</h2>
            <p>{site.description}</p>
            <img style={{ width: '200px' }} src={site.img_url} />
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="date-input">Select a start date:</label>
                <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={handleStartDateChange}
                />
                <br />
                <label htmlFor="date-input">Select an end date:</label>
                <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={handleEndDateChange}
                />
                <button type="submit">Submit</button>
            </form>
            <ul style={{ color: "red" }}>
                {errors.map((error, ind) => (
                    <li key={ind}>{error}</li>
                ))}
            </ul>
        </div>
    )
}

export default CreateReservationForm