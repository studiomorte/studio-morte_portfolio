import './../../scss/_project-pages.scss'
import headerImg from './../../images/staunton-cover2.jpg'
import brandLogo from './../../images/staunton-logo.png'
import Footer from './../../components/Footer'


function Staunton(){

    return (
        <>
            <header className="project-pages_header">
                <img src={ headerImg } alt="Collection of screens designed for Staunton Gallery"/>
            </header>
            <section className="project-pages_container">
                <img className="project-pages_logo" src={ brandLogo } alt="Staunton Gallery Logo"/>
            </section>
            <Footer />

        </>
    )
}

export default Staunton