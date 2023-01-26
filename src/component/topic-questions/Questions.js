import React, { useState } from 'react';
import './Questions.css';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from './SingleQuestion';

const Questions = () => {
	const questions = useLoaderData();
	const [correctAnswerCounter, setCorrectAnsCounter] = useState(0);
	const [wrongAnswerCounter, setWrongAnsCounter] = useState(0);

	const correctCounter = (count) => {
		setCorrectAnsCounter(correctAnswerCounter + count);
	};
	const wronCounter = (count) => {
		setWrongAnsCounter(wrongAnswerCounter + count);
	};

	return (
		<div className='questions'>
			<div className=''>
				<div className='question-intro me-lg-5 rounded'>
					<img src={questions.data.logo} alt='' />
					<p>{questions.data.name} Developer quiz</p>
					<div className='fw-bold counter '>
						<p className=' bg-success px-2 rounded'>
							{' '}
							correct Ans : {correctAnswerCounter}
						</p>
						<p className='bg-danger px-2 rounded'>
							{' '}
							wrong Ans : {wrongAnswerCounter}{' '}
						</p>
					</div>
				</div>
				<div className='questions_container row  px-3 mx-3'>
					{questions.data.questions.map((question, idx) => (
						<SingleQuestion
							key={idx}
							correctCounter={correctCounter}
							wronCounter={wronCounter}
							question={question}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Questions;
