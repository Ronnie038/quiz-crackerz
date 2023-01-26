import React, { useEffect, useState } from 'react';
import './SingleQuestion.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const SingleQuestion = ({ question, correctCounter, wronCounter }) => {
	const [correctCount, setCorrect] = useState(1);
	const [wrongCount, setWrongCount] = useState(1);
	const { correctAnswer } = question;

	const handleOption = (e, option) => {
		e.stopPropagation();

		console.log(e.target);
		if (option === correctAnswer) {
			correctCounter(correctCount);

			notify();
		} else {
			wronCounter(wrongCount);
			notifyErr();
		}
	};

	const notify = () =>
		toast.success(` you did correct ans`, {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	const notifyErr = () =>
		toast.error(` you did wrong ans`, {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	const notifyCorrect = () =>
		toast.success(` correct ans is  (${correctAnswer})`, {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});

	// console.log(question.question);
	return (
		<div className='single_question mx-auto mx-md-5 my-2 col-xl-5 col-md-11 rounded '>
			<p> quiz : {question.question}</p>
			<div className='visilble_icon' onClick={notifyCorrect}>
				<RemoveRedEyeIcon />
			</div>

			<div className='row px-5 '>
				{question.options.map((option, idx) => (
					<div
						key={idx}
						className={`border py-3 text-start  col-md-6 col-sm-12  rounded `}
					>
						<label className='mx-1' htmlFor={option}>
							<input
								className='mx-2'
								type='radio'
								name={question.id}
								value={option}
								id={option}
								onClick={(e) => {
									handleOption(e, option);
								}}
							/>
							{option}
						</label>
					</div>
				))}
				<ToastContainer
					position='top-center'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='colored'
				/>
			</div>
		</div>
	);
};

export default SingleQuestion;
