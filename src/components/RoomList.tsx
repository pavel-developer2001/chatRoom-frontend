import React from "react";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from "react-bootstrap";
import imgFont from "../static/image.png";
import { Link } from "react-router-dom";

const RoomListItem = () => {
	return (
		<div className='room-list-item'>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant='top' src={imgFont} />
				<Card.Body>
					<Card.Title>Сходка</Card.Title>
					<Card.Text>Сходка гг своих произведений</Card.Text>
					<Link to='/room'>
						<Button variant='primary'>Присоединиться</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};
const RoomList = () => {
	return (
		<div>
			<Container>
				<Row className='justify-content-md-center'>
					<Col xs lg='1'></Col>
					<Col xs lg='10'>
						<Row>
							<Col xs lg='4'>
								<RoomListItem />
							</Col>
							<Col xs lg='4'>
								<RoomListItem />
							</Col>
							<Col xs lg='4'>
								<RoomListItem />
							</Col>
							<Col xs lg='4'>
								<RoomListItem />
							</Col>
							<Col xs lg='4'>
								<RoomListItem />
							</Col>
						</Row>
					</Col>
					<Col xs lg='1'></Col>
				</Row>
			</Container>
		</div>
	);
};

export default RoomList;
