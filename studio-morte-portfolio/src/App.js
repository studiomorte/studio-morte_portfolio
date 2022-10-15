import { Outlet, Link } from "react-router-dom"
import Navbar from './components/Navbar';
import './scss/main.scss';

import { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useCallback, useContext, createContext, useImperativeHandle, forwardRef } from 'react';

/*
function Rectangle({ children, timeline, index }) {
  const el = useRef();

  useEffect(() => {
    timeline.to(el.current, { opacity: 1 }, index * 0.1 );
  }, [timeline]);

  return <div className="rectangle" ref={el}>{children}</div>
}

function ProjectLink({ children, timeline, index }) {
  const el = useRef();

  useEffect(() => {
    timeline.to(el.current, { fontSize: 90 }, index * 0.1 );
  }, [ timeline ])

  return <div className="project_link" ref={el}>{children}</div>
}
*/


function ProjectLink({ children }) {
  return <li className="project_link">{children}</li>
}


function App( index ) {

  const [reversed, setReversed] = useState(true);
  const app = useRef();
  const [tl, setTl] = useState(() => gsap.timeline());

  useLayoutEffect(() => {
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
      <Navbar />

      <div className="main-container" ref={app}>
      <div class="project_page-container">

          <nav className="project_navigation">
            <ul>
              <ProjectLink>
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
              </ProjectLink>

            </ul>
          </nav>
          <div className="project_background-overlay"></div>
          <div className="project_background-image1"></div>
        <Outlet />
      </div>
      </div>
    </>
  );
}

export default App;
