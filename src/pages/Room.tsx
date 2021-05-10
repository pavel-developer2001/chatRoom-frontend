import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ChatRoomApi from "../apis/ChatRoomApi";
import UserInfo from "../components/UserInfo";
import { addMessageItem, getRoomMessages } from "../store/messageSlice";

const Room: React.FC<any> = ({ roomId }) => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		//@ts-ignore
		dispatch(getRoomMessages(roomId));
	}, []);
	//@ts-ignore
	const { data } = useSelector((state) => state.message.messages);
	//@ts-ignore
	const { loading } = useSelector((state) => state.message);
	const responce = ChatRoomApi.get(`/users/room?roomId=${roomId}`);

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
	return (
		<div className='room'>
			{" "}
			<Row>
				<Col xs lg={1}></Col>
				<Col xs lg={10}>
					<Row>
						<Col lg={4}>
							<div className='room__users'>
								<strong>
									Участники <span>100</span>
								</strong>
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
								<UserInfo name='dark side' />
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
