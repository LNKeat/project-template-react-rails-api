import React, { useState, useContext } from 'react'
import Campsite from '../campsite/Campsite';
import { CampsitesContext } from '../../pages/App';
import CreateReservationForm from '../createReservationForm/CreateReservationForm';

function Campsites() {
  const [viewSite, setViewSite] = useState(false)
  const [selectedSite, setSelectedSite] = useState({})
  const campsites = useContext(CampsitesContext)
  return (
    <div>
      <hr />
    {!viewSite ? campsites.map((site) => (
            <Campsite site={site} key={site.id} setViewSite={setViewSite} setSelectedSite={setSelectedSite} selectedSite={selectedSite} />
          )) : <CreateReservationForm site={selectedSite} setViewSite={setViewSite} /> 
          }
</div>
  )
}

export default Campsites