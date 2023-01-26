import React from 'react';
import Nav from './header/Nav';
import { Outlet, Link } from 'react-router-dom';

const Main = () => {
	return (
		<div>
			<Nav></Nav>
			<Outlet></Outlet>
		</div>
	);
};

export default Main;
