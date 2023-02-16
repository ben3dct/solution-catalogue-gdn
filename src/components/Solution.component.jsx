/** @format */

import * as React from "react";

function Solution({ solution, updateSelectedItem }) {
	const [selectedItem, setSelectedItem] = React.useState(null);

	return (
		<div
			onClick={() => {
				updateSelectedItem(solution.id);
			}}
			className='map-item'
			key={solution.id}>
			<div className='solution-item title'>{solution?.title}</div>
			<div className='solution-item description'>{solution?.description}</div>
			<div className='solution-item author'>{solution?.author}</div>
			<div className='solution-item tags'>{solution?.tags}</div>
		</div>
	);
}
export default Solution;
