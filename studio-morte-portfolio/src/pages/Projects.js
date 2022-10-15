import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';

import SocialIcons from '../components/SocialIcons'

function Projects( index ){

    
    // ASK FOR HELP WITH:
    // I want the "my warhammer" project_link to automatically be in a "hovered" state on page load.
    // I also want the hovered state to remain active until another link is hovered over.

  // TIMELINE 1 -------------------------------------------------------

  const link1 = useRef();
  const [tl1, setTl] = useState(() => gsap.timeline());
  const [reversed1, setReversed1] = useState(true);
  const [hover1, setHover1] = useState(false)

  useLayoutEffect(() => {
    const ctx1 = gsap.context(() => {
      tl1.current = gsap.timeline( { defaults: {duration: 0.5} } )

      .to(".link", {
        fontSize: 130,
        ease: "power1",
        delay: 1
      }, index * 0)

      .to(".rectangle", {
        opacity: 1,
        ease: "power1"
      }, index * 0)

      .to(".project_background-image1", {
        opacity: 1,
        ease: "power4"
      }, index * 0);

    }, link1);
    return () => ctx1.revert();
  }, [tl1, index]);

  useEffect(() => {
    tl1.current.reversed(reversed1);
  }, [reversed1, tl1]);



  // TIMELINE 2 ---------------------------------------------------------

  const link2 = useRef();
  const [tl2, setT2] = useState(() => gsap.timeline());
  const [reversed2, setReversed2] = useState(true);
  const [hover2, setHover2] = useState(false)

  useLayoutEffect(() => {
    const ctx2 = gsap.context(() => {
      tl2.current = gsap.timeline( { defaults: {duration: 0.5} } )

      .to(".link", {
        fontSize: 130,
        ease: "power1",
        delay: 1
      }, index * 0)

      .to(".rectangle", {
        opacity: 1,
        ease: "power1"
      }, index * 0)

      .to(".project_background-image2", {
        opacity: 1,
        ease: "power4"
      }, index * 0);

    }, link2);
    return () => ctx2.revert();
  }, [tl2, index]);

  useEffect(() => {
    tl2.current.reversed(reversed2);
  }, [reversed2, tl2]);


  // TIMELINE 3 -----------------------------------------------------
  
  const link3 = useRef();
  const [tl3, setT3] = useState(() => gsap.timeline());
  const [reversed3, setReversed3] = useState(true);
  const [hover3, setHover3] = useState(false)

  useLayoutEffect(() => {
    const ctx3 = gsap.context(() => {
      tl3.current = gsap.timeline( { defaults: {duration: 0.5} } )

      .to(".link", {
        fontSize: 130,
        ease: "power1",
        delay: 1
      }, index * 0)

      .to(".rectangle", {
        opacity: 1,
        ease: "power1"
      }, index * 0)

      .to(".project_background-image3", {
        opacity: 1,
        ease: "power4"
      }, index * 0);

    }, link3);
    return () => ctx3.revert();
  }, [tl3, index]);

  useEffect(() => {
    tl3.current.reversed(reversed3);
  }, [reversed3, tl3]);



  // TIMELINE 4 ---------------------------------------------------

  const link4 = useRef();
  const [tl4, setT4] = useState(() => gsap.timeline());
  const [reversed4, setReversed4] = useState(true);
  const [hover4, setHover4] = useState(false)

  useLayoutEffect(() => {
    const ctx4 = gsap.context(() => {
      tl4.current = gsap.timeline( { defaults: {duration: 0.5} } )

      .to(".link", {
        fontSize: 130,
        ease: "power1",
        delay: 1
      }, index * 0)

      .to(".rectangle", {
        opacity: 1,
        ease: "power1"
      }, index * 0)

      .to(".project_background-image3", {
        opacity: 1,
        ease: "power4"
      }, index * 0);

    }, link4);
    return () => ctx4.revert();
  }, [tl4, index]);

  useEffect(() => {
    tl4.current.reversed(reversed4);
  }, [reversed4, tl4]);



  return (
    <>
      <div className="main-container">
      <div class="project_page-container">
        <SocialIcons />

          <nav className="project_navigation">
            <ul>
              <Link to="mywarhammer" >
                <div ref={link1}>
                    <li className="project_link">
                        <div className="rectangle"></div>
                            <p 
                            className="link"
                            onMouseEnter={() => {setReversed1(!reversed1); setHover1(true)}}
                            onMouseLeave={() => {setReversed1(true); setHover1(false)}}>
                                My Warhammer
                            </p>
                        <div className="rectangle"></div>
                    </li>
                </div>
              </Link>

              <Link to="stauntongallery" >
                <div ref={link2}>
                    <li className="project_link">
                        <div className="rectangle"></div>
                            <p 
                            className="link"
                            onMouseEnter={() => {setReversed2(!reversed2); setHover2(true)}}
                            onMouseLeave={() => {setReversed2(true); setHover2(false)}}>
                              Staunton Gallery
                            </p>
                        <div className="rectangle"></div>
                    </li>
                </div>
              </Link>

              <Link to="sustainabilityvic" >
                <div ref={link3}>
                    <li className="project_link">
                        <div className="rectangle"></div>
                            <p 
                            className="link"
                            onMouseEnter={() => {setReversed3(!reversed3); setHover3(true)}}
                            onMouseLeave={() => {setReversed3(true); setHover3(false)}}>
                              Sustainability Victoria
                            </p>
                        <div className="rectangle"></div>
                    </li>
                </div>
              </Link>

              <Link to="djaliny" >
                <div ref={link4}>
                    <li className="project_link">
                        <div className="rectangle"></div>
                            <p 
                            className="link"
                            onMouseEnter={() => {setReversed4(!reversed4); setHover4(true)}}
                            onMouseLeave={() => {setReversed4(true); setHover4(false)}}>
                              Djaliny
                            </p>
                        <div className="rectangle"></div>
                    </li>
                </div>
              </Link>

            </ul>
          </nav>
          <div className="project_background-overlay"></div>
          <div className={`project_background-image1 ${hover1 ? "show" : "" }`}></div>
          <div className={`project_background-image2 ${hover2 ? "show" : "" }`}></div>
          <div className={`project_background-image3 ${hover3 ? "show" : "" }`}></div>
          <div className={`project_background-image4 ${hover4 ? "show" : "" }`}></div>
      </div>      
      </div>
      </>
  );
}

export default Projects