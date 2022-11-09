import './../../scss/_project-pages.scss'
import headerImg from './../../images/stauntonv3.png'
import brandLogo from './../../images/staunton-logo.png'
import Footer from './../../components/Footer'
import { Icon } from '@iconify/react';


function Staunton(){

    return (
        <>
            <header className="project-pages_header">
                <img className="project-pages_logo" src={ brandLogo } alt="Staunton Gallery Logo"/>
                <div className="project-pages_hero-overlay"></div>
                <img className="project-pages_hero staunton-hero" src={ headerImg } alt="Collection of screens designed for Staunton Gallery"/>
            </header>
            <section className="project-pages_container">

                { /* Opening Section */}

                    <div className="opening-block written">
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

                    <div className="problem-statement">
                        <p>Staunton Gallery wants to reimagine their online presence with a brand new website that reflects the creative nature of the gallery in a professional, yet aesthetically pleasing manner.</p>
                        <p>The design must showcase the venue, their exhibitions, artists, and history, while providing information on upcoming events.</p>
                    </div>

                    <div className="project-goals written">
                        <h2>Project Goals</h2>
                        <ul>
                            <li><span>Create an aesthetically pleasing design that leverages white space to convey the 'feeling' that the user is browsing through a physical gallery</span></li>
                            <li><span>Feature artworks and photography as key structural elements of each page, creating an editoral style design</span></li>
                            <li><span>Utilise subtle animations to engage users</span></li>
                            <li><span>Strategically plan page navigation to limit clicks and encourage engagement</span></li>
                        </ul>
                    </div>

                    <div className="project-solution written">
                        <h2>The Solution</h2>
                        <p>Featuring a soft colour palette, asymmetrical layout, and geometric colour blocks, the final design is a unique and modern website that’s easy to navigate and pleasant to browse. The minimalistic design accomodates the needs of older users, while the subtle animations and clean, editorial style design simultaneously appeals to a younger audience.</p>
                        <p>The final design is fully responsive, with careful consideration given to layout adjustments made for mobile devices.</p>
                    </div>

                { /* Case Study Section */ }

            </section>
            <Footer />
        </>
    )
}

export default Staunton