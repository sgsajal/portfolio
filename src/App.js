import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';
import AboutMe from './components/AboutMe.js';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/projects" element={<Projects />}>
          </Route>
          <Route path="/About" element={<AboutMe />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
