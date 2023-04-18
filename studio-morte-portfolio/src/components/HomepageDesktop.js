import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

function HomepageDesktop(index) {
  useLayoutEffect(() => {
    // On initial page load, let the first project_link-container be active (inline)
    let first = document.querySelector(".project-banner__link-container");
    initialLoad(first);

    function initialLoad(container) {
      let link = container.querySelector(".project-banner__link"),
        background = document.getElementById(
          container.getAttribute("data-background")
        );

      // SET first container to final animated state
      gsap.set(link, {
        fontSize: 130,
      });

      gsap.set(background, {
        autoAlpha: 1,
      });
    }

    // When hovering over link container
    function onEnter(container) {
      // if project-link is already active, don't run the onEnter function
      if (container.classList.contains("active")) {
        return;
      }

      // if project-link is already active, run the onExit function
      let active = document.querySelectorAll(
        ".project-banner__link-container.active"
      );
      active.forEach((el) => {
        onExit(el);
      });

      // onEnter animation:
      let link = container.querySelector(".project-banner__link"),
        background = document.getElementById(
          container.getAttribute("data-background")
        );

      gsap.to(link, {
        fontSize: 130,
        ease: "power1",
      });

      gsap.to(
        background,
        {
          autoAlpha: 1,
          ease: "power1",
        },
        "<"
      );

      // add active class to project-link
      container.classList.add("active");
    }

    // onExit animation:
    function onExit(container) {
      let link = container.querySelector(".project-banner__link"),
        background = document.getElementById(
          container.getAttribute("data-background")
        );

      gsap.to(link, {
        fontSize: 70,
        ease: "power1",
      });

      gsap.to(
        background,
        {
          autoAlpha: 0,
          ease: "power1",
        },
        "<"
      );

      // remove active class from project-link
      container.classList.remove("active");
    }

    // GSAP ARRAY
    // On hover, run the onEnter function
    gsap.utils
      .toArray(".project-banner__link-container")
      .forEach((container) => {
        container.addEventListener("mouseenter", () => onEnter(container));
      });
  });

  return (
    <>
      <nav className="project-banner__navigation">
        <ul>
          <div
            className="project-banner__link-container active"
            data-background="background-1"
          >
            <li className="project-banner__link">
              <div className="rectangle"></div>
              <Link to="mywarhammer">
                <p className="link">My Warhammer</p>
              </Link>
              <div className="rectangle"></div>
            </li>
          </div>

          <div
            className="project-banner__link-container"
            data-background="background-2"
          >
            <li className="project-banner__link">
              <div className="rectangle"></div>
              <Link to="stauntongallery">
                <p className="link">Staunton Gallery</p>
              </Link>
              <div className="rectangle"></div>
            </li>
          </div>

          <div
            className="project-banner__link-container"
            data-background="background-3"
          >
            <li className="project-banner__link">
              <div className="rectangle"></div>
              <Link to="sustainabilityvic">
                <p className="link">
                  Sustainability Vic<span className="hidden">toria</span>
                </p>
              </Link>
              <div className="rectangle"></div>
            </li>
          </div>

          <div
            className="project-banner__link-container"
            data-background="background-4"
          >
            <li className="project-banner__link">
              <div className="rectangle"></div>
              <Link to="djaliny">
                <p className="link">Djaliny</p>
              </Link>
              <div className="rectangle"></div>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default HomepageDesktop;
