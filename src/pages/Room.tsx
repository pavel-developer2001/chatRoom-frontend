import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
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
								<div className='room__messages-item'>Привет как жизнь?</div>
								<div className='room__messages-item'>Привет как жизнь?</div>
								<div className='room__messages-item'>Привет как жизнь?</div>
								<div className='room__messages-item'>Привет как жизнь?</div>
								<div className='room__messages-item'>Привет как жизнь?</div>
								<div className='room__messages-item'>Привет как жизнь?</div>
								<div className='room__messages-item'>Привет как жизнь?</div>
								<div className='room__messages-item'>Привет как жизнь?</div>
							</div>
							<Form className='room__form'>
								<Form.Group controlId='formBasicMessage'>
									<Form.Control
										type='message'
										placeholder='Написать сообщение'
									/>
								</Form.Group>
								<Button
									variant='primary'
									className='room__form-btn'
									type='submit'
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
