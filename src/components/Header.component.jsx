/** @format */

import * as React from "react";

import "./Header.styles.css";
import Button from "@mui/material/Button";
import { Auth } from "aws-amplify";

function Header() {
	return (
		<div className='header-component-main'>
			<div className='header-item grouping'>
				<div className='header-item logo' />
				<div className='header-item logobtn'>
					<span className='heading'>Solution Catalogue</span>
					<Button
						variant='contained'
						color='success'
						disableElevation={true}
						fullWidth>
						+ Add Solution
					</Button>
				</div>
			</div>

			<div className='header-item btn-group'>
				<Button
					variant='contained'
					onClick={() => {
						Auth.signOut();
					}}>
					log out
				</Button>
			</div>
		</div>
	);
}
export default Header;
