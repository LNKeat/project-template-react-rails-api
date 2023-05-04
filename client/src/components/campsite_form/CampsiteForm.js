import { useState } from 'react'

const initialState = {
    campsiteNumber: 0,
    imgUrl: "",
    description: "",
    reservations: []
};

function CampsiteForm({ campsites }) {
    const [formData, setFormData] = useState(initialState);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    function handleSubmit(e) {
        debugger
        e.preventDefault();
        fetch("/campsites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((newSite) => {
                setFormData(initialState);
                // onAddCampsite(newCampsite);
            });
    }

    return (
        <div className="card">
            <h2>New Campsite</h2>
            <h3>Admin's Only</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="campsiteNumber">Campsite Number: </label>
                <input
                    type="number"
                    id="campsiteNumber"
                    value={formData.campsiteNumber}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="imgUrl">Image URL: </label>
                <input
                    type="url"
                    id="imgUrl"
                    value={formData.imgUrl}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="description">Description: </label>
                <textarea
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default CampsiteForm