import React from 'react';
import '../stylesheets/Nav.css';
import '../stylesheets/Project.css';
import {useNavigate} from 'react-router-dom';
import Fade from 'react-reveal/Fade';


function Projects() {

    return (
        <div >
        <div className="outerprojectss">
        <img src="/assets/projectsection.png"></img>
        </div>
        <Fade>
        <div className="work">
                <div id="hover-action" className="projects">
                    <div  className="project">
                        <a href="https://sentimiento.herokuapp.com/" target="_blank"><img width="100%" src="/assets/sentimiento.png" alt="What has happened"></img></a>
                        <p className="">Uses twitter api to do sentimental analysis on tweets using NLP.</p>
                        <a href="https://sentimiento.herokuapp.com/" target="_blank" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a href="https://github.com/anmolbhardwaj17/gamepoint" target="_blank"><img width="100%" src="/assets/gamepoint1.png" alt="What has happened"></img></a>
                        <p className="">Betting portal for console gamers</p>
                        <a href="https://github.com/anmolbhardwaj17/gamepoint" target="_blank" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a href="https://tickets-meta.com/" target="_blank"><img width="100%" src="/assets/tickets.png" alt="Tickets NFT"></img></a>
                        <p className="">Travel based NFT collection</p>
                        <a href="https://tickets-meta.com/" target="_blank" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a href="https://medium.com/@anmolbhardwaj17/how-to-run-scheduled-jobs-for-free-b7767e95522c" target="_blank"><img width="100%" src="/assets/auto-tweet.png" alt="What has happened"></img></a>
                        <p className="">Twitter bot for free</p>
                        <a href="https://medium.com/@anmolbhardwaj17/how-to-run-scheduled-jobs-for-free-b7767e95522c" target="_blank" className="grey bold seemore">See more</a>
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
            </Fade>
            <div className="github-button">
            <a className="github-proj" href="https://github.com/anmolbhardwaj17" target="_blank"> <button id="more-projects" className="more-proj">Check out my Github</button></a>
            </div>
            
        </div>
    )
}

export default Projects