/* IMPORTS */
import Footer from './../components/Footer'
import { Icon } from '@iconify/react';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import FigmaEmbed from 'react-figma-embed';

/* IMAGES */
import bullet from './../images/bullet.png'
import headerImg from './../images/stauntonv3.png'
import featureImg from './../images/staunton1.png'
import brandLogo from './../images/staunton-logo.png'
import persona1 from './../images/persona-jason.png'
import persona2 from './../images/persona-cathy.png'
import persona3 from './../images/persona-heather.png'
import ideation from './../images/staunton-ideation.png'
import wireframe1 from './../images/staunton-wireframes1.png'
import wireframe2 from './../images/staunton-wireframes2.png'
import mockup1 from './../images/staunton-mockup1.png'
import mockup2 from './../images/staunton-mockup2.png'


function Staunton(){

    return (
        <>
            <header className="project-pages_header">
                <img className="project-pages_logo logo-staunton" src={ brandLogo } alt="Staunton Gallery Logo"/>
                <div className="project-pages_hero-overlay"></div>
                <img className="project-pages_hero staunton-hero" src={ headerImg } alt="Collection of screens designed for Staunton Gallery"/>
            </header>
            <section className="project-pages_container">

            { /* Opening Section ------------------------------------------- */}

                <section className="project_summary">
                    <div className="opening-block written left">
                        <h2>Overview</h2>
                        <p>Staunton Gallery is a local art gallery situated in the heart of Subiaco featuring multiple exhibition spaces. The gallery curates and hosts exhibitions, provides a support network to associated artists, and houses artist studios. Heather Staunton has been operating the gallery as an independent artist since 2007 and is seeking to reimagine the galleries online presence with a brand new website.</p>
                        <p>The website design must showcase the venue, their exhibitions, artists, and history, while also providing their clientele with information regarding upcoming events. The design must reflect the creative nature of the gallery, appeal to their existing customer base, and seek to attract a younger audience.</p>
                        <br />
                        <span className="project-status">Project Status:</span><i> Development Stage</i><br />
                        <span className="fictional-brief">This is a <i><b>fictional brief</b></i>, further details at the end of this page</span>
                    </div>

                    <nav className="links-block">
                        <ul>
                            <li>
                                <Icon icon="bxl:figma"/>
                                Figma Design
                            </li>
                            <li>
                                <Icon icon="bxl:figma"/>
                                Figma Prototype
                            </li>
                            <li>
                                <Icon icon="ic:round-download"/>
                                Design System
                            </li>
                            <li>
                                <Icon icon="ic:round-download"/>
                                Full Documentation
                            </li>
                            <li>
                                <Icon icon="ph:codepen-logo-fill"/>
                                Codepen
                            </li>
                        </ul>
                    </nav>

                    <div className="problem-statement full-width">
                        <p>Staunton Gallery wants to reimagine their online presence with a brand new website that reflects the creative nature of the gallery in a professional, yet aesthetically pleasing manner.</p>
                        <p>The design must showcase the venue, their exhibitions, artists, and history, while providing information on upcoming events.</p>
                    </div>

                    <div className="project-goals written left bullets">
                        <h2>Project Goals</h2>
                        <ul>
                            <li><img src={ bullet } alt="bullet point"/><span>Create an aesthetically pleasing design that leverages white space to convey the 'feeling' that the user is browsing through a physical gallery</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Feature artworks and photography as key structural elements of each page, creating an editoral style design</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Utilise subtle animations to engage users</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Strategically plan page navigation to limit clicks and encourage engagement</span></li>
                        </ul>
                    </div>

                    <div className="project-solution written right">
                        <h2>The Solution</h2>
                        <p>Featuring a soft colour palette, asymmetrical layout, and geometric colour blocks, the final design is a unique and modern website that's easy to navigate and pleasant to browse. The minimalistic design accomodates the needs of older users, while the subtle animations and clean, editorial style design simultaneously appeals to a younger audience.</p>
                        <p>The final design is fully responsive, with careful consideration given to layout adjustments made for mobile devices.</p>
                    </div>

                    <div className="project-feature full-width">
                        <img src={featureImg} />
                    </div>
                </section>


{ /* Case Study Section ------------------------------------- */ }

                <section className="staunton-case-study">
                    <div className="project-heading first-heading full-width">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">research</span>
                    </div>

                    <div className="written left">
                        <p>To understand the needs of the project brief I initially conducted topic research focusing on understanding what <i>artist studios</i> and <i>resident artists</i> are. I also researched other small art galleries found throughout Perth, analysing their online presence including social media pages.</p>
                        <p>I discovered that small art galleries typically feature raw and unfinished materials in their buildings, imperfections that give these spaces a relaxed and inviting atmosphere</p>
                    </div>
                    
                    <div className="quote right staunton-research-quote">
                        <p>“Many young people do not feel at home in art galleries or are inhibited from visiting them by the very way in which these institutions collect and display art” (Mason, 2006)</p>
                    </div>

                    <div className="written left">
                        <h2>Competitor Analysis</h2>
                        <p>Based on my analysis of art galleries from around the world I discovered that there’s a tendency to present a plethora of information to the user at any given moment. White space is used in an attempt to give this content space to breathe, but the contrasting colours and photography can quickly cause overwhelm. Notably, Frans Hals Museum has an incredibly unique and creative website that features microinteractions, playful colours, and huge typography that engages users.</p>
                    </div>

                    <div className="written left">
                        <h2>User Research</h2>
                        <p>Initial user research revealed that although art is enjoyed by people of all ages and genders, those that typically browse art galleries tend to be more educated, well-paid, and professional. I also uncovered interviews suggesting that young people believe that art galleries are uninviting, silent, and cold.</p>
                    </div>

    { /* Slider One ------------------------------------- */ }
                    <div className="slider_container">
                        {/* https://github.com/express-labs/pure-react-carousel */}
                        <CarouselProvider
                                visibleSlides={2.2}
                                totalSlides={3}
                                step={1}
                                dragStep={1}
                                naturalSlideWidth={400}
                                naturalSlideHeight={500}
                        >  
                            <Slider>
                                <Slide index={0}>
                                    <Image src={persona1} />
                                </Slide>
                                <Slide index={1}>
                                    <Image src={persona2} />
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
    { /* Slider One END ------------------------------------- */ }


                    <div className="project-heading full-width ideation">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">ideation & wireframes</span>
                    </div>

                    <div className="written left">
                        <p>Initial stages of ideation involved multiple quick brainstorms, followed by extensive sketching of a range of concepts aiming for a high quantity of potential website layouts. To help filter through the options I used red and green sticky dots to vote for a design element.</p>
                        <p>I then created low-fidelity mockups in Figma to visualise these chosen sketches.</p>
                    </div>

    { /* Slider Two ------------------------------------- */ }
                    <div className="slider_container rectangle-images">
                        {/* https://github.com/express-labs/pure-react-carousel */}
                        <CarouselProvider
                                visibleSlides={1.2}
                                totalSlides={3}
                                step={1}
                                dragStep={1}
                                naturalSlideWidth={1400}
                                naturalSlideHeight={700}
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
                    </div>

    { /* Slider Two END ------------------------------------- */ }

                    <div className="project-heading full-width mockups">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">high-fidelity mockups</span>
                    </div>

                    <div className="written left">
                        <p>From the initial wireframes I created high-fidelity mockups that feature parallax animation. Ultimately I decided to remove this as, while this parallax animation looked interesting and unique, it didn’t serve to enhance the artworks or photography on display.</p>
                        <p>Upon removal of the large background images I opted to include more of the brand colour in the design, choosing to strategically add colour blocks to various sections of the design. These blocks of colour add to the structure of the website and an element of interest without taking away from the incredible artworks on display.</p>
                        <p className="bold-italic">Click through to the Figma Design to explore the design iterations and responsive variations.</p>
                    </div>

                    <div className="link-body">
                        <ul>
                            <li>
                                <Icon icon="bxl:figma"/>
                                Figma Design
                            </li>
                        </ul>
                    </div>

    { /* Slider Three ------------------------------------- */ }
                    <div className="slider_container rectangle-images">
                        {/* https://github.com/express-labs/pure-react-carousel */}
                        <CarouselProvider
                                visibleSlides={1.2}
                                totalSlides={2}
                                step={1}
                                dragStep={1}
                                naturalSlideWidth={1400}
                                naturalSlideHeight={700}
                        >  
                            <Slider>
                                <Slide index={0}>
                                    <h3>Original Mockup</h3>
                                    <Image src={mockup1} />
                                </Slide>
                                <Slide index={1}>
                                    <h3>Redesigned Mockup</h3>
                                    <Image src={mockup2}/>
                                </Slide>

                            </Slider>
                        </CarouselProvider>
                    </div>

                    <div className="mobile-image-container">
                        <div>
                            <h3>Original Mockup</h3>
                            <img src={ mockup1 } alt="Original mockups of the Staunton Gallery website"/>
                        </div>
                        <div>
                            <h3>Redesigned Mockup</h3>
                            <img src={ mockup2 } alt="Redesigned mockups of the Staunton Gallery website"/>
                        </div>
                    </div>

    { /* Slider Three END ------------------------------------- */ }

                    <div className="project-heading full-width prototype">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">prototype</span>
                    </div>

                    <div className="project_figma-container">
                        { /* https://github.com/nagelflorian/react-figma-embed */ }
                        <FigmaEmbed url="https://www.figma.com/proto/BSzPFzFGqQiWPlmDEri3DE/Staunton-Gallery?node-id=727%3A5551&scaling=scale-down&page-id=727%3A4868&starting-point-node-id=727%3A5551"/>
                    </div>

                    <div className="project-heading full-width design-system">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">design system</span>
                    </div>

                    <div className="written left">Some stuff</div>

                    <div className="project-heading full-width conclusion">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">conclusion</span>
                    </div>

                    <div className="written left">Some stuff</div>

                    <div className="project_fine-print">
                        <p>This is a fictional brief. This project has been created as part of an assignment in an approved course of study for Curtin University and contains copyright material not created by the author. All copyright material used remains copyright of the respective owners and has been used here pursuant to Section 40 of the Copyright Act 1968 (Commonwealth of Australia). No part of this work may be reproduced without consent of the original copyright owners.</p>
                        <div className="project_references">
                            <p><b>References</b></p>
                            <p>Mason, David. 2006. "'The feeling of exclusion': Young peoples' perceptions of art galleries." Museum Management and Curatorship 21 (1): 20-31. https://doi.org/10.1016/j.musmancur.2005.11.002. </p>
                        </div>
                    </div>


                </section>
            </section>
            <Footer />
        </>
    )
}

export default Staunton