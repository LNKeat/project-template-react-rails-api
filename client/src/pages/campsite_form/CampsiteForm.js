import { useState } from 'react'

const initialState = {
    site_number: 0,
    img_url: "",
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
        console.log(formData)
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
                console.log(newSite);
            });
    }

    function handleDelete (e) {
        console.log(formData)
        e.preventDefault();
        console.log(e)
        // fetch(`/campsites/${}`, {
        //     method: "DELETE"
        // })
        //     .then((r) => r.json())
        //     .then((newSite) => {
        //         setFormData(initialState);
        //         console.log(newSite);
        //     });
    }

    return (
        <div className="card">
            <h1>Admin's Only</h1>
            <h3>New Campsite</h3>

            {/* create campsite */}

            <form onSubmit={handleSubmit}>
                <label htmlFor="site_number">Campsite Number: </label>
                <input
                    type="number"
                    id="site_number"
                    value={formData.site_number}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="img_url">Image URL: </label>
                <input
                    type="url"
                    id="img_url"
                    value={formData.img_url}
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

            <h3>Delete Campsite</h3>

            {/* delete campsite */}

            <form onSubmit={handleDelete}>
                <label htmlFor="site_number">Campsite Number: </label>
                <input
                    type="number"
                    id="site_number2"
                    value={formData.site_number}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Delete</button>
            </form>

        </div>
    )
}

export default CampsiteForm