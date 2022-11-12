/* IMPORTS */
import Footer from './../components/Footer'
import { Icon } from '@iconify/react';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import FigmaEmbed from 'react-figma-embed';

/* IMAGES */
import bullet from './../images/bullet.png'
import headerImg from './../images/warhammer-header.jpg'
import featureImg from './../images/warhammer-feature.png'
import warhammerLogo from './../images/logo-warhammer.png'
import battleHonoursLogo from './../images/logo-battlehonours.png'
import citadelColourLogo from './../images/logo-citadelcolour.png'


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
                            <a href="https://www.figma.com/proto/b0wW4zp4bcrRvJp0MB1NDf/My-Warhammer?node-id=139%3A165&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=139%3A165&show-proto-sidebar=1">
                                <li>
                                    <Icon icon="bxl:figma"/>
                                    Figma Prototype
                                </li>
                            </a>
                            {/* <li>
                                <Icon icon="ic:round-download"/>
                                Full Documentation
                            </li>
                            <li>
                                <Icon icon="bi:medium" />
                                Medium Articles
                            </li> */}
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
                    
            </section>
            <Footer />
        </>
    )
}

export default MyWarhammer