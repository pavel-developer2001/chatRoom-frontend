import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import Room from "./pages/Room";
import AddRoom from "./pages/AddRoom";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./store/userSlice";
import { getRooms } from "./store/roomSlice";

const App = () => {
	const dispatch = useDispatch();
	//@ts-ignore
	const { token } = useSelector((state) => state.user);

	React.useEffect(() => {
		dispatch(setToken(localStorage.getItem("token")));
	}, [token]);
	React.useEffect(() => {
		dispatch(getRooms());
	}, []);
	return (
		<div>
			<Router>
				<Header />
				{token ? (
					<>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route
								path='/room/:id'
								render={({ match }) => {
									const { id } = match.params;
									return <Room roomId={id} />;
								}}
							/>
							<Route exact path='/add' component={AddRoom} />
							<Redirect to='/' />
						</Switch>
					</>
				) : (
					<Switch>
						<Route exact path='/register' component={Register} />
						<Route exact path='/login' component={Login} />
						<Redirect to='/login' />
					</Switch>
				)}
			</Router>
		</div>
	);
};

export default App;
