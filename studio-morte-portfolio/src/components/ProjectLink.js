import { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useCallback, useContext, createContext, useImperativeHandle, forwardRef } from 'react';


function ProjectLink({ children }) {
    return <li className="project_link">{children}</li>
  }
  
function ProjectLinkAnimation( index ) {

    const [reversed, setReversed] = useState(true);
    const app = useRef();
    const [tl, setTl] = useState(() => gsap.timeline());
  
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        tl.current = gsap.timeline( { defaults: {duration: 0.5 } } )
  
        .to(".link", {
          fontSize: 130,
          ease: "power1"
        }, index * 0)
  
        .to(".rectangle", {
          opacity: 1,
          ease: "power1"
        }, index * 1)
  
        .to(".project_background-image1", {
          opacity: 1,
          ease: "power4"
        }, index * 0);
  
      }, app);
      return () => ctx.revert();
    }, [tl, index]);
  
    useEffect(() => {
      tl.current.reversed(reversed);
    }, [reversed, tl]);

    return (
        <>
            <div ref={app}>
                <ProjectLink>
                    <div className="rectangle"></div>
                        <p 
                        className="link"
                        onMouseEnter={() => setReversed(!reversed)}
                        onMouseLeave={() => setReversed(true)}>
                            My Warhammer
                        </p>
                    <div className="rectangle"></div>
                </ProjectLink>
            </div>
        </>
    )
}

export default ProjectLinkAnimation