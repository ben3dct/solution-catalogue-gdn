/** @format */

import { signIn, signOut } from "./../Auth";

import { Routes, Route, Navigate } from "react-router-dom";
import "./Home.styles.css";
import { Auth } from "aws-amplify";
import { data } from "./data";
import * as React from "react";
import Header from "../components/Header.component";
import Solution from "../components/Solution.component";
const Home = ({ user }) => {
	const [selectedItem, setSelectedItem] = React.useState(null);
	const [filterValue, setFilterValue] = React.useState(null);
	const [filterResult, setFilterResult] = React.useState(data);

	React.useEffect(() => {
		if (filterValue) {
			const result = data.filter((datum) => datum.id == filterValue);
			setFilterResult(result);
		} else {
			setFilterResult(data);
		}
	}, [filterValue]);

	if (!user) {
		return <Navigate to='/login' />;
	}
	return (
		<div className='primary-flex'>
			<div className='flex-child header'>
				<Header />
			</div>
			<div className='flex-child filters'>
				<input
					placeholder='search id'
					onChange={(e) => {
						setFilterValue(e.target.value);
					}}
				/>
				<span> filtering for id: {filterValue ? filterValue : "all "}</span>
			</div>
			<div className='flex-child body'>
				{filterResult.map((datum) => {
					return (
						<Solution
							solution={datum}
							updateSelectedItem={(val) => {
								setSelectedItem(val);
							}}
						/>
					);
				})}
			</div>
			<div className='flex-child footer'>
				Status: Disconected, Selected Item: {selectedItem ? selectedItem : "none"}
				<button
					disabled={selectedItem ? false : true}
					style={{ marginLeft: "20px" }}
					onClick={() => {
						setSelectedItem(null);
					}}>
					deselect item
				</button>
			</div>
		</div>
	);
};
export default Home;
