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
import ScrollToTop from './components/Extras/ScrollToTop';

function App() {
  return (
    <Router>
    <ScrollToTop>
      <div className="App">
     <Nav/>

     <div className="nonav">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        {/* new path for aboutme and ideas */}
     </Routes>
     </div>
     

     
    </div>
    </ScrollToTop>
    </Router>
    
  );
}

export default App;
