import React from 'react'

function Campsite({ site }) {
  return (
    <div className='site-wrapper' key={site.id}>
        <h1>Campsite Number: {site.site_number}</h1>
        <p>{site.description}</p>
        <img style={{ width: '200px' }} src={site.img_url} />
        <br />
        <button>Request Reservation</button>
    </div>
  )
}

export default Campsite