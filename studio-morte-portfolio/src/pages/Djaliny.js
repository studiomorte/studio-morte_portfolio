/* IMPORTS */
import Footer from './../components/Footer'
import { Icon } from '@iconify/react';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import FigmaEmbed from 'react-figma-embed';

/* IMAGES */
import bullet from './../images/bullet.png'
import headerImg from './../images/djaliny2.png'
import featureImg from './../images/djaliny1.png'
import brandLogo from './../images/logo-djaliny.png'
import curtinLogo from './../images/logo-curtin.png'
import adobeLogo from './../images/logo-adobe.png'
import linkedinLogo from './../images/logo-linkedin.png'
import unityLogo from './../images/logo-unity.png'


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
                            <li>
                                <Icon icon="akar-icons:youtube-fill" />
                                Official Highlight Reel
                            </li>
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
                    
            </section>
            <Footer />
        </>
    )
}

export default Djaliny