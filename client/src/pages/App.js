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
      if (response <= 300) {
        response.json().then((user) => setCamper(user));
      }
    });
  }, []);



  return (
    <div className="App">
      <Header camper={camper} setCamper={setCamper} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home camper={camper} campsites={campsites} />} />
          <Route path="/admin-form" element={<AdminForm campsites={campsites} setCampsites={setCampsites} camper={camper} />} />
        </Routes>
      </BrowserRouter>
      



    </div>
  );
}

export default App;
