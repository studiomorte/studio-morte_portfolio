import './../../scss/_project-pages.scss'
import headerImg from './../../images/staunton-cover2.jpg'
import brandLogo from './../../images/staunton-logo.png'

function Staunton(){

    return (
        <>
            <header className="project-pages_header">
                <img src={ headerImg } alt="Collection of screens designed for Staunton Gallery"/>
            </header>
            <section className="project-pages_container">
                <img className="project-pages_logo" src={ brandLogo } alt="Staunton Gallery Logo"/>
            </section>
        </>
    )
}

export default Staunton