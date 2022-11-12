import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';
import SocialIcons from './SocialIcons';


function Navbar(){

    let activeClassName = "isActive";

    // HAMBURGER MENU
    const menu = document.querySelector(".mobile-menu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger = document.querySelector(".hamburger");
    const closeIcon = document.querySelector("#closeIcon");
    const menuIcon = document.querySelector("#menuIcon");

    function toggleMenu() {
        if (menu.classList.contains("showMenu")) {
            menu.classList.remove("showMenu");
            closeIcon.style.display = "none" ;
            menuIcon.style.display = "block" ;
        } else {
            menu.classList.add("showMenu");
            closeIcon.style.display = "block" ;
            menuIcon.style.display = "none" ;
        }
    }

    hamburger.addEventListener("click", toggleMenu);
    
    menuItems.forEach( 
        function(menuItem) { 
          menuItem.addEventListener("click", toggleMenu);
        }
    )


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
                    <button class="hamburger">
                        <Icon id="menuIcon" icon="gg:menu" color="#F26F8F"/>
                        <Icon id="closeIcon" icon="ep:close-bold" color="#F26F8F"/>
                    </button>
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

            {/* MOBILE MENU */}
            <nav className="mobile-menu xl">
                <ul>
                    <li className="menuItem">
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) =>
                            isActive ? activeClassName : null }>
                        About
                        </NavLink>
                    </li>
                    <li className="menuItem">
                        <NavLink to="/" end
                            className={({ isActive }) =>
                            isActive ? activeClassName : null }>
                        Projects
                        </NavLink>
                    </li>
                    <li className="menuItem">
                        <NavLink to="/showreel"
                            className={({ isActive }) =>
                            isActive ? activeClassName : null }>
                        Showreel
                        </NavLink>
                    </li>
                </ul>

                <SocialIcons />
            </nav>
        </>
    )
}

export default Navbar