import { useEffect, useState } from 'react';
import './App.css';
import Chart from 'react-apexcharts';
import axios from 'axios';
import React from 'react';

const App = () => {
	const [category, setCategory] = useState();
	const [data, setData] = useState();

	useEffect(() => {
		const name = [];
		const age = [];
		axios
			.get('https://randomuser.me/api/?results=20')
			.then((response) => {
				console.log('response', response);
				response.data.results.map((data) => {
					console.log('data', data);
					name.push(data.name.first);
					age.push(data.dob.age);
				});
				setCategory(name);
				setData(age);
				// 	setObject({
				// 		chart: {
				// 			id: 'apexchart-example',
				// 		},
				// 		xaxis: {
				// 			categories: name,
				// 		},
				// 	});
				// 	setSeries([
				// 		{
				// 			name: 'age',
				// 			data: age,
				// 		},
				// 	]);
				// });

				console.log('name', name, age);
			})
			.catch((e) => {
				alert(e);
			});
	}, []);
	return (
		<div className="main--container">
			<Chart
				className="chart--display"
				options={{
					chart: {
						id: 'apexchart-example',
					},
					xaxis: {
						categories: category,
					},
				}}
				series={[
					{
						name: 'age',
						data: data,
					},
				]}
				type="bar"
				width={600}
				height={400}
			/>
		</div>
	);
};
export default App;
