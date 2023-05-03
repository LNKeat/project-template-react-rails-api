// import './App.css';
import Header from '../components/header/Header';
import Campsites from '../components/campsites/Campsites';
import { useState, useEffect } from 'react';

function App() {
  const [campsites, setCampsites] = useState([])

  useEffect(() => {
    fetch("/campsites")
      .then((r) => r.json())
      .then(setCampsites);
  }, []);

  return (
    <div className="App">
      <Header />
      <Campsites campsites={campsites}  />
    </div>
  );
}

export default App;
