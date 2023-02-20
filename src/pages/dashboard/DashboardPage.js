/** @format */

import "./DashboardPage.styles.scss";
import * as React from "react";
import { AddSolution } from "../../customMUI/authUI";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { data } from "./data";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Solution, { HeaderColumns } from "./Solution";
import Header from "../../components/Header.component";
import { Auth } from "aws-amplify";

export default function DashboardPage({ user, navigate }) {
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	async function signOut() {
		await Auth.signOut();
	}
	if (!user) {
		navigate("/login");
	}
	return (
		<div className='main-container-dashboard'>
			<div className='nav'>
				<h1 className='dashboard-nav-item sc'>Solution Catalogue</h1>
				<div className='dashboard-nav-item btn-group'>
					<button
						onClick={signOut}
						className='sign-out'>
						sign out
					</button>
					<AddSolution disableRipple>add solution</AddSolution>
				</div>
			</div>
			<div className='filters'>
				<div className='search-category'>
					{/* <TextField
						sx={{ width: "200px" }}
						id='outlined-basic'
						label='Search ...'
						variant='outlined'
					/> */}
					<FormControl fullWidth>
						<InputLabel id='demo-simple-select-label'>...</InputLabel>
						<Select
							sx={{ width: "200px" }}
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={age}
							label='Age'
							onChange={handleChange}>
							<MenuItem value={10}>Author</MenuItem>
							<MenuItem value={20}>Category</MenuItem>
							<MenuItem value={30}>Global</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div>
					<FormControl fullWidth>
						<InputLabel id='demo-simple-select-label'>sort</InputLabel>
						<Select
							sx={{ width: "200px" }}
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={age}
							label='Age'
							onChange={handleChange}>
							<MenuItem value={10}>A-Z</MenuItem>
							<MenuItem value={20}>Z-A</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			<div className='body-container'>
				<HeaderColumns />
				<div className='solution-box'>
					<div className='overflow-box'>
						{data.map((datum) => {
							return <Solution id={datum.id} />;
						})}
					</div>
				</div>
			</div>
			<div className='banner'>Build: DEV</div>
		</div>
	);
}
