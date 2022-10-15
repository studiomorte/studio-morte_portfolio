import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar';
import './scss/main.scss';

// PROJECT PAGE -------------------------------

function App(  ) {

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
