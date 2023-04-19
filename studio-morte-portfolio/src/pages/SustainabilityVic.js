import React from "react";
import Footer from "./../components/Footer";
import ProjectSwiper from "../components/ProjectSwiper";
import BulletList from "../components/BulletList";

/* IMAGES */
import headerImg from "./../images/project-susvic/susvic1.jpg";
import featureImg from "./../images/project-susvic/sustainabilityvic1.jpg";
import brandLogo from "./../images/project-susvic/logo-sustainabilityvic.png";
import research from "./../images/project-susvic/research-susvic1.jpg";
import persona1 from "./../images/project-susvic/persona-susvic1.jpg";
import persona2 from "./../images/project-susvic/persona-susvic2.jpg";
import persona3 from "./../images/project-susvic/persona-susvic3.jpg";
import ideation from "./../images/project-susvic/ideation-susvic.jpg";
import wireframe1 from "./../images/project-susvic/wireframes-susvic1.jpg";
import wireframe2 from "./../images/project-susvic/wireframes-susvic2.jpg";
import testing from "./../images/project-susvic/testing-susvic.jpg";
import original from "./../images/project-susvic/original-susvic.jpg";
import LinkBlock from "../components/LinkBlock";

function SustainabilityVic() {
  const personas = [
    { id: "slide1", imageUrl: persona1, alt: "Jodie Shenfield persona" },
    { id: "slide2", imageUrl: persona2, alt: "Justin Nieves persona" },
    { id: "slide3", imageUrl: persona3, alt: "Rosie Cheng persona" },
  ];

  const drafts = [
    {
      id: "slide1",
      imageUrl: ideation,
      alt: "black and white photo of original wireframe sketches",
    },
    {
      id: "slide2",
      imageUrl: wireframe1,
      alt: "screenshot of wireframes for design variation one",
    },
    {
      id: "slide3",
      imageUrl: wireframe2,
      alt: "screenshot of wireframes for design variation two",
    },
  ];

  const projectGoals = [
    {
      id: 1,
      copy: "Create an aesthetically pleasing and practical app design that is accessible and educational",
    },
    {
      id: 2,
      copy: "Utilise Augmented Reality to enhance the user experience, leveraging the novelty of AR while providing a genuinely useful service",
    },
    {
      id: 3,
      copy: "Provide users with easy access to the knowledge required to grow and cook their own food",
    },
  ];

  const userGoals = [
    {
      id: 1,
      copy: "Learn how to grow in a small space",
    },
    {
      id: 2,
      copy: "Gardening in as little time as possible",
    },
    {
      id: 3,
      copy: "Cook meals at home more often and use home-grown ingredients",
    },
    {
      id: 4,
      copy: "Limit their impact on climate change by growing their own food to live more sustainably",
    },
  ];

  const splitTest = [
    {
      id: 1,
      copy: "Navigation menu (hamburger/bottom tabs)",
    },
    {
      id: 2,
      copy: "Plants list (larger/smaller photos)",
    },
    {
      id: 3,
      copy: "Plant info icon colours",
    },
    {
      id: 4,
      copy: "Pantry items (written/visual list)",
    },
    {
      id: 5,
      copy: "Recipes (written/visual list)",
    },
    {
      id: 6,
      copy: "Recipes ('save'/'save to cookbook')",
    },
    {
      id: 7,
      copy: "Dashboard notifications (specific/ambiguous)",
    },
  ];

  const finalDesignLeft = [
    {
      id: 1,
      copy: "Improve the apps accessibility by adding subtitles for deaf users",
    },
    {
      id: 2,
      copy: "Dreamtime stories and location information narrated by Indigenous persons from each region, adding to the authenticity of the experience",
    },
    {
      id: 3,
      copy: "A fully realised augmented reality experience that enhances the users learning and discovery",
    },
  ];

  const finalDesignRight = [
    {
      id: 1,
      copy: "Notifications that encourage users to interact with the app and/or notify users about how many times they've listened to a particular sound",
    },
    {
      id: 2,
      copy: "Include a favourites/saved section so that users can easily return to the sounds they appreciate the most",
    },
  ];

  const topLinks = [
    {
      id: 1,
      link: "https://www.figma.com/file/KppDzWtrEi3yASHX0ta4Li/Sustainability-Victoria?node-id=1012%3A15501",
      icon: "bxl:figma",
      title: "Figma Design",
    },
    {
      id: 2,
      link: "https://www.figma.com/proto/KppDzWtrEi3yASHX0ta4Li/Sustainability-Victoria?node-id=1026%3A15502&scaling=scale-down&page-id=1012%3A15501&starting-point-node-id=1026%3A15502&show-proto-sidebar=1",
      icon: "bxl:figma",
      title: "Figma Prototype",
    },
    {
      id: 3,
      link: "https://studiomorte.medium.com/an-app-design-exploration-sustainability-victoria-bba40518dc40",
      icon: "bi:medium",
      title: "Medium Article #1",
    },
    {
      id: 4,
      link: "https://studiomorte.medium.com/sustainability-victoria-when-accessibility-small-space-living-and-augmented-reality-collide-deaf9ff71c35",
      icon: "bi:medium",
      title: "Medium Article #2",
    },
  ];

  const designConceptsLink = [
    {
      id: 1,
      link: "https://studiomorte.medium.com/an-app-design-exploration-sustainability-victoria-bba40518dc40",
      icon: "bi:medium",
      title: "Medium Article #1",
    },
  ];

  const finalDesignLink = [
    {
      id: 1,
      link: "https://studiomorte.medium.com/sustainability-victoria-when-accessibility-small-space-living-and-augmented-reality-collide-deaf9ff71c35",
      icon: "bi:medium",
      title: "Medium Article #2",
    },
  ];

  return (
    <>
      <div className="susvic">
        <header className="project__header">
          <img
            className="project__logo"
            src={brandLogo}
            alt="Sustainability Victoria Logo"
          />
          <div className="project__hero-overlay"></div>
          <img
            className="project__hero"
            src={headerImg}
            alt="Collection of screens designed for Sustainability Victoria"
          />
        </header>

        <section className="project__container">
          <section className="project__summary">
            <h1 className="hidden">Project Summary</h1>
            <div className="written left">
              <h2>Overview</h2>
              <p>
                Sustainability Victoria is a website dedicated to helping
                Victorian citizens transition to a circular, climate-resilient
                economy. They're seeking to help educate Australian's on how to
                grow their own food and provide recipes and cooking ideas to
                make good use of their newly harvested crops.
              </p>
              <p>
                The brief requires a full mobile app prototype realised by
                conducting extensive user research. Sustainability Victoria's
                existing branding must be adhered to and modern UX design
                principles and trends must be leveraged to suit a modern
                audience.
              </p>
              <div className="project__status">
                <p>
                  Project Status:
                  <span className="italic"> Complete</span>
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
                Sustainability Victoria is seeking to educate Australians on how
                to grow their own food and cook meals at home.
              </p>
              <p>
                Create a mobile application that leverages UX design principles
                and design trends to suit a modern audience.
              </p>
            </div>

            <div className="project__goals written left bullets">
              <h3>Project Goals</h3>
              <BulletList items={projectGoals} />
            </div>

            <div className="project__solution written right">
              <h3>The Solution</h3>
              <p>
                Leveraging Augmented Reality, the final solution focuses on
                educating users on small-space gardening and supporting them
                with a genuinely useful app design. The app is loaded with an
                abundance of information, a helpful calendar & reminders
                feature, and the ability to use AR to 'scan and save' your
                garden.
              </p>
              <p>
                Future development of the app could include partnerships with
                major companies to suggest gardening materials, plants, etc. to
                further enhance the user experience and the apps profitability.
              </p>
            </div>

            <div className="project__image--feature full-width">
              <img src={featureImg} alt="mockup of final mobile app design" />
            </div>
          </section>

          <section className="project__case-study">
            <h2 className="project__heading full-width brand-display xxl">
              <div
                className="project__heading-rectangle"
                aria-hidden="true"
              ></div>
              <span>user research</span>
            </h2>

            <div className="written left">
              <p>
                Following some brief topic research, extensive user research was
                conducted to fully understand the needs of potential users. What
                were the unknowns? Who would find the potential app most useful?
                What are their needs?
              </p>
              <p>
                To answer these questions I released an online questionnaire
                asking about the responders concerns about climate change, their
                living situation, how often they cook, and about their
                experience with growing their own food. I also conducted several
                surveys looking for more indepth answers to similar questions.
              </p>
              <p>
                With 40 responses to the online quiz I used sticky notes (and a
                lot of wall space) to create an affinity map to help visualise
                the data.
              </p>
            </div>

            <div className="written left bullets">
              <h3>User Goals</h3>
              <BulletList items={userGoals} />
            </div>

            <div className="quote right">
              <p>
                Time was identified as a huge issue for all age groups in all
                living situations, impacting their ability to cook and garden at
                home.
              </p>
              <p>
                Lack of knowledge about cooking was cited exclusively by young
                people.
              </p>
              <p>
                Knowledge about small-space gardening was an issue for many
                responders, with many noting that space is an inhibiting factor
                for them.
              </p>
            </div>

            <img
              src={research}
              alt="large-scale affinity mapping in black and white"
              className="project__image--large margin-width"
            />

            <div className="swiper__persona">
              <ProjectSwiper images={personas} />
            </div>

            <div className="project__staggered-container">
              <div className="written">
                <h3>Scenario: Jodie Shenfield</h3>
                <p>
                  Jodie sits outside on the couch sipping a soothing cup of
                  chamomile tea. Looking around the garden she see's the
                  potential for a lovely vegetable patch, possibly some fruit
                  tree's along the fence, and maybe some potted herbs. She
                  starts browsing Pinterest on her mobile phone for inspiration.
                </p>
                <p>
                  After some time she realises that although she's looking
                  through some truly gorgeous gardens, she hasn't actually
                  learned anything. “How can I make my own garden look this good
                  and be practical?” She wonders, wishing that there was an
                  easier way to find out all the necessary information.
                </p>
              </div>
              <div className="written">
                <h3>Scenario: Justin Nieves</h3>
                <p>
                  With his parents out of town for a week Justin takes the
                  opportunity to teach himself how to cook some simple dinners
                  for himself and his younger sister. He spends the afternoon
                  browsing recipes instead of studying and becomes overwhelmed
                  by the sheer volume of recipes to choose from.
                </p>
                <p>
                  Eventually he decides to try and cook a chicken and bacon
                  pasta dish using a recipe he found on Google. Having never
                  cooked chicken on his own before he's nervous about
                  undercooking it - he overcooks the chicken but lucking this is
                  masked by the excessive sauce used in the pasta bake.
                </p>
              </div>
              <div className="written">
                <h3>Scenario: Rosie Cheng</h3>
                <p>
                  Rosie gets home from work earlier than usual and decides to
                  cook an easy dinner for her and her partner. She opens the
                  fridge to see what she could possibly cook only to discover
                  that they forgot to do their usual grocery shop on the
                  weekend. Thankfull they have many of the usual ingredients,
                  however all of their vegetables are off.
                </p>
                <p>
                  Frustrated, she looks at the time and decides to quickly rush
                  to the local grocery store to buy some tomatoes and spinach.
                </p>
              </div>
            </div>

            <h2 className="project__heading full-width brand-display xxl">
              <div
                className="project__heading-rectangle"
                aria-hidden="true"
              ></div>
              <span>design concepts</span>
            </h2>

            <div className="written left">
              <p>
                Informed by the user research, the brief required three
                variations of the potential app design. Based on current design
                trends I opted to include augmented reality in the app design
                following the ideation process. In the final chosen concept I
                created a design catered to visually impaired users. This
                required consideration for high-contrast, large fonts, and large
                buttons. There was also the added challenge of adapting my
                augmented reality concept for these users.{" "}
              </p>
              <p className="bold-italic">
                Click through to the Medium article #1, “An App Design
                Exploration”, to read about the design variations in full.
              </p>
            </div>

            <LinkBlock items={designConceptsLink} />

            <div className="swiper__landscape">
              <ProjectSwiper images={drafts} />
            </div>

            <h2 className="project__heading full-width brand-display xxl">
              <div
                className="project__heading-rectangle"
                aria-hidden="true"
              ></div>
              <span>a/b split testing</span>
            </h2>

            <div className="written left">
              <p>
                After finalising the entire app design I created two variations
                of the prototype which included the following changes:
              </p>
              <div className="bullets">
                <BulletList items={splitTest} />
              </div>
              <p>
                While most users preferred the pantry list images, the same
                users preferred the written list for the recipes section. A
                toggle between images and written lists would be ideal for the
                final design to give users the freedom of choice. The dashboard
                was determined to be underutilised and the suggestion was made
                to remove the navigation menu and include the links on the
                dashboard. Users also failed to use the bottom tab navigation,
                instead using the hamburger menu.
              </p>
            </div>

            <img
              src={testing}
              alt="screenshot of figma a/b split testing"
              className="project__image--aside right"
            />

            <h2 className="project__heading full-width brand-display xxl">
              <div
                className="project__heading-rectangle"
                aria-hidden="true"
              ></div>
              <span>'final design'</span>
            </h2>

            <div className="written left">
              <h3>The Original 'Final Design'</h3>
              <p>
                With user testing completed I implemented the changes to the
                design, however due to time limitations I was unable to include
                additional features suggested by the testers. Potential further
                developments included: a monthly calendar displaying harvesting
                and watering times, recipe video tutorials, a shareable shopping
                list, and barcode scanner to easily add items to the pantry
              </p>
              <p className="bold-italic">
                Click through to the Medium article #2 “Sustainability Victoria:
                When Accessibility, Small Space Living, and Augmented Reality
                Collide” to learn more.
              </p>
            </div>

            <LinkBlock items={finalDesignLink} />

            <img
              src={original}
              alt="mockup of 7 screens from original design"
              className="project__large-image margin-width"
            />

            <h2 className="project__heading full-width brand-display xxl">
              <div
                className="project__heading-rectangle"
                aria-hidden="true"
              ></div>
              <span>'final design' revisited</span>
            </h2>

            <p className="written left">
              Returning to the project at a much later date allowed me to look
              at the app design concept with fresh eyes and more experience. The
              original concept was ambitious and sought to achieve all the goals
              of the original brief in a way that bloated the design with an
              abundance of features.{" "}
            </p>

            <div className="margin-width bullets">
              <p className="written bold-italic">
                In redesigning the concept my goals were to:
              </p>
              <div className="list-container">
                <BulletList items={finalDesignLeft} />
                <BulletList items={finalDesignRight} />
              </div>
            </div>

            <img
              src={headerImg}
              alt="mockup of 3 screens from final mobile design"
              className="project__large-image margin-width"
            />

            {/* <div className="project-heading full-width conclusion">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">conclusion</span>
                    </div>

                    <div className="written left">Some stuff</div> */}

            <p className="fine-print margin-width">
              This is a fictional brief. This project has been created as part
              of an assignment in an approved course of study for Curtin
              University and contains copyright material not created by the
              author. All copyright material used remains copyright of the
              respective owners and has been used here pursuant to Section 40 of
              the Copyright Act 1968 (Commonwealth of Australia). No part of
              this work may be reproduced without consent of the original
              copyright owners.
            </p>
          </section>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default SustainabilityVic;
