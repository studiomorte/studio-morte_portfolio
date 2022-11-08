import './../../scss/_project-pages.scss'
import './../../scss/_project-staunton.scss'
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

                    <div className="opening-block written">
                        <h2>Overview</h2>
                        <p>Staunton Gallery is a local art gallery situated in the heart of Subiaco featuring multiple exhibition spaces. The gallery curates and hosts exhibitions, provides a support network to associated artists, and houses artist studios. Heather Staunton has been operating the gallery as an independent artist since 2007 and is seeking to reimagine the galleries online presence with a brand new website.</p>
                        <p>The website design must showcase the venue, their exhibitions, artists, and history, while also providing their clientele with information regarding upcoming events. The design must reflect the creative nature of the gallery, appeal to their existing customer base, and seek to attract a younger audience.</p>
                        <br />
                        <span className="project-status">Project Status:</span><i> Development Stage</i><br />
                        <span className="fictional-brief">This is a <i><b>fictional brief</b></i>, further details at the end of this page</span>
                    </div>

                    <div className="links-block">
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
                    </div>

            </section>
            <Footer />
        </>
    )
}

export default Staunton