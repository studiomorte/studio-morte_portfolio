import { Outlet, Link } from "react-router-dom"
import Navbar from './components/Navbar';
import ProjectLinkAnimation from './components/ProjectLink';
import './scss/main.scss';




function App( ) {


  return (
    <>
      <Navbar />

      <div className="main-container">
      <div class="project_page-container">

          <nav className="project_navigation">
            <ul>
              <Link to="mywarhammer">
                <ProjectLinkAnimation />
              </Link>
              <Link to="mywarhammer">
                <ProjectLinkAnimation />
              </Link>

            </ul>
          </nav>
          <div className="project_background-overlay"></div>
          <div className="project_background-image1"></div>
        <Outlet />
      </div>
      </div>
    </>
  );
}

export default App;
