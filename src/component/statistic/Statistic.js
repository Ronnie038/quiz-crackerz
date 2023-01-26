import React from 'react';
import './Statistic.css';

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	LabelList,
} from 'recharts';
import { useLoaderData } from 'react-router-dom';

const renderCustomizedLabel = (props) => {
	const { x, y, width, value } = props;
	const radius = 10;

	return (
		<g>
			<circle cx={x + width / 2} cy={y - radius} r={radius} fill='#8884d8' />
			<text
				x={x + width / 2}
				y={y - radius}
				fill='#FF0000'
				textAnchor='middle'
				dominantBaseline='middle'
			>
				{value.split(' ')[1]}
			</text>
		</g>
	);
};
const Statistic = () => {
	const datas = useLoaderData();
	const { data } = datas;
	console.log(data);
	// const data = [
	// 	{
	// 		name: 'Page A',
	// 		uv: 4000,
	// 		pv: 2400,
	// 		amt: 2400,
	// 	},
	// 	{
	// 		name: 'Page B',
	// 		uv: 3000,
	// 		pv: 1398,
	// 		amt: 2210,
	// 	},
	// 	{
	// 		name: 'Page C',
	// 		uv: 2000,
	// 		pv: 9800,
	// 		amt: 2290,
	// 	},
	// 	{
	// 		name: 'Page D',
	// 		uv: 2780,
	// 		pv: 3908,
	// 		amt: 2000,
	// 	},
	// 	{
	// 		name: 'Page E',
	// 		uv: 1890,
	// 		pv: 4800,
	// 		amt: 2181,
	// 	},
	// 	{
	// 		name: 'Page F',
	// 		uv: 2390,
	// 		pv: 3800,
	// 		amt: 2500,
	// 	},
	// 	{
	// 		name: 'Page G',
	// 		uv: 3490,
	// 		pv: 4300,
	// 		amt: 2100,
	// 	},
	// ];
	return (
		<div className='statistics min-vh-100'>
			<div className='statistics_child'>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey='total' fill='#8884d8' minPointSize={5}>
						<LabelList dataKey='name' content={renderCustomizedLabel} />
					</Bar>
					<Bar dataKey='id' fill='#82ca9d' minPointSize={10} />
				</BarChart>
			</div>
		</div>
	);
};

export default Statistic;
