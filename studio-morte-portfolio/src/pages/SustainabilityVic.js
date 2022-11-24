/* IMPORTS */
import Footer from './../components/Footer'
import { Icon } from '@iconify/react';
import React from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import FigmaEmbed from 'react-figma-embed';

/* IMAGES */
import bullet from './../images/bullet.png'
import headerImg from './../images/susvic1.jpg'
import featureImg from './../images/sustainabilityvic1.jpg'
import brandLogo from './../images/logo-sustainabilityvic.png'
import research from './../images/research-susvic1.jpg'
import persona1 from './../images/persona-susvic1.jpg'
import persona2 from './../images/persona-susvic2.jpg'
import persona3 from './../images/persona-susvic3.jpg'
import ideation from './../images/ideation-susvic.jpg'
import wireframe1 from './../images/wireframes-susvic1.jpg'
import wireframe2 from './../images/wireframes-susvic2.jpg'
import testing from './../images/testing-susvic.jpg'
import original from './../images/original-susvic.jpg'


function SustainabilityVic(){
    return (
        <>
            <header className="project-pages_header">
                <img className="project-pages_logo logo-sustainabilityvic" src={ brandLogo } alt="Sustainability Victoria Logo"/>
                <div className="project-pages_hero-overlay"></div>
                <img className="project-pages_hero sustainabilityvic-hero" src={ headerImg } alt="Collection of screens designed for Sustainability Victoria"/>
            </header>
            <section className="project-pages_container">

            { /* Opening Section ------------------------------------------- */}
                <section className="project_summary">
                    <div className="opening-block written left">
                        <h2>Overview</h2>
                        <p>Sustainability Victoria is a website dedicated to helping Victorian citizens transition to a circular, climate-resilient economy. They're seeking to help educate Australian's on how to grow their own food and provide recipes and cooking ideas to make good use of their newly harvested crops.</p>
                        <p>The brief requires a full mobile app prototype realised by conducting extensive user research. Sustainability Victoria's existing branding must be adhered to and modern UX design principles and trends must be leveraged to suit a modern audience.</p>
                        <br />
                        <span className="project-status">Project Status:</span><i> Complete</i><br />
                        <span className="fictional-brief">This is a <i><b>fictional brief</b></i>, further details at the end of this page</span>
                    </div>

                    <nav className="links-block">
                        <ul>
                            <a href="https://www.figma.com/file/KppDzWtrEi3yASHX0ta4Li/Sustainability-Victoria?node-id=1012%3A15501">
                                <li>
                                    <Icon icon="bxl:figma"/>
                                    Figma Design
                                </li>
                            </a>
                            <a href="https://www.figma.com/proto/KppDzWtrEi3yASHX0ta4Li/Sustainability-Victoria?node-id=1026%3A15502&scaling=scale-down&page-id=1012%3A15501&starting-point-node-id=1026%3A15502&show-proto-sidebar=1">
                                <li>
                                    <Icon icon="bxl:figma"/>
                                    Figma Prototype
                                </li>
                            </a>

                            {/* <li>
                                <Icon icon="ic:round-download"/>
                                Full Documentation
                            </li> */}

                            <a href="https://studiomorte.medium.com/an-app-design-exploration-sustainability-victoria-bba40518dc40">
                                <li>
                                    <Icon icon="bi:medium" />
                                    Medium Article #1
                                </li>
                            </a>
                            <a href="https://studiomorte.medium.com/sustainability-victoria-when-accessibility-small-space-living-and-augmented-reality-collide-deaf9ff71c35">
                                <li>
                                    <Icon icon="bi:medium" />
                                    Medium Article #2
                                </li>
                            </a>
                        </ul>
                    </nav>

                    <div className="problem-statement full-width">
                        <p>Sustainability Victoria is seeking to educate Australians on how to grow their own food and cook meals at home.</p>
                        <p>Create a mobile application that leverages UX design principles and design trends to suit a modern audience.</p>
                    </div>

                    <div className="project-goals written left bullets">
                        <h2>Project Goals</h2>
                        <ul>
                            <li><img src={ bullet } alt="bullet point"/><span>Create an aesthetically pleasing and practical app design that is accessible and educational</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Utilise Augmented Reality to enhance the user experience, leveraging the novelty of AR while providing a genuinely useful service</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Provide users with easy access to the knowledge required to grow and cook their own food</span></li>
                        </ul>
                    </div>

                    <div className="project-solution written right">
                        <h2>The Solution</h2>
                        <p>Leveraging Augmented Reality, the final solution focuses on educating users on small-space gardening and supporting them with a genuinely useful app design. The app is loaded with an abundance of information, a helpful calendar & reminders feature, and the ability to use AR to ‘scan and save’ your garden.</p>
                        <p>Future development of the app could include partnerships with major companies to suggest gardening materials, plants, etc. to further enhance the user experience and the apps profitability.</p>
                    </div>

                    <div className="project-feature full-width">
                        <img src={featureImg} />
                    </div>
                </section>
                    
            { /* Case Study Section ------------------------------------- */ }

                <section className="project-pages_case-study">
                    <div className="project-heading first-heading full-width">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">user research</span>
                    </div>

                    <div className="written left">
                        <p>Following some brief topic research, extensive user research was conducted to fully understand the needs of potential users. What were the unknowns? Who would find the potential app most useful? What are their needs?</p>
                        <p>To answer these questions I released an online questionnaire asking about the responders concerns about climate change, their living situation, how often they cook, and about their experience with growing their own food. I also conducted several surveys looking for more indepth answers to similar questions.</p>
                        <p>With 40 responses to the online quiz I used sticky notes (and a lot of wall space) to create an affinity map to help visualise the data.</p>
                    </div>

                    <div className="project-large-image margin-width">
                        <img src={research} />
                    </div>

                    <div className="project-goals written left bullets">
                        <h2>User Goals</h2>
                        <ul>
                            <li><img src={ bullet } alt="bullet point"/><span>Learn how to grow in a small space</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Gardening in as little time as possible</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Cook meals at home more often and use home-grown ingredients</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Limit their impact on climate change by growing their own food to live more sustainably</span></li>
                        </ul>
                    </div>

                    <div className="quote right susvic-quote-research">
                        <p>Time was identified as a huge issue for all age groups in all living situations, impacting their ability to cook and garden at home.</p>
                        <p>Lack of knowledge about cooking was cited exclusively by young people.</p>
                        <p>Knowledge about small-space gardening was an issue for many responders, with many noting that space is an inhibiting factor for them.</p>
                    </div>

                { /* Slider One ------------------------------------- */ }
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

                    <div className="project-pages_staggered-container">
                        <div className="written left">
                            <h2>Scenario: Jodie Shenfield</h2>
                            <p>Jodie sits outside on the couch sipping a soothing cup of chamomile tea. Looking around the garden she see's the potential for a lovely vegetable patch, possibly some fruit tree's along the fence, and maybe some potted herbs. She starts browsing Pinterest on her mobile phone for inspiration.</p>
                            <p>After some time she realises that although she's looking through some truly gorgeous gardens, she hasn't actually learned anything. “How can I make my own garden look this good and be practical?” She wonders, wishing that there was an easier way to find out all the necessary information.</p>
                        </div>
                        <div className="written right">
                            <h2>Scenario: Justin Nieves</h2>
                            <p>With his parents out of town for a week Justin takes the opportunity to teach himself how to cook some simple dinners for himself and his younger sister. He spends the afternoon browsing recipes instead of studying and becomes overwhelmed by the sheer volume of recipes to choose from.</p>
                            <p>Eventually he decides to try and cook a chicken and bacon pasta dish using a recipe he found on Google. Having never cooked chicken on his own before he's nervous about undercooking it - he overcooks the chicken but lucking this is masked by the excessive sauce used in the pasta bake.</p>
                        </div>
                        <div className="written left">
                            <h2>Scenario: Rosie Cheng</h2>
                            <p>Rosie gets home from work earlier than usual and decides to cook an easy dinner for her and her partner. She opens the fridge to see what she could possibly cook only to discover that they forgot to do their usual grocery shop on the weekend. Thankfull they have many of the usual ingredients, however all of their vegetables are off.</p>
                            <p>Frustrated, she looks at the time and decides to quickly rush to the local grocery store to buy some tomatoes and spinach.</p>
                        </div>
                    </div>

                    <div className="project-heading full-width space">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">design concepts</span>
                    </div>

                    <div className="written left">
                        <p>Informed by the user research, the brief required three variations of the potential app design. Based on current design trends I opted to include augmented reality in the app design following the ideation process. In the final chosen concept I created a design catered to visually impaired users. This required consideration for high-contrast, large fonts, and large buttons. There was also the added challenge of adapting my augmented reality concept for these users. </p>
                        <p className="bold-italic">Click through to the Medium article #1, “An App Design Exploration”, to read about the design variations in full.</p>
                    </div>

                    <div className="link-body">
                        <ul>
                            <a href="https://studiomorte.medium.com/an-app-design-exploration-sustainability-victoria-bba40518dc40">
                                <li>
                                    <Icon icon="bi:medium" />
                                    Medium Article #1
                                </li>
                            </a>
                        </ul>
                    </div>

                { /* Slider Two ------------------------------------- */ }
                    <div className="slider_container rectangle-images">
                        {/* https://github.com/express-labs/pure-react-carousel */}
                        <CarouselProvider
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
                    </div>
                { /* Slider Two END ------------------------------------- */ }

                    <div className="project-heading full-width testing">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">a/b split testing</span>
                    </div>

                    <div className="written left">
                        <p>After finalising the entire app design I created two variations of the prototype which included the following changes:</p>
                        <div className="bullets">
                            <ul>
                                <li><img src={ bullet } alt="bullet point"/><span>Navigation menu (hamburger/bottom tabs)</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Plants list (larger/smaller photos)</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Plant info icon colours</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Pantry items (written/visual list)</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Recipes (written/visual list)</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Recipes ('save'/'save to cookbook')</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Dashboard notifications (specific/ambiguous)</span></li>
                            </ul>
                        </div>
                        <p>While most users preferred the pantry list images, the same users preferred the written list for the recipes section. A toggle between images and written lists would be ideal for the final design to give users the freedom of choice. The dashboard was determined to be underutilised and the suggestion was made to remove the navigation menu and include the links on the dashboard. Users also failed to use the bottom tab navigation, instead using the hamburger menu.</p>
                    </div>

                    <div className="project_side-image right">
                        <img src={ testing } />
                    </div>

                    <div className="project-heading full-width final-design">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">'final design'</span>
                    </div>

                    <div className="written left">
                        <h2>The Original 'Final Design'</h2>
                        <p>With user testing completed I implemented the changes to the design, however due to time limitations I was unable to include additional features suggested by the testers. Potential further developments included: a monthly calendar displaying harvesting and watering times, recipe video tutorials, a shareable shopping list, and barcode scanner to easily add items to the pantry</p>
                        <p className="bold-italic">Click through to the Medium article #2 “Sustainability Victoria: When Accessibility, Small Space Living, and Augmented Reality Collide” to learn more.</p>
                    </div>

                    <div className="link-body">
                        <ul>
                            <a href="https://studiomorte.medium.com/sustainability-victoria-when-accessibility-small-space-living-and-augmented-reality-collide-deaf9ff71c35">
                                <li>
                                    <Icon icon="bi:medium" />
                                    Medium Article #2
                                </li>
                            </a>
                        </ul>
                    </div>

                    <div className="project-large-image margin-width">
                        <img src={ original } />
                    </div>

                    <div className="project-heading full-width final-design">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">'final design' revisited</span>
                    </div>

                    <div className="written left">
                        <p>Returning to the project at a much later date allowed me to look at the app design concept with fresh eyes and more experience. The original concept was ambitious and sought to achieve all the goals of the original brief in a way that bloated the design with an abundance of features. </p>
                    </div>

                    <div className="further-development bullets susvic-revisited">
                        <p className="written bold-italic">In redesigning the concept my goals were to:</p>
                        <div className="list-container">
                            <ul className="written">
                                <li><img src={ bullet } alt="bullet point"/><span>Improve the apps accessibility by adding subtitles for deaf users</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Dreamtime stories and location information narrated by Indigenous persons from each region, adding to the authenticity of the experience</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>A fully realised augmented reality experience that enhances the users learning and discovery</span></li>
                            </ul>
                            <ul className="written">
                                <li><img src={ bullet } alt="bullet point"/><span>Notifications that encourage users to interact with the app and/or notify users about how many times they've listened to a particular sound</span></li>
                                <li><img src={ bullet } alt="bullet point"/><span>Include a favourites/saved section so that users can easily return to the sounds they appreciate the most</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-large-image margin-width">
                        <img src={ headerImg } />
                    </div>

                    {/* <div className="project-heading full-width conclusion">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">conclusion</span>
                    </div>

                    <div className="written left">Some stuff</div> */}

                    <div className="project_fine-print">
                        <p>This is a fictional brief. This project has been created as part of an assignment in an approved course of study for Curtin University and contains copyright material not created by the author. All copyright material used remains copyright of the respective owners and has been used here pursuant to Section 40 of the Copyright Act 1968 (Commonwealth of Australia). No part of this work may be reproduced without consent of the original copyright owners.</p>
                    </div>

                </section>
            </section>
            <Footer />
        </>
    )
}

export default SustainabilityVic