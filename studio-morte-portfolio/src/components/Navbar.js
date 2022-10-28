import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';


function Navbar(){

    let activeClassName = "isActive";

    return (
        <>
            <div className="navigation_container">
                <NavLink to="/" end>
                    <div className="navigation_logo">
                        <p className="studio">Studio</p>
                        <p className="morte">morte</p>
                    </div>
                </NavLink>
                <div className="navigation_right">
                    <Icon className="hamburger" icon="gg:menu" />
                    <p className="navigation_designer">
                        front-end developer<br /> & experience designer
                    </p>
                    <nav>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) =>
                                isActive ? activeClassName : null }>
                            About
                            </NavLink>
                            <NavLink to="/" end
                                className={({ isActive }) =>
                                isActive ? activeClassName : null }>
                            Projects
                            </NavLink>
                            <NavLink to="/showreel"
                                className={({ isActive }) =>
                                isActive ? activeClassName : null }>
                            Showreel
                            </NavLink>
                        
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar