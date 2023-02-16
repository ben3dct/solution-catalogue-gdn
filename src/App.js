/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";

Amplify.configure({
	...awsmobile,
	oauth: {
		...awsmobile.oauth,
		redirectSignIn: awsmobile.oauth.redirectSignIn.split(",")[+!window.location.hostname.includes("localhost")],
		redirectSignOut: awsmobile.oauth.redirectSignOut.split(",")[+!window.location.hostname.includes("localhost")],
	},
});

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
			</Routes>
		</>
	);
}

export default App;
