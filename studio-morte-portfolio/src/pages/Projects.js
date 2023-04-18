import React from "react";
import HomepageDesktop from "../components/HomepageDesktop";
import HomepageMobile from "../components/HomepageMobile";
import SocialIcons from "../components/SocialIcons";

function Projects(index) {
  return (
    <>
      <div className="project-banner__container">
        <HomepageDesktop />

        <SocialIcons />

        <div className="project-banner__background-overlay"></div>
        <div
          className="project-banner__background-image"
          id="background-1"
        ></div>
        <div
          className="project-banner__background-image"
          id="background-2"
        ></div>
        <div
          className="project-banner__background-image"
          id="background-3"
        ></div>
        <div
          className="project-banner__background-image"
          id="background-4"
        ></div>
      </div>
      <HomepageMobile />
    </>
  );
}

export default Projects;
