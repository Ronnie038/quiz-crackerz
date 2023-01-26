import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	const active = {
		color: 'cyan',
	};
	return (
		<div className='flex nav-container '>
			<div className='logo'>
				<NavLink to='/topics'>
					<h4 className='text-light mx-2'>Developoer quiz</h4>
				</NavLink>
			</div>

			<nav className='nav-div'>
				<ul className='nav '>
					<li className=''>
						<NavLink
							to='/topics'
							style={({ isActive }) => (isActive ? active : undefined)}
						>
							Topics
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/statistic'
							style={({ isActive }) => (isActive ? active : undefined)}
						>
							Statistics
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/blog'
							style={({ isActive }) => (isActive ? active : undefined)}
						>
							Blog
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
