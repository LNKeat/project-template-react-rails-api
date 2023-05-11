import React from 'react'

function Campsite({ site, setSelectedSite, selectedSite, setViewSite }) {
  function handleRequestClick(){
    setSelectedSite(site)
    setViewSite(true)
  }

  return (
    <div className='site-wrapper' key={site.id}>
        <h1>Campsite Number: {site.site_number}</h1>
        <p>{site.description}</p>
        <img style={{ width: '200px' }} src={site.img_url} />
        <br />
        <button onClick={handleRequestClick}>Request Reservation</button>
        <br />
        <br />
        <hr />
    </div>
  )
}

export default Campsite