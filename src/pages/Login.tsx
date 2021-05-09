import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ChatRoomApi from "../apis/ChatRoomApi";
import { setToken } from "../store/userSlice";

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const loginUser = async (e: any) => {
		e.preventDefault();
		const responce = await ChatRoomApi.post("/users/login", {
			email,
			password,
		});
		localStorage.setItem("user", JSON.stringify(responce.data.data));
		localStorage.setItem("token", responce.data.token);
		dispatch(setToken(responce.data.token));
		history.push(`/`);
		setEmail("");
		setPassword("");
	};
	return (
		<div className='login'>
			<Form>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='email'
						placeholder='Введите email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Пароль</Form.Label>
					<Form.Control
						type='password'
						placeholder='Введите пароль'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicPassword' className='login__form'>
					<Link to='/register' className='login__link'>
						Зарегистрироваться
					</Link>
				</Form.Group>

				<Button variant='primary' type='submit' onClick={loginUser}>
					Войти
				</Button>
			</Form>
		</div>
	);
};

export default Login;
