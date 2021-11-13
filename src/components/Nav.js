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
            <h3 className="logo" onClick={toHome}>ANMOL BHARDWAJ</h3>

            <a onClick={toProjects}>Projects</a>

            
        </nav>
    )
}

export default Nav
