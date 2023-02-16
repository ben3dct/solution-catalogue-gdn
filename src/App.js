/** @format */

import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Amplify, Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import awsmobile from "./aws-exports";
import Button from "@mui/material/Button";

import * as React from "react";

Amplify.configure({
	...awsmobile,
	oauth: {
		...awsmobile.oauth,
		redirectSignIn: awsmobile.oauth.redirectSignIn.split(",")[+!window.location.hostname.includes("localhost")],
		redirectSignOut: awsmobile.oauth.redirectSignOut.split(",")[+!window.location.hostname.includes("localhost")],
	},
});

function App() {
	const [user, setUser] = React.useState(null);
	const [loader, setLoader] = React.useState(true);

	function updateUser(data) {
		setUser(data);
	}
	async function getUser() {
		Auth.currentAuthenticatedUser()
			.then((data) => {
				setUser(data);
				console.log("setuser");
			})
			.catch((e) => {
				console.log("no authenticated user");
			});
	}
	React.useEffect(() => {
		getUser();
	}, []);
	React.useEffect(() => {
		console.log(user);
		setLoader(false);
	}, [user]);

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={!loader ? <Home user={user} /> : <h1>loading</h1>}
				/>
				<Route
					path='/login'
					element={
						<LoginPage
							updateUser={updateUser}
							user={user}
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default App;

const LoginPage = ({ updateUser, user }) => {
	async function signIn() {
		await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
		// eslint-disable-next-line no-restricted-globals
	}

	if (user) {
		return <Navigate to='/' />;
	}
	return (
		<div className='login-primary-flex'>
			<h1 style={{ marginBottom: "20px" }}>solution catalogue</h1>
			<div className='login-container'>
				<div className='logo-login' />
				<div className='heading-login'>
					<Button
						onClick={signIn}
						disableElevation={true}
						sx={{ height: "300px", width: "300px", borderRadius: "10" }}
						variant='contained'
						fullWidth>
						log in
					</Button>
				</div>
			</div>
		</div>
	);
};
