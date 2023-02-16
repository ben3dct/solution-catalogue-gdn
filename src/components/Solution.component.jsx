/** @format */

import * as React from "react";

function Solution({ solution }) {
	const [selectedItem, setSelectedItem] = React.useState(null);
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
	return (
		<div
			style={updateSelectedItem(solution.id)}
			onClick={() => {
				setSelectedItem(solution.id);
				updateSelectedItem(solution.id);
			}}
			className='map-item'
			key={solution.id}>
			{solution.id}
		</div>
	);
}
export default Solution;
