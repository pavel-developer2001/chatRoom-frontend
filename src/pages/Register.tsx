import React from "react";
import { Button, Form } from "react-bootstrap";

const Register = () => {
	return (
		<div className='login'>
			<Form>
				<Form.Group controlId='formBasicName'>
					<Form.Label>Имя</Form.Label>
					<Form.Control type='name' placeholder='Введите имя' />
				</Form.Group>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control type='email' placeholder='Введите email' />
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Пароль</Form.Label>
					<Form.Control type='password' placeholder='Введите пароль' />
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Повторите пароль</Form.Label>
					<Form.Control type='password' placeholder='Введите пароль ещё раз ' />
				</Form.Group>

				<Button variant='primary' type='submit'>
					Зарегистрироваться
				</Button>
			</Form>
		</div>
	);
};

export default Register;
