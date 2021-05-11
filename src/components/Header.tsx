import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../store/userSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Header = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { token } = useTypedSelector((state) => state.user);
	const exitUser = () => {
		history.push("/login");
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		dispatch(setToken(""));
	};
	return (
		<div className='header'>
			<Navbar bg='dark' variant='dark' className='header__nav'>
				<Link to='/' className='header__link'>
					<Navbar.Brand>Chat room</Navbar.Brand>
				</Link>
				{token ? (
					<Link to='add'>
						<Button variant='light'>Создать комнату</Button>
					</Link>
				) : null}

				{token ? (
					<Button variant='outline-info' onClick={exitUser}>
						Выйти
					</Button>
				) : (
					<Link to='/login'>
						<Button variant='outline-info'>Войти</Button>
					</Link>
				)}
			</Navbar>
		</div>
	);
};

export default Header;
