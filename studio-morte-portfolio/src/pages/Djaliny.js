/* IMPORTS */
import Footer from './../components/Footer'
import { Icon } from '@iconify/react';
import React from 'react';

/* IMAGES */
import bullet from './../images/bullet.png'
import headerImg from './../images/djaliny2.jpg'
import featureImg from './../images/djaliny1.jpg'
import brandLogo from './../images/logo-djaliny.png'
import curtinLogo from './../images/logo-curtin.png'
import adobeLogo from './../images/logo-adobe.png'
import linkedinLogo from './../images/logo-linkedin.png'
import unityLogo from './../images/logo-unity.png'
import persona1 from './../images/persona-djaliny1.jpg'
import persona2 from './../images/persona-djaliny2.jpg'


function Djaliny(){
    return (
        <>
            <header className="project-pages_header">
                <img className="project-pages_logo logo-djaliny" src={ brandLogo } alt="Sustainability Victoria Logo"/>
                <div className="project-pages_hero-overlay"></div>
                <img className="project-pages_hero djaliny-hero" src={ headerImg } alt="Collection of screens designed for Sustainability Victoria"/>
            </header>
            <section className="project-pages_container">

            { /* Opening Section ------------------------------------------- */}
                <section className="project_summary">
                    <div className="djaliny-title">
                        <p className="xxl">Curtin Creative Jam 2021</p>
                        <p className="xl">First Place <i>Best Overall</i> Design</p>
                    </div>
                    <div className="opening-block written left">
                        <h2>Overview</h2>
                        <p>The Curtin Creative Jam is an intensive design competition open to all current Curtin students. The CCJ21 theme focused on the NAIDOC 2021 theme "Heal Country!".</p>
                        <p>Teams of students from all Curtin University campuses worldwide worked to create a design that fulfilled the challenge brief within a four day time period, with the 4th day dedicated to presenting their designs to their peers and industry leaders.</p>
                        <br />
                        <span className="project-status">Project Status:</span><i> Complete</i><br />
                        <span className="fictional-brief">This is a <i><b>fictional brief</b></i>, further details at the end of this page</span>
                    </div>

                    <nav className="links-block">
                        <ul>
                            <li>
                                <Icon icon="ci:adobe-xd" />
                                Adobe Xd Design
                            </li>
                            <li>
                                <Icon icon="ci:adobe-xd" />
                                Adobe Xd Prototype
                            </li>
                            <a href="https://www.youtube.com/watch?v=xsF3di2qqXM">
                                <li>
                                    <Icon icon="akar-icons:youtube-fill" />
                                    Official Highlight Reel
                                </li>
                            </a>
                        </ul>
                    </nav>

                    <div className="djaliny-sponsors">
                        <h2>Sponsored By</h2>
                        <div>
                            <img src={curtinLogo} />
                            <img src={adobeLogo} />
                            <img src={linkedinLogo} />
                            <img src={unityLogo} />
                        </div>
                    </div>

                    <div className="problem-statement full-width">
                        <p>Design a digital interactive experience that helps to build understanding between Australian Aboriginal and Torres Straight Islander peoples and those of other cultural backgrounds, based on a foundation of integrity and respect.</p>
                    </div>

                    <div className="project-goals written left bullets">
                        <h2>Project Goals</h2>
                        <ul>
                            <li><img src={ bullet } alt="bullet point"/><span>Utilise all of our design experience to understand the brief requirements and produce a top-notch design that the team would be proud to present</span></li>
                            <li><img src={ bullet } alt="bullet point"/><span>Create a unique mobile app that genuinely connects people to country and that is respectful of Aboriginal and Torres Straight Islander peoples</span></li>
                        </ul>
                    </div>

                    <div className="project-solution written right">
                        <h2>The Solution</h2>
                        <p>Djaliny (Noongar for “listening”) is a mobile app that delivers a relaxing auditory experience through nature sounds, music, and Dreamtime stories. Users can choose to listen to audio from anywhere in the country, or use location services to discover sounds and stories as they travel in the real world.</p>
                        <p>By encouraging users to explore the land around them and immerse themselves in The Dreamtime and the natural sounds of the past we can help people feel more relaxed, more knowledgable, and more connected to country.</p>
                    </div>

                    <div className="project-feature full-width">
                        <img src={featureImg} />
                    </div>
                </section>
                    
            { /* CASE STUDY Section ------------------------------------------- */}

                <section className="project-pages_case-study">
                    <div className="project-heading first-heading full-width">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">my role as team leader</span>
                    </div>

                    <div className="written left">
                        <p>As team leader I oversaw each step of the design process, created an action plan, and delegated tasks based on the strength of each team member. With the three of us juggling work commitments project planning was critical to the success of the design.</p>
                        <p>I personally represented the team in discussions with an Australian First Nation's Cultural Consultant and professional designers. Ideas from each team member were discussed at length, addressing any potential cultural concerns and receiving constructive feedback.</p>
                        <p>I also conducted the majority of the topic and user research, assisted with ideation, and helped to fine-tune the app design by focusing on the small details. I created the final presentation document with assistance from my two team members, who both ensured that the app prototype had the appropriate audio included.</p>
                    </div>
                    
                    <div className="quote right djaliny-role-quote">
                        <p>The team consisted of:</p>
                        <p>Rachael Moriconi (team leader and researcher)</p>
                        <p>Arthur Passos (designer & prototyper)</p>
                        <p>Mali Merttens (ideation & audio)</p>
                    </div>

                    <div className="project-heading full-width the-process">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">the process</span>
                    </div>

                    <div className="written left">
                        <h2>Ideation</h2>
                        <p>Following the day one opening activities on campus the three of us spent the evening brainstorming potential design ideas. The next day I collated these ideas and pitched them to a small group of design leaders and a cultural advisor. The opportunity to bounce ideas around the group was incredible and truly helped in narrowing the ideas down to one solid concept. With confirmation from all group members we began brainstorming specific app features and sketching low-fidelity wireframes.</p>
                    </div>

                    <div className="written left">
                        <h2>Research</h2>
                        <p>Given the short timeframe of the design challenge, research and ideation were performed simultaneously. The research process focused on understanding the potential target audience, searching for information about Aboriginal languages and Dreamtime stories, and exploring the feasibility of tying native nature sounds to specific locations.</p>
                        <p>We determined that the ideal target audience for the app design would be Millenials as they're considered to be optimistic about the future and social change, are likely to use social media, want to make a positive impact on society, and are able to teach their parents and their children.</p>
                    </div>

                    <div className="djaliny-persona-container right">
                        <div className="quote djaliny-persona">
                            <img src={ persona1 } />
                            <p>Jessica has an appreciation for Australian landscape and nature, but knows a limited amount about indigenous history and culture from what she learnt in school</p>
                        </div>
                        <div className="quote djaliny-persona">
                        <img src={ persona2 } />
                            <p>David feels disconnected from his Albany roots due to city living, but he's always trying to find ways to reconnect with his culture and family</p>
                        </div>
                    </div>

                    <div className="written left">
                        <h2>Mockups & Prototyping</h2>
                        <p>With the sketched wireframes finalised we began creating high-fidelity mockups, making adjustments to the sketched design where necessary. While Arthur worked hard on the app design late into the night I intermittently jumped into the file to make minor aesthetic adjustments on the fly. Meanwhile Mali spent the evening creating a voice recording of a Dreamtime story that would be included in the final prototype video.</p>
                    </div>

                    <div className="written left">
                        <h2>Pitch Presentation</h2>
                        <p>With little sleep and the presentations start time looming myself and Mali arrived on campus early to put together the final presentation and make final adjustments to the prototype, including searching for appropriate nature sounds. Later, the three of us planned and practiced our presentation before making our way to the final day's activities.</p>
                    </div>

                    <div className="quote right djaliny-pitch-quote">
                        <p>"Encouraging users to explore the lands around them and immerse themselves in the Dreamtime stories and the native sounds of the past will help people feel more connected with country."</p>
                    </div>

                    <div className="further-development bullets">
                        <h2>Further Development</h2>
                        <p className="written">In the final presentation we also recognised some points for further development, listed below:</p>
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

                    {/* <div className="project-heading full-width prototype">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">prototype</span>
                    </div> */}

                    <div className="project-heading full-width conclusion">
                        <div className="project-heading_rectangle"></div>
                        <span className="brand-display xxl">conclusion</span>
                    </div>

                    <div className="written left">
                        <p>Despite everyone in the room running on limited sleep, seeing the design solutions that other groups had created was an intriguing experience. We had some technical difficulties getting the audio working for our presentation, but we ultimately pitched our design in a concise manner which was a welcome change following several lengthy presentations.</p>
                        <p>The Djaliny mobile app design was extremely well received by the judging panel and following the presentation we received constructive feedback and answered a variety of questions. The design was also  deemed to be viable and desireable in the real world.</p>
                        <p>Participating in the Curtin Creative Jam was a once in a lifetime experience and being recognised with the first place award was a truly incredible feeling.</p>
                    </div>

                    <div className="quote right djaliny-conclusion-quote">
                        <p>The final design was a culmination of several ideas from each group member: an augmented reality app that tells history about a scanned location, an audiobook app for Dreamtime stories, and an nature sounds app.</p>
                    </div>

                    <div className="final-space full-width"></div>

                </section>
            </section>
            <Footer />
        </>
    )
}

export default Djaliny