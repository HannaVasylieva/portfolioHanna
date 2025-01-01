import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.scss";
import Header from './Components/Header/Header';
import { Home } from './Pages/Home/Home';
import { Projects } from './Pages/Projects/Projects';
import { Contacts } from './Pages/Contacts/Contacts';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/get-in-touch" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
