import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='login'>
			<Form>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control type='email' placeholder='Введите email' />
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Пароль</Form.Label>
					<Form.Control type='password' placeholder='Введите пароль' />
				</Form.Group>
				<Form.Group controlId='formBasicPassword' className='login__form'>
					<Link to='/register' className='login__link'>
						Зарегистрироваться
					</Link>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Войти
				</Button>
			</Form>
		</div>
	);
};

export default Login;
