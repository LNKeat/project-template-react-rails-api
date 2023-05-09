import React, { useContext } from 'react'
import Campsite from '../campsite/Campsite';
import { CampsitesContext } from '../../pages/App';

function Campsites() {
  const campsites = useContext(CampsitesContext)
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