import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Rediraction from "./pages/Rediraction/Rediraction";

function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/rediraction' element={<Rediraction />} />
			<Route path='*' element={<div>Page not Found</div>} />
		</Routes>
	);
}

export default App;
