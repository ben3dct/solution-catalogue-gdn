/** @format */

import { signIn, signOut } from "./../Auth";

import { Routes, Route, Navigate } from "react-router-dom";
import "./Home.styles.css";
import { Auth } from "aws-amplify";
import { data } from "./data";
import * as React from "react";
const Home = ({ user }) => {
	const [selectedItem, setSelectedItem] = React.useState(null);
	const [filterValue, setFilterValue] = React.useState(null);
	const [filterResult, setFilterResult] = React.useState(data);
	function updateSelectedItem(id) {
		if (id === selectedItem) {
			return {
				fontWeight: "bolder",
				border: "2px solid black",
				boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
				marginTop: "5px",
				marginBottom: "15px",
			};
		} else {
			return {};
		}
	}

	React.useEffect(() => {
		if (filterValue) {
			const result = data.filter((datum) => datum.id == filterValue);
			setFilterResult(result);
		} else {
			setFilterResult(data);
		}
	}, [filterValue]);
	if (!Auth.currentAuthenticatedUser()) {
		return <Navigate to='/login' />;
	}
	return (
		<div className='primary-flex'>
			<div className='flex-child header'>header placeholder</div>
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
						<div
							style={updateSelectedItem(datum.id)}
							onClick={() => {
								setSelectedItem(datum.id);
								updateSelectedItem(datum.id);
							}}
							className='map-item'
							key={datum.id}>
							{datum.id}
						</div>
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
