/** @format */

import { IoLogoGoogle } from "react-icons/io";
import { GoogleSignInButton } from "../../customMUI/authUI";
import { Navigate } from "react-router-dom";
import "./Auth.styles.scss";

export default function AuthPage({ signInFunc, navigate, user }) {
	if (user) {
		navigate("/");
	}
	return (
		<div className='main-container'>
			<div className='container-item logo-container'>
				<div className='logo' />
				<div className='logo-text'>
					<span className='gdn'>globaldatanet</span> <br /> Solution Catalogue
				</div>
			</div>
			<div className='container-item btn-container'>
				<div className='logo mobile' />
				<h1 className='small-text'>Solution Catalogue </h1>

				<GoogleSignInButton
					onClick={signInFunc}
					disableripple
					startIcon={<IoLogoGoogle size={35} />}>
					sign in with Google
				</GoogleSignInButton>
			</div>
		</div>
	);
}
