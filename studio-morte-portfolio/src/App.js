import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar';
import './scss/main.scss'


function App() {
  return (
    <>
      <Navbar />
      <div class="page-container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
