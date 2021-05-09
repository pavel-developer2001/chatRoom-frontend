import React from "react";

import personAvatar from "../static/person.jpg";

type UserInfoProps = {
	name: string;
};
const UserInfo: React.FC<UserInfoProps> = ({ name }) => {
	return (
		<div className='user-info'>
			<img className='room-avatar' src={personAvatar} />
			<strong className='room-username'>{name}</strong>
		</div>
	);
};

export default UserInfo;
