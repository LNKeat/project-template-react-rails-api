import React from 'react'

function campsites({ campsites }) {
    console.log(campsites)
  return (
    <div  className="App">
    {campsites.map((site) => (
            <li key={site.id}
            site={site}>
            Campsite: {site.site_number}- {site.description}
             </li>
          ))}
</div>
  )
}

export default campsites