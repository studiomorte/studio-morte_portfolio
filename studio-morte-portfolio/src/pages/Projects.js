import { useState } from "react";


function Projects(){

    // unnecessarily verbose, not sure how to streamline this right now

    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);

    function handleHover() {
        setHover1(true)
    }

    function handleHide() {
        setHover1(false)
    }

    return (
        <>
            <nav className="project_navigation">
                <li className="project_link" >
                    <div className={`rectangle ${hover1 ? "show" : "" }`}></div>
                    <p 
                    className={`link ${hover1 ? "hover" : "" }`}
                    onMouseOver={handleHover} 
                    onMouseOut={handleHide}>
                        My Warhammer
                    </p>
                    <div className={`rectangle ${hover1 ? "show" : "" }`}></div>
                </li>
                <li className="project_link">
                    <div className={`rectangle ${hover2 ? "show" : "" }`}></div>
                    <p 
                    className={`link ${hover2 ? "hover" : "" }`} 
                    onMouseEnter={()=> setHover2(true)} 
                    onMouseLeave={()=> setHover2(false)}>
                        Staunton Gallery
                    </p>
                    <div className={`rectangle ${hover2 ? "show" : "" }`}></div>
                </li>
                <li className="project_link">
                    <div className={`rectangle ${hover3 ? "show" : "" }`}></div>
                    <p 
                    className={`link ${hover3 ? "hover" : "" }`} 
                    onMouseEnter={()=> setHover3(true)} 
                    onMouseLeave={()=> setHover3(false)}>
                        Sustainability Vic
                    </p>
                    <div className={`rectangle ${hover3 ? "show" : "" }`}></div>
                </li>
                <li className="project_link" >
                    <div className={`rectangle ${hover4 ? "show" : "" }`}></div>
                    <p 
                    className={`link ${hover4 ? "hover" : "" }`} 
                    onMouseEnter={()=> setHover4(true)} 
                    onMouseLeave={()=> setHover4(false)}>
                        Djaliny
                    </p>
                    <div className={`rectangle ${hover4 ? "show" : "" }`}></div>
                </li>
            </nav>
        </>
    )
}

export default Projects