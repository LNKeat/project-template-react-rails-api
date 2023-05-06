import React from 'react'

function Home({ camper })  {
return (
  camper ? <h4>Welcome {camper.username}!</h4> : <h4>Please log in or sign up</h4>
)
}

export default Home