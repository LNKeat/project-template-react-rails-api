import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import AdminForm from './adminForm/AdminForm';
import MyReservations from './myReservations/MyReservations';

export const CamperContext = React.createContext();

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
      <BrowserRouter>
      <CamperContext.Provider value={camper}>
      <Header camper={camper} setCamper={setCamper} />
        <Routes>
          <Route path="/" element={<Home campsites={campsites} />} />
          <Route path="/admin-form" element={<AdminForm campsites={campsites} setCampsites={setCampsites} />} />
          <Route path="/my-reservations" element={<MyReservations />} />
        </Routes>
        </CamperContext.Provider>
      </BrowserRouter>
      



    </div>
  );
}

export default App;
