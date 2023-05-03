import React from 'react'

function campsites({ campsites }) {
    console.log(campsites)
  return (
    <div  className="App">
    <li>Site 1</li>
    <li>Site 2</li>
    <li>Site 3</li>
    <li>Site 4</li>
    {/* {campsites.map((spice) => (
            <SpiceItem
              key={spice.id}
              spice={spice}
              onUpdateSpice={handleUpdateSpice}
              onDeleteSpice={handleDeleteSpice}
            />
          ))} */}
</div>
  )
}

export default campsites