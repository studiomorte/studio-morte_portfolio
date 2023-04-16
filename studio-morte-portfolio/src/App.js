import { Outlet } from "react-router-dom";
import HeaderMain from "./components/HeaderMain";
import "./scss/style.scss";

// PROJECT PAGE -------------------------------

function App() {
	return (
		<>
			<HeaderMain />
			<div className="main-container">
				<Outlet />
			</div>
		</>
	);
}

export default App;
