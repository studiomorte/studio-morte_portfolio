import { Link } from 'react'
import { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useState, useEffect } from 'react';

function ProjectLinkAnimation(  ) {

    const [reversed, setReversed] = useState(true);
    const app = useRef();
    const [tl, setTl] = useState(() => gsap.timeline());

    useLayoutEffect((index) => {
      const ctx = gsap.context(() => {
        tl.current = gsap.timeline( { defaults: {duration: 0.5 } } )
  
        .to(".link", {
          fontSize: 130,
          ease: "power1"
        }, index * 1)
  
        .to(".rectangle", {
          opacity: 1,
          ease: "power1"
        }, index * 1)
  
        .to(".project_background-image1", {
          opacity: 1,
          ease: "power4"
        }, index * 1);
  
      }, app);
      return () => ctx.revert();
    }, []);
  
    useEffect(() => {
      tl.current.reversed(reversed);
    }, [reversed]);

    return (
        <>
            <li ref={app}>
                <div className="rectangle"></div>
                <Link to="mywarhammer">
                    <p 
                    className="link"
                    onMouseEnter={() => setReversed(!reversed)}
                    onMouseLeave={() => setReversed(true)}>
                        My Warhammer
                    </p>
                </Link>
                <div className="rectangle"></div>
            </li>
        </>
    )
}

export default ProjectLinkAnimation