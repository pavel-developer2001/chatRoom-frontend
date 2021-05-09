import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className='header'>
			<Navbar bg='dark' variant='dark' className='header__nav'>
				<Link to='/' className='header__link'>
					<Navbar.Brand>Chat room</Navbar.Brand>
				</Link>
				<Link to='add'>
					<Button variant='light'>Создать комнату</Button>
				</Link>
				<Link to='/login'>
					<Button variant='outline-info'>Войти</Button>
				</Link>
			</Navbar>
		</div>
	);
};

export default Header;
