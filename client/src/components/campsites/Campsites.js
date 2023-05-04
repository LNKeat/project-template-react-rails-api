import React from 'react'
import Campsite from '../campsite/Campsite';

function Campsites({ campsites }) {
    console.log(campsites)
  return (
    <div  className="App">
    {campsites.map((site) => (
            <Campsite site={site} key={site.id} />
          ))}
</div>
  )
}

export default Campsites