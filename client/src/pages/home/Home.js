import React from 'react'

function Home({ camper }) {
  return (
    <>
    put this into a fxn
    {/* {
    if (camper) {
      <p>Is camper</p>
    } else {
      <p>No  camper</p>
    }
    } */}


      {
      !camper ? <h4>Please log in or sign up</h4> : 
      <h4>Welcome !</h4>
      // <p>TEST</p>
      }

    </>
  )
}

export default Home