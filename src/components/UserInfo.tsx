import React from "react";

import personAvatar from "../static/person.jpg";

const UserInfo = () => {
	return (
		<div className='user-info'>
			<img className='room-avatar' src={personAvatar} />
			<strong className='room-username'>King death</strong>
		</div>
	);
};

export default UserInfo;
