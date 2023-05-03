import React from 'react'

function Campsite({ site }) {
  return (
    <div className='single-site'>
        <h1>Campsite Number: {site.site_number}</h1>
        <p>{site.description}</p>
        <img style={{ width: '200px' }} src={site.img_url} />
    </div>
  )
}

export default Campsite