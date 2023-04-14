import React from "react";
import Footer from "./../components/Footer";
import BulletList from "../components/BulletList";
import LinkBlock from "../components/LinkBlock";

/* IMAGES */
import headerImg from "./../images/djaliny2.jpg";
import featureImg from "./../images/djaliny1.jpg";
import brandLogo from "./../images/logo-djaliny.png";
import curtinLogo from "./../images/logo-curtin.png";
import adobeLogo from "./../images/logo-adobe.png";
import linkedinLogo from "./../images/logo-linkedin.png";
import unityLogo from "./../images/logo-unity.png";
import persona1 from "./../images/persona-djaliny1.jpg";
import persona2 from "./../images/persona-djaliny2.jpg";

function Djaliny() {
  const projectGoals = [
    {
      id: 1,
      copy: "Utilise all of our design experience to understand the brief requirements and produce a top-notch design that the team would be proud to present",
    },
    {
      id: 2,
      copy: "Create a unique mobile app that genuinely connects people to country and that is respectful of Aboriginal and Torres Straight Islander peoples",
    },
  ];

  const furtherDevLeft = [
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

  const furtherDevRight = [
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
      link: "https://xd.adobe.com/view/ea91c219-d72c-4cfc-a53f-b48d3d583a74-bfc2/",
      icon: "ci:adobe-xd",
      title: "Adobe Xd Design",
    },
    {
      id: 2,
      link: "https://www.canva.com/design/DAEkRub92Hs/dNB19iOXZMKl9oht2fl1tw/view?utm_content=DAEkRub92Hs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      icon: "simple-icons:canva",
      title: "Presentation & Prototype",
    },
    {
      id: 3,
      link: "https://www.youtube.com/watch?v=xsF3di2qqXM",
      icon: "akar-icons:youtube-fill",
      title: "Official Highlight Reel",
    },
  ];

  return (
    <>
      <header className="project-pages_header">
        <img
          className="project-pages_logo logo-djaliny"
          src={brandLogo}
          alt="Sustainability Victoria Logo"
        />
        <div className="project-pages_hero-overlay"></div>
        <img
          className="project-pages_hero djaliny-hero"
          src={headerImg}
          alt="Collection of screens designed for Sustainability Victoria"
        />
      </header>

      <section className="project-pages_container">
        <section className="project_summary">
          <h1 className="djaliny-title">
            <p className="hidden">Project Summary</p>
            <p className="xxl">Curtin Creative Jam 2021</p>
            <p className="xl">
              First Place <strong className="italic">Best Overall</strong>{" "}
              Design
            </p>
          </h1>
          <div className="opening-block written left">
            <h3>Overview</h3>
            <p>
              The Curtin Creative Jam is an intensive design competition open to
              all current Curtin students. The CCJ21 theme focused on the NAIDOC
              2021 theme "Heal Country!".
            </p>
            <p>
              Teams of students from all Curtin University campuses worldwide
              worked to create a design that fulfilled the challenge brief
              within a four day time period, with the 4th day dedicated to
              presenting their designs to their peers and industry leaders.
            </p>
            <div className="project-status">
              <p>
                Project Status:
                <strong className="italic"> Complete</strong>
              </p>
              <p>
                This is a
                <strong className="bold-italic"> fictional brief</strong>,
                further details at the end of this page
              </p>
            </div>
          </div>

          <LinkBlock items={topLinks} />

          <div className="djaliny-sponsors">
            <h3>Sponsored By</h3>
            <div>
              <img src={curtinLogo} alt="curtin university logo" />
              <img src={adobeLogo} alt="adobe logo" />
              <img src={linkedinLogo} alt="linked in logo" />
              <img src={unityLogo} alt="unity logo" />
            </div>
          </div>

          <div className="problem-statement full-width">
            <p>
              Design a digital interactive experience that helps to build
              understanding between Australian Aboriginal and Torres Straight
              Islander peoples and those of other cultural backgrounds, based on
              a foundation of integrity and respect.
            </p>
          </div>

          <div className="project-goals written left bullets">
            <h3>Project Goals</h3>
            <BulletList items={projectGoals} />
          </div>

          <div className="project-solution written right">
            <h3>The Solution</h3>
            <p>
              Djaliny (Noongar for “listening”) is a mobile app that delivers a
              relaxing auditory experience through nature sounds, music, and
              Dreamtime stories. Users can choose to listen to audio from
              anywhere in the country, or use location services to discover
              sounds and stories as they travel in the real world.
            </p>
            <p>
              By encouraging users to explore the land around them and immerse
              themselves in The Dreamtime and the natural sounds of the past we
              can help people feel more relaxed, more knowledgable, and more
              connected to country.
            </p>
          </div>

          <div className="project-feature full-width">
            <img
              src={featureImg}
              alt="mockup of 3 screens from the final design"
            />
          </div>
        </section>

        {/* CASE STUDY Section ------------------------------------------- */}

        <section className="project-pages_case-study">
          <h2 className="project-heading first-heading full-width">
            <div className="project-heading_rectangle" aria-hidden="true"></div>
            <span className="brand-display xxl">my role as team leader</span>
          </h2>

          <div className="written left">
            <p>
              As team leader I oversaw each step of the design process, created
              an action plan, and delegated tasks based on the strength of each
              team member. With the three of us juggling work commitments
              project planning was critical to the success of the design.
            </p>
            <p>
              I personally represented the team in discussions with an
              Australian First Nation's Cultural Consultant and professional
              designers. Ideas from each team member were discussed at length,
              addressing any potential cultural concerns and receiving
              constructive feedback.
            </p>
            <p>
              I also conducted the majority of the topic and user research,
              assisted with ideation, and helped to fine-tune the app design by
              focusing on the small details. I created the final presentation
              document with assistance from my two team members, who both
              ensured that the app prototype had the appropriate audio included.
            </p>
          </div>

          <div className="quote right djaliny-role-quote">
            <p>The team consisted of:</p>
            <p>Rachael Moriconi (team leader and researcher)</p>
            <p>Arthur Passos (designer & prototyper)</p>
            <p>Mali Merttens (ideation & audio)</p>
          </div>

          <h2 className="project-heading full-width the-process">
            <div className="project-heading_rectangle" aria-hidden="true"></div>
            <span className="brand-display xxl">the process</span>
          </h2>

          <div className="written left">
            <h3>Ideation</h3>
            <p>
              Following the day one opening activities on campus the three of us
              spent the evening brainstorming potential design ideas. The next
              day I collated these ideas and pitched them to a small group of
              design leaders and a cultural advisor. The opportunity to bounce
              ideas around the group was incredible and truly helped in
              narrowing the ideas down to one solid concept. With confirmation
              from all group members we began brainstorming specific app
              features and sketching low-fidelity wireframes.
            </p>
          </div>

          <div className="written left">
            <h3>Research</h3>
            <p>
              Given the short timeframe of the design challenge, research and
              ideation were performed simultaneously. The research process
              focused on understanding the potential target audience, searching
              for information about Aboriginal languages and Dreamtime stories,
              and exploring the feasibility of tying native nature sounds to
              specific locations.
            </p>
            <p>
              We determined that the ideal target audience for the app design
              would be Millenials as they're considered to be optimistic about
              the future and social change, are likely to use social media, want
              to make a positive impact on society, and are able to teach their
              parents and their children.
            </p>
          </div>

          <div className="djaliny-persona-container right">
            <div className="quote djaliny-persona">
              <img
                src={persona1}
                alt="Girl with brown hair looking at the camera"
              />
              <p>
                Jessica has an appreciation for Australian landscape and nature,
                but knows a limited amount about indigenous history and culture
                from what she learnt in school
              </p>
            </div>
            <div className="quote djaliny-persona">
              <img
                src={persona2}
                alt="Young first nation family looking at camera"
              />
              <p>
                David feels disconnected from his Albany roots due to city
                living, but he's always trying to find ways to reconnect with
                his culture and family
              </p>
            </div>
          </div>

          <div className="written left">
            <h3>Mockups & Prototyping</h3>
            <p>
              With the sketched wireframes finalised we began creating
              high-fidelity mockups, making adjustments to the sketched design
              where necessary. While Arthur worked hard on the app design late
              into the night I intermittently jumped into the file to make minor
              aesthetic adjustments on the fly. Meanwhile Mali spent the evening
              creating a voice recording of a Dreamtime story that would be
              included in the final prototype video.
            </p>
          </div>

          <div className="written left">
            <h3>Pitch Presentation</h3>
            <p>
              With little sleep and the presentations start time looming myself
              and Mali arrived on campus early to put together the final
              presentation and make final adjustments to the prototype,
              including searching for appropriate nature sounds. Later, the
              three of us planned and practiced our presentation before making
              our way to the final day's activities.
            </p>
          </div>

          <div className="quote right djaliny-pitch-quote">
            <p>
              "Encouraging users to explore the lands around them and immerse
              themselves in the Dreamtime stories and the native sounds of the
              past will help people feel more connected with country."
            </p>
          </div>

          <div className="further-development">
            <h3>Further Development</h3>
            <p className="written">
              In the final presentation we also recognised some points for
              further development, listed below:
            </p>
            <div className="list-container bullets">
              <BulletList items={furtherDevLeft} />
              <BulletList items={furtherDevRight} />
            </div>
          </div>

          {/* <div className="project-heading full-width prototype">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">prototype</span>
                    </div> */}

          <h2 className="project-heading full-width conclusion">
            <div className="project-heading_rectangle" aria-hidden="true"></div>
            <span className="brand-display xxl">conclusion</span>
          </h2>

          <div className="written left">
            <p>
              Despite everyone in the room running on limited sleep, seeing the
              design solutions that other groups had created was an intriguing
              experience. We had some technical difficulties getting the audio
              working for our presentation, but we ultimately pitched our design
              in a concise manner which was a welcome change following several
              lengthy presentations.
            </p>
            <p>
              The Djaliny mobile app design was extremely well received by the
              judging panel and following the presentation we received
              constructive feedback and answered a variety of questions. The
              design was also deemed to be viable and desireable in the real
              world.
            </p>
            <p>
              Participating in the Curtin Creative Jam was a once in a lifetime
              experience and being recognised with the first place award was a
              truly incredible feeling.
            </p>
          </div>

          <div className="quote right djaliny-conclusion-quote">
            <p>
              The final design was a culmination of several ideas from each
              group member: an augmented reality app that tells history about a
              scanned location, an audiobook app for Dreamtime stories, and an
              nature sounds app.
            </p>
          </div>

          <div className="final-space full-width"></div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Djaliny;
