import React, { useContext } from 'react';
import Campsites from '../../components/campsites/Campsites';
import { CamperContext } from '../App';

function Home({ campsites }) {
  const camper = useContext(CamperContext)
  console.log(camper)
  return (
    <div id="home">

      {
        !camper ? <h1>Please log in or sign up</h1> :
          <div>
            <h1>Welcome {camper.username}!</h1>
            {camper.is_admin ? <a href="/admin-form">Add or delete a campsite</a> : <></>}
            
            <div className="campsites-wrapper">
              <Campsites campsites={campsites} />
            </div>
          </div>
      }

    </div>
  )
}

export default Home