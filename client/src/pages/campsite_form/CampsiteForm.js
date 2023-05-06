import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    site_number: 0,
    d_site_number: 0,
    img_url: "",
    description: "",
    reservations: []
};

function CampsiteForm({ campsites, setCampsites }) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState);
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newData = {
            description: formData.description,
            img_url: formData.img_url,
            reservations: [],
            site_number: formData.site_number
        }
        
        fetch("/campsites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
        })
            .then((r) => r.json())
            .then((newSite) => {
                setFormData(initialState);
                const updatedCampsites = [...campsites, newSite]
                setCampsites(updatedCampsites);
            });
            navigate("/campsites")

    }

    function handleDelete (e) {
        e.preventDefault();
        const campsite = campsites.filter(site => site.site_number == formData.d_site_number);
        const site_id = campsite[0].id       
        fetch(`/campsites/${site_id}`, {
            method: "DELETE", 
        })
            .then((r) => {
                setFormData(initialState);
                const updatedCampsites = campsites.filter(site => site.site_number != formData.d_site_number)
                setCampsites(updatedCampsites)
            });
            navigate("/campsites")
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
                <br />
                <button type="submit">Submit</button>
            </form>

            <h3>Delete Campsite</h3>

            {/* delete campsite */}

            <form onSubmit={handleDelete}>
                <label htmlFor="d_site_number">Campsite Number: </label>
                <input
                    type="number"
                    id="d_site_number"
                    value={formData.d_site_number}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Delete</button>
            </form>

        </div>
    )
}

export default CampsiteForm