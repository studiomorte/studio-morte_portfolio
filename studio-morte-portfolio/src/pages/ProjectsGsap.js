import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';

import SocialIcons from '../components/SocialIcons'

function ProjectsGsap( index ){

    
    // ASK FOR HELP WITH:
    // I want the "my warhammer" project_link to automatically be in a "hovered" state on page load.
    // I also want the hovered state to remain active until another link is hovered over.
    // When the user stops hovering over another item I want "my warhammer" to return to a hovered state.


  // TIMELINE 1 -------------------------------------------------------
  gsap.utils.toArray(".project_link-container").forEach(container => {
    let link = container.querySelector(".project_link"),
        tl = gsap.timeline({ paused: true });

        tl.to(link, { fontSize: 130 })

        container.addEventListener("mouseenter", () => tl.play() );
        container.addEventListener("mouseleave", () => tl.reverse() );
  }) 

  return (
    <>
        <div class="project_page-container">

          <nav className="project_navigation">
            <ul>
                <div className="project_link-container">
                  <li className="project_link">
                    <p className="link">My Warhammer</p>
                  </li>
                </div>

                <div className="project_link-container">
                  <li className="project_link">
                    <p className="link">Staunton Gallery</p>
                  </li>
                </div>

            </ul>
          </nav>

        </div>      
    </>
  );
}

export default ProjectsGsap