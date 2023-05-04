// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../pages/home/Home';
import Header from '../components/header/Header';
import Campsites from '../components/campsites/Campsites';
import CampsiteForm from '../components/campsite_form/CampsiteForm';

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
      <Home />
      <Campsites campsites={campsites} />
      <CampsiteForm campsites={campsites} />

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
