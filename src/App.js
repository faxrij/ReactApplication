import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/FavoritesPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" exact element={<AllMeetupsPage />}></Route>
				<Route path="/new-meetup" element={<NewMeetupPage />}></Route>
				<Route path="/favorites" element={<FavoritesPage />}></Route>
			</Routes>
		</Layout>
	);
}

export default App;
