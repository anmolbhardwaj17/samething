import React from 'react';
import '../stylesheets/Nav.css';
import {useNavigate} from 'react-router-dom';


function Nav() {

    const navigate = useNavigate();
    
  
    const toHome = () =>{ 
        navigate('/')
    }

    const toProjects = () =>{ 
        navigate('/projects')
    }

    return (
        <nav>
            <div className="navinner">
            <h3 className="logo" onClick={toHome}>ANMOL BHARDWAJ</h3>
            <div className="top-right">
            <a target="_blank" href="https://github.com/anmolbhardwaj17">Github</a>
            <a onClick={toProjects}>Projects</a>
            </div>
            </div>

            

            
        </nav>
    )
}

export default Nav
