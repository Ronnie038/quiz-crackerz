import React from 'react';
import './Topics.css';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Topics = () => {
	const topics = useLoaderData();
	// console.log(topics.data);

	return (
		<div className=' topics'>
			<div className='header'>
				<h3 className='text-light w-50 my-5'>
					Let's have fun with interesting developer common interview questions
				</h3>
			</div>
			<div className='row text-center mx-auto justify-content-center '>
				{topics.data.map((topic) => (
					<Topic key={topic.id} topic={topic} />
				))}
			</div>
		</div>
	);
};

export default Topics;
