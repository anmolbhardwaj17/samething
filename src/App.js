import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home';
import Projects from './components/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
     <Nav/>

     <div className="nonav">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        {/* new path for aboutme */}
     </Routes>
     </div>
     

     
    </div>
    </Router>
    
  );
}

export default App;
