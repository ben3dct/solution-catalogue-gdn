/** @format */

import { signIn, signOut } from "./../Auth";

const Home = () => {
	return (
		<div>
			<button onClick={signIn}>sign in</button>
		</div>
	);
};
export default Home;
