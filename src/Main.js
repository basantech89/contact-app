import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './screens/Home';
import Header from './components/common/Header';
import './assets/styles/global.scss';
import ContactInfo from "./components/contacts/ContactInfo";

const routes = [
  {
    path: '/',
    component: Home
  },
];

const Main = () => {
	return (
		<div className="container">
			<Header />
			<Switch>
				{routes.map((route, index) =>
					<Route exact key={index} path={route.path} component={route.component} />)
				}
				<Route path="/:id" component={ContactInfo} />
				<Redirect from="/home" to="/" />
			</Switch>
		</div>
	);
};

export default Main;
