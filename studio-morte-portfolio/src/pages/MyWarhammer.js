/* IMPORTS */
import Footer from './../components/Footer'
import { Icon } from '@iconify/react';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import FigmaEmbed from 'react-figma-embed';

/* IMAGES */
import bullet from './../images/bullet.png'
import headerImg from './../images/warhammer-header.jpg'
import featureImg from './../images/warhammer-feature.jpg'
import warhammerLogo from './../images/logo-warhammer.png'
import battleHonoursLogo from './../images/logo-battlehonours.png'
import citadelColourLogo from './../images/logo-citadelcolour.png'
import battleHonoursImg from './../images/mockup1-2.jpg'
import citadelColourImg from './../images/citadelcolour.jpg'
import persona1 from './../images/persona-warhammer1.jpg'
import persona2 from './../images/persona-warhammer2.jpg'
import persona3 from './../images/persona-warhammer3.jpg'
import scenario1 from './../images/scenario-warhammer1.jpg'
import scenario2 from './../images/scenario-warhammer2.jpg'
import scenario3 from './../images/scenario-warhammer3.jpg'
import infoArch from './../images/ia-warhammer.jpg'


function MyWarhammer(){
    return (
        <>
            <header className="project-pages_header">
                <img className="project-pages_logo logo-warhammer" src={ warhammerLogo } alt="Warhammer Logo"/>
                <img className="project-pages_logo logo-left" src={ citadelColourLogo } alt="Citadel Colour Logo"/>
                <img className="project-pages_logo logo-right" src={ battleHonoursLogo } alt="Battle Honours Logo"/>
                <div className="project-pages_hero-overlay"></div>
                <img className="project-pages_hero warhammer-hero" src={ headerImg } alt="Collection of screens designed for My Warhammer"/>
            </header>
            <section className="project-pages_container">

            { /* Opening Section ------------------------------------------- */}
                <section className="project_summary">
                    <div className="opening-block written left">
                        <h2>Overview</h2>
                        <p>Games Workshop's Warhammer is one of, if not the, most popular and widely known tabletop miniature games in the world. Founded in 1975 the hobby has grown to include everything from board games to video games, novels to tv shows, and major tournaments to painting competitions.</p>
                        <p>While their digital platforms offer a wide variety of content, there's significant room for growth and improvement. That's where this My Warhammer redesign fits in - a colossal combination of two previous projects seeking to improve the digital experience for all Warhammer hobbyists.</p>
                        <br />
                        <span className="project-status">Project Status:</span><i> Development Stage</i><br />
                        <span className="fictional-brief">This is a <i><b>fictional brief</b></i>, further details at the end of this page</span>
                    </div>

                    <nav className="links-block">
                        <ul>
                            <a href="https://www.figma.com/file/b0wW4zp4bcrRvJp0MB1NDf/My-Warhammer?node-id=0%3A1">
                                <li>
                                    <Icon icon="bxl:figma"/>
                                    Figma Design
                                </li>
                            </a>
                            <a href="https://www.figma.com/proto/b0wW4zp4bcrRvJp0MB1NDf/My-Warhammer?node-id=153%3A3929&scaling=scale-down&page-id=0%3A1&starting-point-node-id=153%3A3929">
                                <li>
                                    <Icon icon="bxl:figma"/>
                                    Figma Prototype
                                </li>
                            </a>
                            <a href="https://vigorous-mayer-dfea3a.netlify.app/">
                                <li>
                                    <Icon icon="ri:external-link-line"/>
                                    Battle Honours Website
                                </li>
                            </a>
                            <a href="https://fanciful-custard-b67eea.netlify.app/">
                                <li>
                                    <Icon icon="ri:external-link-line" />
                                    Citadel Colour Website (WIP)
                                </li>
                            </a>
                        </ul>
                    </nav>

                    <div className="problem-statement full-width">
                        <p>Games Workshop would like to bridge the gap between the physical and digital world, creating an online space for their customers to showcase and support their hobby journey through an improved My Warhammer website.</p>
                    </div>

                    <div className="project-goals written left bullets">
                        <h2>Project Goals</h2>
                        <ul>
                            <li><img src={ bullet } alt="bullet point"/><span>Streamline the existing My Warhammer website and improve the aesthetic design</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Improve navigation between all Games Workshop websites by streamlining the main navigation menu</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Redesign the Citadel Colour 'my projects' user flow</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Adapt the Battle Honours project for use within the My Warhammer website redesign</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Include and expand upon the inventory and wishlist feature on the Citadel Colour mobile app</span></li>
                        </ul>
                    </div>

                    <div className="project-solution written right">
                        <h2>The Solution</h2>
                        <p>The reimagined My Warhammer website creates an online space for hobbyists to create and share their projects, keep track of their Battle Honours activities, and add an extensive range of Games Workshop products to their inventory or wishlist.</p>
                        <p>All necessary features of the current My Warhammer website have been maintained and the inclusion of a simplified navigation menu to be used across all Games Workshop websites further improves the overall digital experience for users.</p>
                    </div>

                    <div className="project-feature full-width">
                        <img src={featureImg} />
                    </div>
                </section>

                { /* Case Study Section ------------------------------------- */ }
                <section className="project-pages_case-study">
                    <div className="project-heading first-heading full-width">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">a quick look back</span>
                    </div>

                    <div className="warhammer-logo-container">
                        <img src={battleHonoursLogo} />
                    </div>

                    <div className="written left">
                        <p>The Battle Honours programme is designed to introduce new hobbyists to Warhammer by encouraging them to complete activities to receive exclusive rewards. The programme launched in mid 2021, a time where many potential hobbyists were isolated due to the Covid 19 pandemic, but what if this programme was available online? </p>
                    </div>

                    <div className="link-body citadel-colour">
                        <ul>
                            <a href="https://vigorous-mayer-dfea3a.netlify.app/">
                                <li>
                                    <Icon icon="ri:external-link-line" />
                                    Battle Honours Website
                                </li>
                            </a>
                        </ul>
                    </div>
                    

                    <div className="project_side-image full-width warhammer-right-image">
                        <img src={ battleHonoursImg } />
                    </div>

                    {/* <div className="warhammer-container project-pages_staggered-container">
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

                    <div className="link-body">
                        <ul>
                            <a href="https://studiomorte.medium.com/sustainability-victoria-when-accessibility-small-space-living-and-augmented-reality-collide-deaf9ff71c35">
                                <li>
                                    <Icon icon="bxl:figma"/>
                                    Figma Design
                                </li>
                            </a>
                        </ul>
                    </div> */}


                { /* Slider One ------------------------------------- */ }
                    {/* <div className="slider_container rectangle-images"> */}
                        {/* https://github.com/express-labs/pure-react-carousel */}
                        {/* <CarouselProvider
                                visibleSlides={1.2}
                                totalSlides={3}
                                step={1}
                                dragStep={1}
                                naturalSlideWidth={1000}
                                naturalSlideHeight={500}
                        >  
                            <Slider>
                                <Slide index={0}>
                                    <Image src={ideation} />
                                </Slide>
                                <Slide index={1}>
                                    <Image src={wireframe1}/>
                                </Slide>
                                <Slide index={2}>
                                    <Image src={wireframe2} />
                                </Slide>
                            </Slider>
                        </CarouselProvider>
                    </div>

                    <div className="mobile-image-container">
                        <div>
                            <img src={ ideation } alt="Original mockups of the Staunton Gallery website"/>
                        </div>
                        <div>
                            <img src={ wireframe1 } alt="Redesigned mockups of the Staunton Gallery website"/>
                        </div>
                        <div>
                            <img src={ wireframe2 } alt="Redesigned mockups of the Staunton Gallery website"/>
                        </div>
                    </div> */}
                { /* Slider One END ------------------------------------- */ }

                    <div className="warhammer-logo-container">
                        <img src={citadelColourLogo} />
                    </div>

                    <div className="written left">
                        <p>Games Workshop's very own paint range, Citadel Colour, offers hobbyists a wide variety of paints and tools to get their miniature projects looking spectacular. Currently the Citadel Colour website and mobile app offer different content, the website offering limited in comparison to the recently updated mobile app. The goal of this project was to bring the same mobile app offering of step-by-step tutorials and the inventory/wishlist to a reimagined web application, including a brand new "my projects" section to support the painting process of all Warhammer hobbyists.</p>
                        <p className="bold-italic">Click through to explore the live website. Although unfinished, development of this website has been suspended in favour of developing the redesigned My Warhammer website.</p>
                    </div>

                    <div className="link-body citadel-colour">
                        <ul>
                            <a href="https://fanciful-custard-b67eea.netlify.app/">
                                <li>
                                    <Icon icon="ri:external-link-line" />
                                    Citadel Colour Website (WIP)
                                </li>
                            </a>
                        </ul>
                        <div className="link-body-below">
                            <p><b>Sign in using the following details:</b></p>
                            <p>Email: jamesworkshop@citadel.com</p>
                            <p>Password: James1234</p>
                            <p><i>or</i></p>
                            <p>Create your own account!</p>
                        </div>
                    </div>

                    <div className="project_side-image full-width citadel-right-image">
                        <img src={ citadelColourImg } />
                    </div>

                    {/* <div className="warhammer-container project-pages_staggered-container">
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




                { /* Slider TWO ------------------------------------- */ }
                    {/* <div className="slider_container rectangle-images"> */}
                        {/* https://github.com/express-labs/pure-react-carousel */}
                        {/* <CarouselProvider
                                visibleSlides={1.2}
                                totalSlides={3}
                                step={1}
                                dragStep={1}
                                naturalSlideWidth={1000}
                                naturalSlideHeight={500}
                        >  
                            <Slider>
                                <Slide index={0}>
                                    <Image src={ideation} />
                                </Slide>
                                <Slide index={1}>
                                    <Image src={wireframe1}/>
                                </Slide>
                                <Slide index={2}>
                                    <Image src={wireframe2} />
                                </Slide>
                            </Slider>
                        </CarouselProvider>
                    </div>

                    <div className="mobile-image-container">
                        <div>
                            <img src={ ideation } alt="Original mockups of the Staunton Gallery website"/>
                        </div>
                        <div>
                            <img src={ wireframe1 } alt="Redesigned mockups of the Staunton Gallery website"/>
                        </div>
                        <div>
                            <img src={ wireframe2 } alt="Redesigned mockups of the Staunton Gallery website"/>
                        </div>
                    </div> */}
                { /* Slider TWO END ------------------------------------- */ }


                    <div className="project-heading first-heading full-width">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">user research</span>
                    </div>

                    <div className="written left">
                        <p>Through surveys, quizzes, and observations, I determined that the typical Warhammer hobbyist is middle to upper-middle class, caucasian, and aged from 16 through to 40. Hobbyists are also typically male, however this has begun to change in recent years with Games Workshop's shift toward inclusivity.</p>
                        <p>As this project encompasses features for both newcomers and experienced hobbyists multiple key personas and user journeys were identified.</p>
                    </div>

                { /* Slider THREE ------------------------------------- */ }
                    <div className="slider_container">
                        {/* https://github.com/express-labs/pure-react-carousel */}
                        <CarouselProvider
                                visibleSlides={2.2}
                                totalSlides={3}
                                step={1}
                                dragStep={1}
                                naturalSlideWidth={500}
                                naturalSlideHeight={529}
                        >  
                            <Slider>
                                <Slide index={0}>
                                    <Image src={persona1} />
                                </Slide>
                                <Slide index={1}>
                                    <Image src={persona2}/>
                                </Slide>
                                <Slide index={2}>
                                    <Image src={persona3} />
                                </Slide>
                            </Slider>
                        </CarouselProvider>
                    </div>

                    <div className="mobile-image-container mobile-personas">
                        <div>
                            <img src={ persona1 } alt="Original mockups of the Staunton Gallery website"/>
                        </div>
                        <div>
                            <img src={ persona2 } alt="Redesigned mockups of the Staunton Gallery website"/>
                        </div>
                        <div>
                            <img src={ persona3 } alt="Redesigned mockups of the Staunton Gallery website"/>
                        </div>
                    </div>
                { /* Slider THREE END ------------------------------------- */ }

                { /* Slider FOUR ------------------------------------- */ }
                    <div className="warhammer-scenarios slider_container">
                        {/* https://github.com/express-labs/pure-react-carousel */}
                        <CarouselProvider
                                visibleSlides={1.2}
                                totalSlides={3}
                                step={1}
                                dragStep={1}
                                naturalSlideWidth={900}
                                naturalSlideHeight={700}
                        >  
                            <Slider>
                                <Slide index={0}>
                                    <Image src={scenario1} />
                                </Slide>
                                <Slide index={1}>
                                    <Image src={scenario2}/>
                                </Slide>
                                <Slide index={2}>
                                    <Image src={scenario3} />
                                </Slide>
                            </Slider>
                        </CarouselProvider>
                    </div>

                    <div className="mobile-image-container mobile-scenarios">
                        <div>
                            <img src={ scenario1 } alt="Original mockups of the Staunton Gallery website"/>
                        </div>
                        <div>
                            <img src={ scenario2 } alt="Redesigned mockups of the Staunton Gallery website"/>
                        </div>
                        <div>
                            <img src={ scenario3 } alt="Redesigned mockups of the Staunton Gallery website"/>
                        </div>
                    </div>
                { /* Slider FOUR END ------------------------------------- */ }

                    <div className="further-development bullets warhammer-usergoals">
                        <h2>User Goals</h2>
                        <div className="list-container">
                            <ul className="written">
                                <li><img src={ bullet } alt="bullet point"/><span>Easy access to the full range of Games Workshop products with a straight forward way to keep track of purchases and wishlists</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Have a better experience navigating the various Games Workshop websites and easily adjust personal details and/or subscriptions</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Be able to seamlessly access the same content from multiple devices</span></li>
                            </ul>
                            <ul className="written">
                                <li><img src={ bullet } alt="bullet point"/><span>An easy way to maintain colour schemes when painting Warhammer miniatures and the ability to share colour schemes with others</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>A digital way to work through their Battle Honours programme</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-heading first-heading full-width">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">information architecture</span>
                    </div>

                    <div className="written left">
                        <p>With the complexity of this project the information architecture acted as a 'step in the right direction'. Adjustments are likely following prototyping and user testing to allow for a more seamless user flow.</p>
                    </div>

                    <div className="project-large-image margin-width">
                        <img src={ infoArch } />
                    </div>

                    <div className="project-heading full-width">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">prototype</span>
                    </div>

                    <div className="written left">
                        <p>Combining ideation, wireframing, and mockups from the original Battle Honours and Citadel Colour projects I created high-fidelity mockups, iterating several sections where necessary to achieve an ideal user flow.</p>
                        <p className="bold-italic">Click through to the Figma Design or Figma Prototype to explore the full high-fidelity mockup.</p>
                    </div>

                    <div className="link-body">
                        <ul>
                            <a href="https://www.figma.com/file/b0wW4zp4bcrRvJp0MB1NDf/My-Warhammer?node-id=0%3A1">
                                <li>
                                    <Icon icon="bxl:figma"/>
                                    Figma Design
                                </li>
                            </a>
                            <a href="https://www.figma.com/proto/b0wW4zp4bcrRvJp0MB1NDf/My-Warhammer?node-id=153%3A3929&scaling=scale-down&page-id=0%3A1&starting-point-node-id=153%3A3929">
                                <li>
                                    <Icon icon="bxl:figma"/>
                                    Figma Prototype
                                </li>
                            </a>
                        </ul>
                    </div>

                    <div className="project_figma-container">
                        { /* https://github.com/nagelflorian/react-figma-embed */ }
                        <FigmaEmbed url="https://www.figma.com/proto/b0wW4zp4bcrRvJp0MB1NDf/My-Warhammer?node-id=153%3A3929&scaling=scale-down&page-id=0%3A1&starting-point-node-id=153%3A3929"/>
                    </div>

                    <div className="project-heading full-width conclusion">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">Further Development</span>
                    </div>

                    {/* <div className="written left">Some stuff</div> */}

                    <div className="further-development bullets">
                        {/* <h2>Further Development</h2> */}
                        <div className="list-container">
                            <ul className="written">
                                <li><img src={ bullet } alt="bullet point"/><span>Improve Battle Honours experience beyond written activities. Think: online group sessions, allow users to upload photos of doing/completing activity</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Further expansion of My Projects section allowing users to link directly to Citadel Colour tutorials within their projects</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Warhammer store profiles to allow stores to showcase and share customers/their own projects, create tournament/painting events, etc.</span></li>
                            </ul>
                            <ul className="written">
                                <li><img src={ bullet } alt="bullet point"/><span>The original article about adding user profiles on the My Warhammer website suggested the ability to save Warhammer Community articles to read later and create army lists that can be shared with others</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>User testing throughout My Projects section to enhance and further streamline the experience, testing with a range of highly experienced and brand new hobbyists</span></li>
                            </ul>
                        </div>
                    </div>


                    <div className="project_fine-print">
                        <p>This is a fictional brief. This project has been created as part of an assignment in an approved course of study for Curtin University and contains copyright material not created by the author. All copyright material used remains copyright of the respective owners and has been used here pursuant to Section 40 of the Copyright Act 1968 (Commonwealth of Australia). No part of this work may be reproduced without consent of the original copyright owners.</p>
                    </div>
                  
                </section>
            </section>
            <Footer />
        </>
    )
}

export default MyWarhammer