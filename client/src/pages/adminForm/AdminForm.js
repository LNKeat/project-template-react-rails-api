import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CamperContext } from '../App';

// To do: fix initital state on deleteSite to equal the site number of the first site
function AdminForm({ campsites, setCampsites }) {
    const camper = useContext(CamperContext)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        description: "",
        img_url: "",
        reservations: [],
        site_number: 0,
    });
    const [deleteSite, setDeleteSite] = useState(1)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch("/admin-form")
            .then((r) => r.json())
            .then((data) => {
                console.log(data)
                const next_num = data.next_number
                const first_num = data.first_site
                const spreadData = {...formData, site_number: next_num  }
                setFormData(spreadData)
                setDeleteSite(first_num)
            })
    }, [])


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

        fetch("/admin-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((newSite) => {
                        const updatedCampsites = [...campsites, newSite]
                        setCampsites(updatedCampsites);
                        navigate("/")
                    });
                } else {
                    r.json().then((details) => setErrors(details.errors))
                }
            })
    }
    function handleDelete(e) {
        e.preventDefault();
        const campsite = campsites.find((site) => site.site_number == deleteSite);
        console.log("id: ", campsite)
        fetch(`/admin-form/${campsite.id}`, {
            method: "DELETE",
        })
            .then((r) => {
                const updatedCampsites = campsites.filter(site => site.site_number != deleteSite)
                setCampsites(updatedCampsites)
            });
        navigate("/")
    }

    return (
        <div className="card">
            {!camper ?
                <div>
                    <h2>Not authorized</h2>
                    <a href="/">View campsites</a>
                </div> : (
                    <div>
                        <hr />
                        <h1>Admin's Only</h1>
                        <a href="/">View campsites</a>
                        {camper.is_admin ? (<div>
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
                            <ul style={{ color: "red" }}>
                                {errors.map((error, ind) => (
                                    <li key={ind}>{error}</li>
                                ))}
                            </ul>

                            <h3>Delete Campsite</h3>

                            {/* delete campsite */}

                            <form onSubmit={handleDelete}>
                                <select onChange={(e) => setDeleteSite(e.target.value)
                                }>
                                    {campsites.map((site) => (
                                        <option key={site.id} id={site.site_number} value={site.site_number}>{site.site_number}</option>
                                    ))}
                                </select>
                                
                                <br />
                                <button type="submit">Delete</button>
                            </form>
                        </div>) : <></>}
                    </div>)}
        </div>
    )
}

export default AdminForm