import React from "react";
import Footer from "./../components/Footer";
import ProjectSwiper from "../components/ProjectSwiper";
import BulletList from "../components/BulletList";
import LinkBlock from "../components/LinkBlock";

/* IMAGES */
import headerImg from "./../images/project-mywarhammer/warhammer-header.jpg";
import featureImg from "./../images/project-mywarhammer/warhammer-feature.jpg";
import warhammerLogo from "./../images/project-mywarhammer/logo-warhammer.png";
import battleHonoursLogo from "./../images/project-mywarhammer/logo-battlehonours.png";
import citadelColourLogo from "./../images/project-mywarhammer/logo-citadelcolour.png";
import battleHonoursImg from "./../images/project-mywarhammer/mockup1-2.jpg";
import citadelColourImg from "./../images/project-mywarhammer/citadelcolour.jpg";
import persona1 from "./../images/project-mywarhammer/persona-warhammer1.jpg";
import persona2 from "./../images/project-mywarhammer/persona-warhammer2.jpg";
import persona3 from "./../images/project-mywarhammer/persona-warhammer3.jpg";
import scenario1 from "./../images/project-mywarhammer/scenario-warhammer1.jpg";
import scenario2 from "./../images/project-mywarhammer/scenario-warhammer2.jpg";
import scenario3 from "./../images/project-mywarhammer/scenario-warhammer3.jpg";
import infoArch from "./../images/project-mywarhammer/ia-warhammer.jpg";

function MyWarhammer() {
  const personas = [
    { id: "slide1", imageUrl: persona1, alt: "Kelsey Byrne persona" },
    { id: "slide2", imageUrl: persona2, alt: "David Melaney persona" },
    { id: "slide3", imageUrl: persona3, alt: "Jake Evans persona" },
  ];

  const scenarios = [
    { id: "slide1", imageUrl: scenario1, alt: "Kelsey Byrne scenario" },
    { id: "slide2", imageUrl: scenario2, alt: "David Melaney scenario" },
    { id: "slide3", imageUrl: scenario3, alt: "Jake Evans scenario" },
  ];

  const projectGoals = [
    {
      id: 1,
      copy: "Streamline the existing My Warhammer website and improve the aesthetic design",
    },
    {
      id: 2,
      copy: "Improve navigation between all Games Workshop websites by streamlining the main navigation menu",
    },
    {
      id: 3,
      copy: "Redesign the Citadel Colour 'my projects' user flow",
    },
    {
      id: 4,
      copy: "Adapt the Battle Honours project for use within the My Warhammer website redesign",
    },
    {
      id: 5,
      copy: "Include and expand upon the inventory and wishlist feature on the Citadel Colour mobile app",
    },
  ];

  const userGoalsLeft = [
    {
      id: 1,
      copy: "Easy access to the full range of Games Workshop products with a straight forward way to keep track of purchases and wishlists",
    },
    {
      id: 2,
      copy: "Have a better experience navigating the various Games Workshop websites and easily adjust personal details and/or subscriptions",
    },
    {
      id: 3,
      copy: "Be able to seamlessly access the same content from multiple device",
    },
  ];

  const userGoalsRight = [
    {
      id: 4,
      copy: "An easy way to maintain colour schemes when painting Warhammer miniatures and the ability to share colour schemes with others",
    },
    {
      id: 5,
      copy: "A digital way to work through their Battle Honours programme",
    },
  ];

  const furtherDevLeft = [
    {
      id: 1,
      copy: "Improve Battle Honours experience beyond written activities. Think: online group sessions, allow users to upload photos of doing/completing activity",
    },
    {
      id: 2,
      copy: "Further expansion of My Projects section allowing users to link directly to Citadel Colour tutorials within their projects",
    },
    {
      id: 3,
      copy: "Warhammer store profiles to allow stores to showcase and share customers/their own projects, create tournament/painting events, etc.",
    },
  ];

  const furtherDevRight = [
    {
      id: 1,
      copy: "The original article about adding user profiles on the My Warhammer website suggested the ability to save Warhammer Community articles to read later and create army lists that can be shared with others",
    },
    {
      id: 2,
      copy: "User testing throughout My Projects section to enhance and further streamline the experience, testing with a range of highly experienced and brand new hobbyists",
    },
  ];

  const topLinks = [
    {
      id: 1,
      link: "https://www.figma.com/file/b0wW4zp4bcrRvJp0MB1NDf/My-Warhammer?node-id=0%3A1",
      icon: "bxl:figma",
      title: "Figma Design",
    },
    {
      id: 2,
      link: "https://www.figma.com/proto/b0wW4zp4bcrRvJp0MB1NDf/My-Warhammer?node-id=153%3A3929&scaling=scale-down&page-id=0%3A1&starting-point-node-id=153%3A3929",
      icon: "bxl:figma",
      title: "Figma Prototype",
    },
    {
      id: 3,
      link: "https://vigorous-mayer-dfea3a.netlify.app/",
      icon: "ri:external-link-line",
      title: "Battle Honours Website",
    },
    {
      id: 4,
      link: "https://fanciful-custard-b67eea.netlify.app/",
      icon: "ri:external-link-line",
      title: "Citadel Colour Website (WIP)",
    },
  ];

  const battleHonoursLink = [
    {
      id: 1,
      link: "https://vigorous-mayer-dfea3a.netlify.app/",
      icon: "ri:external-link-line",
      title: "Battle Honours Website",
    },
  ];

  const citadelColourLink = [
    {
      id: 1,
      link: "https://fanciful-custard-b67eea.netlify.app/",
      icon: "ri:external-link-line",
      title: "Citadel Colour Website (WIP)",
    },
  ];

  const prototypeLinks = [
    {
      id: 1,
      link: "https://www.figma.com/file/b0wW4zp4bcrRvJp0MB1NDf/My-Warhammer?node-id=0%3A1",
      icon: "bxl:figma",
      title: "Figma Design",
    },
    {
      id: 2,
      link: "https://www.figma.com/proto/b0wW4zp4bcrRvJp0MB1NDf/My-Warhammer?node-id=153%3A3929&scaling=scale-down&page-id=0%3A1&starting-point-node-id=153%3A3929",
      icon: "bxl:figma",
      title: "Figma Prototype",
    },
  ];

  return (
    <>
      <div className="mywarhammer">
        <header className="project__header">
          <img
            className="project__logo project__logo--center"
            src={warhammerLogo}
            alt="Warhammer Logo"
          />
          <img
            className="project__logo project__logo--left"
            src={citadelColourLogo}
            alt="Citadel Colour Logo"
          />
          <img
            className="project__logo project__logo--right"
            src={battleHonoursLogo}
            alt="Battle Honours Logo"
          />
          <div className="project__hero-overlay"></div>
          <img
            className="project__hero"
            src={headerImg}
            alt="Collection of screens designed for My Warhammer"
          />
        </header>
        <section className="project__container">
          <section className="project__summary">
            <div className="written left">
              <h2>Overview</h2>
              <p>
                Games Workshop's Warhammer is one of, if not the, most popular
                and widely known tabletop miniature games in the world. Founded
                in 1975 the hobby has grown to include everything from board
                games to video games, novels to tv shows, and major tournaments
                to painting competitions.
              </p>
              <p>
                While their digital platforms offer a wide variety of content,
                there's significant room for growth and improvement. That's
                where this My Warhammer redesign fits in - a colossal
                combination of two previous projects seeking to improve the
                digital experience for all Warhammer hobbyists.
              </p>
              <div className="project-status">
                <p>
                  Project Status:
                  <span className="italic"> Development</span>
                </p>
                <p>
                  This is a<span className="bold-italic"> fictional brief</span>
                  , further details at the end of this page
                </p>
              </div>
            </div>

            <LinkBlock items={topLinks} />

            <div className="project__problem full-width">
              <p>
                Games Workshop would like to bridge the gap between the physical
                and digital world, creating an online space for their customers
                to showcase and support their hobby journey through an improved
                My Warhammer website.
              </p>
            </div>

            <div className="project__goals left bullets">
              <h3>Project Goals</h3>
              <BulletList items={projectGoals} />
            </div>

            <div className="project__solution written right">
              <h3>The Solution</h3>
              <p>
                The reimagined My Warhammer website creates an online space for
                hobbyists to create and share their projects, keep track of
                their Battle Honours activities, and add an extensive range of
                Games Workshop products to their inventory or wishlist.
              </p>
              <p>
                All necessary features of the current My Warhammer website have
                been maintained and the inclusion of a simplified navigation
                menu to be used across all Games Workshop websites further
                improves the overall digital experience for users.
              </p>
            </div>

            <div className="project__image--feature full-width">
              <img src={featureImg} alt="mockup of final website design" />
            </div>
          </section>

          <section className="project__case-study">
            <h2 className="project__heading full-width brand-display xxl">
              <div
                className="project__heading-rectangle"
                aria-hidden="true"
              ></div>
              <span>a quick look back</span>
            </h2>
            <img
              src={battleHonoursLogo}
              alt="Battle Honours logo"
              className="logo"
            />
            <div className="written left">
              <p>
                The Battle Honours programme is designed to introduce new
                hobbyists to Warhammer by encouraging them to complete
                activities to receive exclusive rewards. The programme launched
                in mid 2021, a time where many potential hobbyists were isolated
                due to the Covid 19 pandemic, but what if this programme was
                available online?{" "}
              </p>
            </div>
            <LinkBlock items={battleHonoursLink} />
            <div className="project__image--large battle-honours">
              <img
                src={battleHonoursImg}
                alt="mockup of Battle Honours redesigned website"
              />
            </div>
            {/* <div className="warhammer-container projects_staggered-container">
                        <div className="written left">
                            <p>The Battle Honours programme is designed to introduce new hobbyists to Warhammer by encouraging them to complete activities to receive exclusive rewards. The programme launched in mid 2021, a time where many potential hobbyists were isolated due to the Covid 19 pandemic, but what if this programme was available online? </p>
                        </div>
                        <div className="written right">
                            <h2>Research</h2>
                            <p>Brief requirements for this project were limited to desk-based research including topic research, competitor analysis, and web design trends. With the nature of this project focused on enhancing the user experience I also conducted a small amount of user research to inform the design.</p>
                        </div>
                        <div className="written left">
                            <h2>Ideation</h2>
                            <p>Summary</p>
                        </div>
                        <div className="written right">
                            <h2>Mockups</h2>
                            <p>Summary</p>
                        </div>
                    </div> */}
            {/* <div className="written left">
                        <p className="bold-italic">Click through to explore Figma design files</p>
                    </div>

                    <div>
                        <ul>
                            <a href="https://studiomorte.medium.com/sustainability-victoria-when-accessibility-small-space-living-and-augmented-reality-collide-deaf9ff71c35">
                                <li>
                                    <Icon icon="bxl:figma"/>
                                    Figma Design
                                </li>
                            </a>
                        </ul>
                    </div> */}
            <img
              src={citadelColourLogo}
              alt="Citadel Colour logo"
              className="logo"
            />
            <div className="written left">
              <p>
                Games Workshop's very own paint range, Citadel Colour, offers
                hobbyists a wide variety of paints and tools to get their
                miniature projects looking spectacular. Currently the Citadel
                Colour website and mobile app offer different content, the
                website offering limited in comparison to the recently updated
                mobile app. The goal of this project was to bring the same
                mobile app offering of step-by-step tutorials and the
                inventory/wishlist to a reimagined web application, including a
                brand new "my projects" section to support the painting process
                of all Warhammer hobbyists.
              </p>
              <p className="bold-italic">
                Click through to explore the live website. Although unfinished,
                development of this website has been suspended in favour of
                developing the redesigned My Warhammer website.
              </p>
            </div>
            <LinkBlock items={citadelColourLink} />
            <div className="project__image--large citadel">
              <img
                src={citadelColourImg}
                alt="screenshot of redesigned citadel colour website"
              />
            </div>
            {/* <div className="warhammer-container projects_staggered-container">
                        <div className="written left">
                            <p>Games Workshop's very own paint range, Citadel Colour, offers hobbyists a wide variety of paints and tools to get their miniature projects looking spectacular. Currently the Citadel Colour website and mobile app offer different content, the website offering limited in comparison to the recently updated mobile app. The goal of this project was to bring the same mobile app offering of step-by-step tutorials and the inventory/wishlist to a reimagined web application, including a brand new "my projects" section to support the painting process of all Warhammer hobbyists.</p>
                        </div>
                        <div className="written right">
                            <h2>Research</h2>
                            <p>Summary</p>
                        </div>
                        <div className="written left">
                            <h2>Ideation</h2>
                            <p>Summary</p>
                        </div>
                        <div className="written right">
                            <h2>Mockups</h2>
                            <p>Summary</p>
                        </div>
                    </div> */}
            <h2 className="project__heading full-width brand-display xxl">
              <div
                className="project__heading-rectangle"
                aria-hidden="true"
              ></div>
              <span>user research</span>
            </h2>
            <div className="written left">
              <p>
                Through surveys, quizzes, and observations, I determined that
                the typical Warhammer hobbyist is middle to upper-middle class,
                caucasian, and aged from 16 through to 40. Hobbyists are also
                typically male, however this has begun to change in recent years
                with Games Workshop's shift toward inclusivity.
              </p>
              <p>
                As this project encompasses features for both newcomers and
                experienced hobbyists multiple key personas and user journeys
                were identified.
              </p>
            </div>
            <div className="swiper__persona">
              <ProjectSwiper images={personas} />
            </div>
            <div className="swiper__landscape">
              <ProjectSwiper images={scenarios} />
            </div>
            <div className="margin-width bullets">
              <h3>User Goals</h3>
              <div className="list-container">
                <BulletList items={userGoalsLeft} />
                <BulletList items={userGoalsRight} />
              </div>
            </div>
            <h2 className="project__heading full-width brand-display xxl">
              <div
                className="project__heading-rectangle"
                aria-hidden="true"
              ></div>
              <span>information architecture</span>
            </h2>
            <div className="written left">
              <p>
                With the complexity of this project the information architecture
                acted as a 'step in the right direction'. Adjustments are likely
                following prototyping and user testing to allow for a more
                seamless user flow.
              </p>
            </div>
            <img
              src={infoArch}
              alt="information architecture for My Warhammer website"
              className="project__large-image margin-width"
            />
            <h2 className="project__heading full-width brand-display xxl">
              <div
                className="project__heading-rectangle"
                aria-hidden="true"
              ></div>
              <span>prototype</span>
            </h2>
            <div className="written left">
              <p>
                Combining ideation, wireframing, and mockups from the original
                Battle Honours and Citadel Colour projects I created
                high-fidelity mockups, iterating several sections where
                necessary to achieve an ideal user flow.
              </p>
              <p className="bold-italic">
                Click through to the Figma Design or Figma Prototype to explore
                the full high-fidelity mockup.
              </p>
            </div>
            <LinkBlock items={prototypeLinks} />
            <div className="project__figma-container">
              <iframe
                title="mywarhammer prototype"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fb0wW4zp4bcrRvJp0MB1NDf%2FMy-Warhammer%3Fnode-id%3D153-3929%26starting-point-node-id%3D153%253A3929%26show-proto-sidebar%3D1"
                allowfullscreen
              ></iframe>
            </div>
            <h2 className="project__heading full-width brand-display xxl">
              <div
                className="project__heading-rectangle"
                aria-hidden="true"
              ></div>
              <span>further development</span>
            </h2>
            {/* <div className="written left">Some stuff</div> */}
            <div className="margin-width bullets">
              <div className="list-container">
                <BulletList items={furtherDevLeft} />
                <BulletList items={furtherDevRight} />
              </div>
            </div>
            <div className="fine-print margin-width">
              <p>
                This is a fictional brief. This project has been created as part
                of an assignment in an approved course of study for Curtin
                University and contains copyright material not created by the
                author. All copyright material used remains copyright of the
                respective owners and has been used here pursuant to Section 40
                of the Copyright Act 1968 (Commonwealth of Australia). No part
                of this work may be reproduced without consent of the original
                copyright owners.
              </p>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default MyWarhammer;
