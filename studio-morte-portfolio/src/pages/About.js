import SocialIcons from '../components/SocialIcons'
import Footer from './../components/Footer'

function About(){
    return (
        <>
            <section className="about_page-container">
                <figure className="about_placeholder-image"></figure>
                <h1>potato fiend<br /> & coffee lover</h1>
                <div className="about_body">
                    <p>About</p>
                    <SocialIcons />
                </div>
            </section>
        </>
    )
}

export default About