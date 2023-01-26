import React from 'react';
import './Topic.css';
import { NavLink } from 'react-router-dom';

const Topic = ({ topic }) => {
	const { name, logo, id } = topic;
	return (
		<div className='topic m-sm-2 col-10 col-md-5 m-3 m-xl-5 col-xl'>
			<img className='' src={logo} alt='' />
			<br />
			<span>Name: {name}</span>
			<NavLink className='topic-btn' to={`/topics/${id}`}>
				Let's Practice
			</NavLink>
		</div>
	);
};

export default Topic;
