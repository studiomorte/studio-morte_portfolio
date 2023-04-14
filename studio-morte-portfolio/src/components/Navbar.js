import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import SocialIcons from "./SocialIcons";

function Navbar() {
  // This will run one time after the component mounts

  // HAMBURGER MENU
  const menuItems = document.querySelectorAll(".menuItem");
  const [clicked, setClicked] = useState("");

  const handleClick = () => {
    const menu = document.querySelector("#mobileMenu");
    const closeIcon = document.querySelector("#closeIcon");
    const menuIcon = document.querySelector("#menuIcon");

    clicked ? setClicked("") : setClicked("show-menu");

    if (menu.classList.contains("show-menu")) {
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  };

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", handleClick);
  });

  const homeClick = () => {
    const menu = document.querySelector("#mobileMenu");
    const closeIcon = document.querySelector("#closeIcon");
    const menuIcon = document.querySelector("#menuIcon");

    clicked ? setClicked("") : setClicked("");

    if (menu.classList.contains("hide-menu")) {
      menu.classList.remove("hide-menu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.remove("hide-menu");
      // closeIcon.style.display ="block" ;
      // menuIcon.style.display = "none" ;
    }
  };

  // ACTIVE NAVIGATION ITEM
  let activeClassName = "isActive";

  return (
    <>
      <div className="navigation_container">
        <NavLink to="/" end onClick={homeClick}>
          <div className="navigation_logo">
            <p className="studio">Studio</p>
            <p className="morte">morte</p>
          </div>
        </NavLink>
        <div className="navigation_right">
          <button className="hamburger" onClick={handleClick}>
            <Icon id="menuIcon" icon="gg:menu" color="#F26F8F" />
            <Icon id="closeIcon" icon="ep:close-bold" color="#F26F8F" />
          </button>
          <p className="navigation_designer">
            front-end developer
            <br /> & experience designer
          </p>

          <nav>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClassName : null)}
            >
              About
            </NavLink>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? activeClassName : null)}
            >
              Projects
            </NavLink>
            {/* <NavLink to="/showreel"
                            className={({ isActive }) =>
                            isActive ? activeClassName : null }>
                        Showreel
                        </NavLink> */}
          </nav>
        </div>
      </div>

      {/* MOBILE MENU */}
      <nav id="mobileMenu" className={`${clicked} hide-menu`}>
        <ul>
          <li className="menuItem">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClassName : null)}
            >
              About
            </NavLink>
          </li>
          <li className="menuItem">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? activeClassName : null)}
            >
              Projects
            </NavLink>
          </li>
          {/* <li className="menuItem">
                        <NavLink to="/showreel"
                            className={({ isActive }) =>
                            isActive ? activeClassName : null }>
                        Showreel
                        </NavLink>
                    </li> */}
        </ul>

        <SocialIcons />
      </nav>
    </>
  );
}

export default Navbar;
