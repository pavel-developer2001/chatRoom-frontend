import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ChatRoomApi from "../apis/ChatRoomApi";
import UserInfo from "../components/UserInfo";
import { addMessageItem, getRoomMessages } from "../store/messageSlice";
import {
	disconnectParticipant,
	getRoomParticipants,
} from "../store/participantSlice";

const Room: React.FC<any> = ({ roomId }) => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		//@ts-ignore
		dispatch(getRoomMessages(roomId));
	}, []);

	React.useEffect(() => {
		//@ts-ignore
		dispatch(getRoomParticipants(roomId));
	}, []);

	const { participants } = useSelector(
		//@ts-ignore
		(state) => state.participant.participants
	);
	//@ts-ignore
	const loadingParticipant = useSelector((state) => state.participant.loading);

	//@ts-ignore
	const { data } = useSelector((state) => state.message.messages);
	//@ts-ignore
	const { loading } = useSelector((state) => state.message);

	const [messageText, setMessageText] = React.useState("");
	const user: any = localStorage.getItem("user");
	const addNewMessage = async (e: any) => {
		e.preventDefault();
		if (messageText === "") {
			return alert("Напишите сообщение");
		}
		const res = await ChatRoomApi.post(`/messages/add`, {
			messageText,
			roomId,
			userId: JSON.parse(user).id,
		});
		dispatch(addMessageItem(res.data.data));
		setMessageText("");
	};
	const history = useHistory();
	const disconnectUser = async () => {
		//@ts-ignore
		dispatch(disconnectParticipant());
		const responce = await ChatRoomApi.delete(
			`/participants?userId=${JSON.parse(user).id}`
		);
		//@ts-ignore
		dispatch(disconnectParticipant());
		history.push("/");
	};
	return (
		<div className='room'>
			{" "}
			<Row>
				<Button variant='danger' className='room__btn' onClick={disconnectUser}>
					Выйти из комнаты
				</Button>
				<Col xs lg={1}></Col>
				<Col xs lg={10}>
					<Row>
						<Col lg={4}>
							<div className='room__users'>
								<strong>
									Участники <span>100</span>
								</strong>
								{loadingParticipant ? (
									<p>loading users</p>
								) : participants ? (
									participants.map((part: any) => (
										<UserInfo name={part.participantName} key={part.id} />
									))
								) : (
									<p>нет пользователей</p>
								)}
							</div>
						</Col>
						<Col lg={8}>
							<strong>Сообщения</strong>
							<div className='room__messages'>
								{loading ? (
									<p>loading</p>
								) : (
									data.map((message: any) => (
										<div className='room__messages-item' key={message.id}>
											{message.messageText}
										</div>
									))
								)}
								{data == "" && <p>Нет сообщений</p>}
							</div>
							<Form className='room__form'>
								<Form.Group controlId='formBasicMessage'>
									<Form.Control
										type='message'
										placeholder='Написать сообщение'
										value={messageText}
										onChange={(e) => setMessageText(e.target.value)}
									/>
								</Form.Group>
								<Button
									variant='primary'
									className='room__form-btn'
									type='button'
									onClick={addNewMessage}
								>
									Отправить
								</Button>
							</Form>
						</Col>
					</Row>
				</Col>
				<Col xs lg={1}></Col>
			</Row>
		</div>
	);
};

export default Room;
