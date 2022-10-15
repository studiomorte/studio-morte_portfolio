import { useState } from "react";
import { Link } from 'react-router-dom';

import SocialIcons from '../components/SocialIcons'

function ProjectsGsap(){

    // unnecessarily verbose, not sure how to streamline this right now
    
    // ASK FOR HELP WITH:
    // I want the "my warhammer" project_link to automatically be in a "hovered" state on page load.
    // I also want the hovered state to remain active until another link is hovered over.

    // CONSIDER USING GSAP

    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);


    return (
        <>
            <div class="project_page-container">
            <SocialIcons />
            <nav className="project_navigation">
                <ul>
                    
                        <li className="project_link" >
                            <div className={`rectangle ${hover1 ? "show" : "" }`}></div>
                            <Link to="mywarhammer">
                                <p 
                                className={`link ${hover1 ? "hover" : "" }`}
                                onMouseEnter={()=> setHover1(true)} 
                                onMouseLeave={()=> setHover1(false)}>
                                    My Warhammer
                                </p>
                            </Link>
                            <div className={`rectangle ${hover1 ? "show" : "" }`}></div>
                        </li>

                    
                        <li className="project_link">
                            <div className={`rectangle ${hover2 ? "show" : "" }`}></div>
                            <Link to="stauntongallery">
                                <p 
                                className={`link ${hover2 ? "hover" : "" }`} 
                                onMouseEnter={()=> setHover2(true)} 
                                onMouseLeave={()=> setHover2(false)}>
                                    Staunton Gallery
                                </p>
                            </Link>
                            <div className={`rectangle ${hover2 ? "show" : "" }`}></div>
                        </li>

                        <li className="project_link">
                            <div className={`rectangle ${hover3 ? "show" : "" }`}></div>
                            <Link to="sustainabilityvic">
                                <p 
                                className={`link ${hover3 ? "hover" : "" }`} 
                                onMouseEnter={()=> setHover3(true)} 
                                onMouseLeave={()=> setHover3(false)}>
                                    Sustainability Vic
                                </p>
                            </Link>
                            <div className={`rectangle ${hover3 ? "show" : "" }`}></div>
                        </li>

                        <li className="project_link" >
                            <div className={`rectangle ${hover4 ? "show" : "" }`}></div>
                            <Link to="djaliny">
                                <p 
                                className={`link ${hover4 ? "hover" : "" }`} 
                                onMouseEnter={()=> setHover4(true)} 
                                onMouseLeave={()=> setHover4(false)}>
                                    Djaliny
                                </p>
                            </Link>
                            <div className={`rectangle ${hover4 ? "show" : "" }`}></div>
                        </li>
                </ul>

            </nav>

            <div className="project_background-overlay"></div>
            <div className={`project_background-image ${hover1 ? "show1" : "" }`}></div>
            <div className={`project_background-image ${hover2 ? "show2" : "" }`}></div>
            <div className={`project_background-image ${hover3 ? "show3" : "" }`}></div>
            <div className={`project_background-image ${hover4 ? "show4" : "" }`}></div>

            </div>
        </>
    )
}

export default ProjectsGsap