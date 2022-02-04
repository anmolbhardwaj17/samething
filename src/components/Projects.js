import React from 'react';
import '../stylesheets/Nav.css';
import '../stylesheets/Project.css';
import {useNavigate} from 'react-router-dom';


function Projects() {

    return (
        <div >
        <div className="outerprojectss">
        <img src="/assets/projectsection.png"></img>
        </div>
        <div className="work">
                <div className="projects">
                    <div className="project">
                        <a href="https://sentimiento.herokuapp.com/" target="_blank"><img width="100%" src="/assets/sentimiento.png" alt="What has happened"></img></a>
                        <p className="">Uses twitter api to do sentimental analysis on tweets using NLP.</p>
                        <a href="https://sentimiento.herokuapp.com/" target="_blank" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a href="https://crypto-stats-ab.herokuapp.com/" target="_blank"><img width="100%" src="/assets/crypto stats.png" alt="What has happened"></img></a>
                        <p className="">Get crypto data on the go</p>
                        <a href="https://crypto-stats-ab.herokuapp.com/" target="_blank" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a target="_blank" href="https://github.com/anmolbhardwaj17/Girvan-Newman-Algorithm-Visualizer"><img width="100%" src="/assets/girvan newman.png" alt="Girvan newman"></img></a>
                        <p className="">Easy way to visualize and understand communities.</p>
                        <a target="_blank" href="https://github.com/anmolbhardwaj17/Girvan-Newman-Algorithm-Visualizer" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a href="" target="_blank"><img width="100%" src="/assets/filler.png" alt="What has happened"></img></a>
                        <p className="">This is a filler</p>
                        <a href="" target="_blank" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a href="" target="_blank"><img width="100%" src="/assets/filler.png" alt="What has happened"></img></a>
                        <p className="">This is a filler</p>
                        <a href="" target="_blank" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a href="" target="_blank"><img width="100%" src="/assets/filler.png" alt="What has happened"></img></a>
                        <p className="">This is a filler</p>
                        <a href="" target="_blank" className="grey bold seemore">See more</a>
                    </div>
                    
                    
                </div>
                {/* <a id="more-projects" className="more-proj" onClick={toProjects}>More projects</a> */}

            </div>
            
        </div>
    )
}

export default Projects