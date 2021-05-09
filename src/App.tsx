import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Room from "./pages/Room";
import AddRoom from "./pages/AddRoom";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Header from "./components/Header";

const App = () => {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/room' component={Room} />
					<Route exact path='/add' component={AddRoom} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/login' component={Login} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
