import React from "react";
import RoomList from "../components/RoomList";
import UserInfo from "../components/UserInfo";

const Home = () => {
	const user: any = localStorage.getItem("user");
	return (
		<div>
			<div className='home__info'>
				<UserInfo name={JSON.parse(user).user} />
			</div>
			<RoomList />
		</div>
	);
};

export default Home;
