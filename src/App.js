import React, { Children } from 'react';
import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import Main from './component/Main';
import Topics from './component/topic/Topics';
import Questions from './component/topic-questions/Questions';
import Statistic from './component/statistic/Statistic';
import Blog from './component/blog/Blog';

const App = () => {
	// createRoutesFromElements(
	// 	<Route path='/' element={<Main />}>
	// 		<Route
	// 			index
	// 			element={<Topics />}
	// 			loader={() => fetch('https://openapi.programming-hero.com/api/quiz')}
	// 		/>
	// 		<Route
	// 			path='/topics'
	// 			element={<Topics />}
	// 			loader={() => fetch('https://openapi.programming-hero.com/api/quiz')}

	// 	</Route>
	// );
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			children: [
				{
					index: true,
					element: <Topics />,
					loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
				},
				{
					path: '/topics',
					element: <Topics />,
					loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
				},
				{
					path: `/topics/:topicId`,
					element: <Questions />,
					loader: async ({ params }) =>
						fetch(
							`https://openapi.programming-hero.com/api/quiz/${params.topicId}`
						),
				},
				{
					path: '/statistic',
					element: <Statistic />,
					loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
				},
				{
					path: 'blog',
					element: <Blog />,
				},
			],
		},
		{
			path: '*',
			element: (
				<div className='py-5 min-vh-100 bg-light'>
					<h1>404 not found</h1>
				</div>
			),
		},
	]);
	return (
		<div className='App'>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
};

export default App;
