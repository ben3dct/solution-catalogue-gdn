/** @format */

import "./mapStyles.scss";

export default function MapItem({ id }) {
	return (
		<div
			className='solution-main-container'
			key={id}>
			<div className='solution-g-1'>
				<span className='solution-title'>Title</span>
				<span className='solution-author'>Author</span>
				<span className='solution-tags'>Tags</span>
			</div>
			<div className='solution-g-2'>
				<span>Description</span>
			</div>
		</div>
	);
}

export const HeaderColumns = () => {
	return (
		<div className='solution-main-container header-modifier'>
			<div className='solution-g-1'>
				<span className='solution-title'>Title</span>
				<span className='solution-author'>Author</span>
				<span className='solution-tags'>Tags</span>
			</div>
			<div className='solution-g-2'>
				<span>Description</span>
			</div>
		</div>
	);
};
