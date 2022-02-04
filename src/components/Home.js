import {React, useState, useEffect} from 'react';
import '../stylesheets/Home.css';
import {useNavigate} from 'react-router-dom';

function Home() {
    const placeholderText = ["Anmol Bhardwaj", "अनमोल भारद्वाज", "안몰 바르드와즈"];
  const [state, setState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setState((s) => (s + 1));
    }, 2000);
  }, []);

  const placeholder = placeholderText[state % placeholderText.length];

  const navigate = useNavigate();
    
  
    const toProjects = () =>{ 
        navigate('/projects')
    }

    return (
        <div>
            <div className="first outer">
                <div className="middle">
                    <h1>Hi! I'm</h1>
                    <img className="main-intro" src="/assets/main.png" alt="Samsung logo"></img> 
                    <div className="tag">
                    <h3 className="grey bold">Software Developer and Blockchain enthusiast.</h3>
                    <div className="socials">
                    <a className="social-icon" target="_blank" href="https://www.linkedin.com/in/anmolbhardwaj/"><i class="bi bi-linkedin"></i></a>
                        <a className="social-icon" target="_blank" href="https://www.behance.net/anmolbhardwaj"><i class="bi bi-behance"></i></a>
                        <a className="social-icon" target="_blank" href="https://medium.com/@anmolbhardwaj17"><i class="bi bi-medium"></i></a>
                        <a className="social-icon" target="_blank" href="https://github.com/anmolbhardwaj17"><i class="bi bi-github"></i></a>
                        <a className="social-icon" target="_blank" href="https://twitter.com/anmolbhardwajj"><i class="bi bi-twitter"></i></a>              
                    </div>
                    </div>
                </div>  
                
            </div> 
            <div className="experience">
                <h1>Experience</h1>
                <p className="grey context">Here are some of my past experiences</p>
                <div className="jobs">
                    <div className="job">
                        <div className="comp-img">
                            <img width="56px" src="/assets/samsung.svg" alt="Samsung logo"></img>
                        </div>
                        <div className="comp-about">
                            <h3 className="comp-name">Samsung R&D</h3>
                            <p className="comp-position">Research & Development Intern</p>
                            <p className="date grey">Nov 2021 - Present</p>
                        </div>
                    </div>
                    <div className="job">
                        <div className="comp-img">
                            <img width="56px" src="/assets/gamepoint.svg" alt="Gamepoint logo"></img>
                        </div>
                        <div className="comp-about">
                            <h3 className="comp-name">Gamepoint</h3>
                            <p className="comp-position">Web Development Intern</p>
                            <p className="date grey">Sep 2021 - Nov-2021</p>
                        </div>
                    </div>
                    <div className="job">
                        <div className="comp-img">
                            <img width="56px" src="/assets/acmvit.svg" alt="acmvit logo"></img>
                        </div>
                        <div className="comp-about">
                            <h3 className="comp-name">ACM-VIT</h3>
                            <p className="comp-position">Project Guide</p>
                            <p className="date grey">Apr 2021 - Present</p>
                        </div>
                    </div>
                    <div className="job">
                        <div className="comp-img">
                            <img width="56px" src="/assets/tedx.svg" alt="tedx logo"></img>
                        </div>
                        <div className="comp-about">
                            <h3 className="comp-name">TEDxVITVellore</h3>
                            <p className="comp-position">Director of Tech</p>
                            <p className="date grey">Jan 2022 - Present</p>
                        </div>
                    </div>
                    <div className="job">
                        <div className="comp-img">
                            <img width="56px" src="/assets/safeouts.svg" alt="safeouts logo"></img>
                        </div>
                        <div className="comp-about">
                            <h3 className="comp-name">Safeouts</h3>
                            <p className="comp-position">Web Development Intern</p>
                            <p className="date grey">Nov 2020 - Jan 2021</p>
                        </div>
                    </div>
                    <div className="job">
                        <div className="comp-img">
                            <img width="56px" src="/assets/alfaleus.svg" alt="alfaleus logo"></img>
                        </div>
                        <div className="comp-about">
                            <h3 className="comp-name">Alfaleus Tech</h3>
                            <p className="comp-position">Backend Unity Developer</p>
                            <p className="date grey">Jan 2020 - Mar 2020</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="work">
                <h1>Projects</h1>
                <p className="grey context">Here are some of my projects</p> 
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
                    {/* <div className="project">
                        <a href="https://what-has-happened.web.app/" target="_blank"><img width="100%" src="/assets/what-has-happened.png" alt="What has happened"></img></a>
                        <p className="">Website shows what has happened after you opened it.</p>
                        <a href="https://what-has-happened.web.app/" target="_blank" className="grey bold seemore">See more</a>
                    </div>
                    <div className="project">
                        <a target="_blank" href="https://investment-calculator-0.web.app/"><img width="100%" src="/assets/investment-calculator.png" alt="Investment calculator"></img></a>
                        <p className="">Your go-to investment calculator</p>
                        <a target="_blank" href="https://investment-calculator-0.web.app/" className="grey bold seemore">See more</a>
                    </div> */}
                    
                </div>
                <button id="more-projects" className="more-proj" onClick={toProjects}>More projects</button>
                {/* <a id="more-projects" className="more-proj" onClick={toProjects}>More projects</a> */}

            </div>
            

            <div className="techstack">
                <h1>My techstack</h1>
                <p className="grey context">Languages and framework I use</p> 
                <div className="languages">
                    <div className="language">
                        <img width="100%" src="/assets/techstack/nodejs.svg" alt="nodejs"></img>
                    </div>
                    <div className="language">
                        <img width="100%" src="/assets/techstack/mongodb.svg" alt="nodejs"></img>
                    </div>
                    <div className="language">
                        <img width="100%" src="/assets/techstack/angular.svg" alt="nodejs"></img>
                    </div>
                    <div className="language">
                        <img width="100%" src="/assets/techstack/reactjs.svg" alt="nodejs"></img>
                    </div>
                    <div className="language">
                        <img width="100%" src="/assets/techstack/go.svg" alt="nodejs"></img>
                    </div>
                    <div className="language">
                        <img width="100%" src="/assets/techstack/python.svg" alt="nodejs"></img>
                    </div>
                    <div className="language">
                        <img width="100%" src="/assets/techstack/java.svg" alt="nodejs"></img>
                    </div>
                </div>
            </div>

            <div className="bankrupt">
                <div>
                <h1>Bankrupt Designs</h1>
                <p className="grey context">Checkout my design page</p>
                </div>
                <div className="designs-img">
                    <img src="/assets/design1.png"></img>
                    <img src="/assets/design2.png"></img>
                    <img src="/assets/design3.png"></img>
                    <img src="/assets/design4.png"></img>
                    <img src="/assets/design5.png"></img>
                    <img src="/assets/design6.png"></img>
                </div>
                <div className="design-page">
               <a href="https://www.figma.com/@anmolbhardwaj" target="_blank"> <button id="more-projects" className="more-proj"><i id="ig" class="fab fa-figma"></i>More designs</button></a>
                </div>
            </div>
            <div className="contact">
            <div className="first outer2">
                <div className="middle2">
                    <h1>Let's <span className="create">create</span> together!</h1>
                    <p className="context grey">Working with someone has always been fun for me. Want to make something cool together?</p>
                    <p className="context bold">Hit me up!</p>
                    <div className="email-div">
                    <a className="c-email" href="mailto: anmolbhardwaj17@gmail.com">anmolbhardwaj17@gmail.com</a>
                    </div>
                    <div className="socials2">
                        <a className="social-icon2" target="_blank" href="https://www.linkedin.com/in/anmolbhardwaj/"><i class="bi bi-linkedin"></i></a>
                        <a className="social-icon2" target="_blank" href="https://www.behance.net/anmolbhardwaj"><i class="bi bi-behance"></i></a>
                        <a className="social-icon2" target="_blank" href="https://medium.com/@anmolbhardwaj17"><i class="bi bi-medium"></i></a>
                        <a className="social-icon2" target="_blank" href="https://github.com/anmolbhardwaj17"><i class="bi bi-github"></i></a>
                        <a className="social-icon2" target="_blank" href="https://twitter.com/anmolbhardwajj"><i class="bi bi-twitter"></i></a>              
                    </div>
                </div>
                </div>
            </div>
            <p class="center bold grey">Anmol Bhardwaj 2021</p>
            </div>
            
            
    )
}

export default Home