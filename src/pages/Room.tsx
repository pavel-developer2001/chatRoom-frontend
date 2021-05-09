import React from "react";
import { Col, Row } from "react-bootstrap";
import UserInfo from "../components/UserInfo";

const Room = () => {
	return (
		<div className='room'>
			{" "}
			<Row>
				<Col xs lg={1}></Col>
				<Col xs lg={10}>
					<Row>
						<Col lg={4}>
							Участники
							<UserInfo name='dark side' />
							<UserInfo name='dark side' />
							<UserInfo name='dark side' />
							<UserInfo name='dark side' />
							<UserInfo name='dark side' />
						</Col>
						<Col lg={8}>Message</Col>
					</Row>
				</Col>
				<Col xs lg={1}></Col>
			</Row>
		</div>
	);
};

export default Room;
