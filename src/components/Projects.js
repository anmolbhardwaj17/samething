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
                        <a href="https://tickets-meta.com/" target="_blank"><img width="100%" src="/assets/tickets.png" alt="Tickets NFT"></img></a>
                        <p className="">Travel based NFT collection</p>
                        <a href="https://tickets-meta.com/" target="_blank" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a href="https://www.notion.so/Auto-Tweet-d420312bbcfa4b84b1d177b42edd6ba0" target="_blank"><img width="100%" src="/assets/auto-tweet.png" alt="What has happened"></img></a>
                        <p className="">Twitter bot for free</p>
                        <a href="https://www.notion.so/Auto-Tweet-d420312bbcfa4b84b1d177b42edd6ba0" target="_blank" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a target="_blank" href="https://github.com/anmolbhardwaj17/Girvan-Newman-Algorithm-Visualizer"><img width="100%" src="/assets/girvan newman.png" alt="Girvan newman"></img></a>
                        <p className="">Easy way to visualize and understand communities.</p>
                        <a target="_blank" href="https://github.com/anmolbhardwaj17/Girvan-Newman-Algorithm-Visualizer" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a href="https://crypto-stats-ab.herokuapp.com/" target="_blank"><img width="100%" src="/assets/crypto stats.png" alt="What has happened"></img></a>
                        <p className="">Get crypto data on the go</p>
                        <a href="https://crypto-stats-ab.herokuapp.com/" target="_blank" className="grey bold seemore">See more</a>
                    </div>


                    
                    
                </div>

            </div>
            
        </div>
    )
}

export default Projects