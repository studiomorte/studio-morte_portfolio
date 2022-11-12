/* IMPORTS */
import Footer from './../components/Footer'
import { Icon } from '@iconify/react';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import FigmaEmbed from 'react-figma-embed';

/* IMAGES */
import bullet from './../images/bullet.png'
import headerImg from './../images/susvic1.png'
// import featureImg from './../images/sustainability-1.png'
import brandLogo from './../images/logo-sustainabilityvic.png'


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
                        <p>Write something here</p>
                    </div>

                    <div className="project-feature full-width">
                        <img src={headerImg} />
                    </div>
                </section>
                    
            </section>
            <Footer />
        </>
    )
}

export default SustainabilityVic