import { Link, redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';
import { Icon } from '@iconify/react';


import SocialIcons from '../components/SocialIcons'

function Projects( index ){
    
  useLayoutEffect(() => {

    // On initial page load, let the first project_link-container be active (inline)
    let first = document.querySelector(".project_link-container");
    initialLoad(first)

    function initialLoad(container) {
      let link = container.querySelector(".project_link"),
          background = document.getElementById(container.getAttribute('data-background'));

      // SET first container to final animated state
      gsap.set(link, { 
        fontSize: 130,
      })

      gsap.set(background, {
        autoAlpha: 1,
      })
    }

    // When hovering over link container
    function onEnter(container) { 

      // if project-link is already active, don't run the onEnter function
      if(container.classList.contains("active")){
        return
      }

      // if project-link is already active, run the onExit function
      let active = document.querySelectorAll(".project_link-container.active");
      active.forEach( (el) => { 
        onExit(el)
      }) 

      // onEnter animation:
      let link = container.querySelector(".project_link"),
          background = document.getElementById(container.getAttribute('data-background'));

      gsap.to(link, { 
        fontSize: 130,
        ease: "power1"
      })

      gsap.to(background, {
        autoAlpha: 1,
        ease: "power1"
      }, "<")

      // add active class to project-link
      container.classList.add("active")
    } 

    // onExit animation:
    function onExit (container) {
      let link = container.querySelector(".project_link"),
      background = document.getElementById(container.getAttribute('data-background'));

      gsap.to(link, { 
        fontSize: 70,
        ease: "power1"
      })

      gsap.to(background, {
        autoAlpha: 0,
        ease: "power1"
      }, "<")

      // remove active class from project-link
      container.classList.remove("active")
    }

    // GSAP ARRAY
    // On hover, run the onEnter function
    gsap.utils.toArray(".project_link-container").forEach(container => {
      container.addEventListener("mouseenter", () => onEnter( container ) );
    })
  })


  // MOBILE SLIDER ----------------------------------------------------


  return (
    <>
      <div class="project_page-container">

        <nav className="project_navigation">
          <ul>
              <div className="project_link-container active" data-background="background-1">
                  <li className="project_link">
                      <div className="rectangle"></div>
                          <Link to="mywarhammer" >
                              <p className="link">My Warhammer</p>
                          </Link>
                      <div className="rectangle"></div>
                  </li>
              </div>

              <div className="project_link-container" data-background="background-2">
                  <li className="project_link">
                      <div className="rectangle"></div>
                          <Link to="stauntongallery" >
                              <p className="link">Staunton Gallery</p>
                          </Link>
                      <div className="rectangle"></div>
                  </li>
              </div>

              <div className="project_link-container"  data-background="background-3">
                  <li className="project_link">
                      <div className="rectangle"></div>
                          <Link to="sustainabilityvic" >
                              <p className="link">
                                Sustainability Vic<span className="hidden">toria</span>
                              </p>
                          </Link>
                      <div className="rectangle"></div>
                  </li>
              </div>

              <div className="project_link-container"  data-background="background-4">
                  <li className="project_link">
                      <div className="rectangle"></div>
                          <Link to="djaliny" >
                              <p className="link">Djaliny</p>
                          </Link>
                      <div className="rectangle"></div>
                  </li>
              </div>

          </ul>
        </nav>

        <nav className="project_navigation-mobile">
              <div className="project_slide-arrows">
                <Icon id="arrow-left" icon="dashicons:arrow-right-alt2" />
                <Icon id="arrow-right" icon="dashicons:arrow-right-alt2" />
              </div>
            <div className="project_navigation-slide">
              <div className="project_slide-content">
                <p className="project_slide-title">My Warhammer</p>
                <div className="project_slide-button">Explore Project</div>
              </div>
              <div className="project_background-image" id="background-1-mob"/>
            </div>
        </nav>

        <SocialIcons />

        <div className="project_background-overlay"></div>
        <div className="project_background-image" id="background-1"></div>
        <div className="project_background-image" id="background-2"></div>
        <div className="project_background-image" id="background-3"></div>
        <div className="project_background-image" id="background-4"></div>
      </div>      
    </>
  )
}

export default Projects