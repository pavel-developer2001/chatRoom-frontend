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

import { useDispatch } from "react-redux";
import { setToken } from "./store/userSlice";
import { getRooms } from "./store/roomSlice";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App = () => {
	const dispatch = useDispatch();

	const { token } = useTypedSelector((state) => state.user);

	React.useEffect(() => {
		dispatch(setToken(localStorage.getItem("token")));
	}, [token]);
	React.useEffect(() => {
		dispatch(getRooms());
	}, []);
	return (
		<div>
			<Router>
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
