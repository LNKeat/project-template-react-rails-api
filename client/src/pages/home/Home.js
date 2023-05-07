import React from 'react';
import Campsites from '../../components/campsites/Campsites';

function Home({ camper, campsites }) {
  return (
    <div id="home">
      {
        !camper ? <h1>Please log in or sign up</h1> :
          <div>
            <h1>Welcome {camper.username}!</h1>
            <div className="campsites-wrapper">
              <Campsites campsites={campsites} />
            </div>
          </div>
      }

    </div>
  )
}

export default Home