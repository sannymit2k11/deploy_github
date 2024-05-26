import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoPage from './components/NoPage';
import {BrowserRouter as Router,Routes, Route, Switch } from "react-router-dom"

function App() {
	
	
  
  return ( 
   <>
   <Router> 
      <Navbar />
	  <Routes> 
		  <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
  </Router>
  </>
  );
}



export default App;
