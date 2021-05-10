import React from "react";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from "react-bootstrap";
// import imgFont from "../static/image.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RoomListItem: React.FC<any> = ({ imgFont, name, text, id }) => {
	return (
		<div className='room-list-item'>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant='top' src={imgFont} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>{text}</Card.Text>
					<Link to={`/room/${id}`}>
						<Button variant='primary'>Присоединиться</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};
const RoomList = () => {
	//@ts-ignore
	const state = useSelector((state) => state?.room?.rooms?.data);
	//@ts-ignore
	const { loading } = useSelector((state) => state?.room);
	return (
		<div>
			<Container>
				<Row className='justify-content-md-center'>
					<Col xs lg='1'></Col>
					<Col xs lg='10'>
						<Row>
							{loading ? (
								<p>Loading</p>
							) : (
								state.map((room: any) => (
									<Col xs lg='4' key={room.id}>
										<RoomListItem
											name={room.roomName}
											imgFont={room.roomPicture}
											text={room.roomText}
											id={room.id}
										/>
									</Col>
								))
							)}
						</Row>
					</Col>
					<Col xs lg='1'></Col>
				</Row>
			</Container>
		</div>
	);
};

export default RoomList;
