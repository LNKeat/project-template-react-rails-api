// import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Campsites from '../components/campsites/Campsites';
import CampsiteForm from '../pages/campsite_form/CampsiteForm';


function App() {
  const [camper, setCamper] = useState(null)
  const [campsites, setCampsites] = useState([])


  useEffect(() => {
    fetch("/campsites")
      .then((r) => r.json())
      .then((data) => {
        setCampsites(data);
      })
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setCamper(user));
        }
      });
  }, []);

  

  return (
    <div className="App">
      <Header camper={camper} setCamper={setCamper} />
      <Campsites campsites={campsites} />
      <CampsiteForm campsites={campsites} setCampsites={setCampsites} />
     

      {/* <BrowserRouter>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/campsites">
           <Campsites campsites={campsites} />
          </Route>
        </Switch>

      </BrowserRouter> */}
    </div>
  );
}

export default App;
