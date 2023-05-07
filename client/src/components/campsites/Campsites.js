import React from 'react'
import Campsite from '../campsite/Campsite';

function Campsites({ campsites }) {
  return (
    <div>
      <hr />
    {campsites.map((site) => (
            <Campsite site={site} key={site.id} />
          ))}
</div>
  )
}

export default Campsites