import './_navbar.scss';

function Navbar(){
    return (
        <>
            <div className="navigation_container">
                <div className="navigation_logo">
                    <p className="studio">Studio</p>
                    <p className="morte">morte</p>
                </div>
                <div className="navigation_right">
                    <p className="navigation_designer">
                        front-end developer<br /> & experience designer
                    </p>
                    <nav>
                        <ul>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Showreel</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar