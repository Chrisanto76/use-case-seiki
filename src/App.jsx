// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from './components/BarChart/';
import LineChart from './components/LineChart/';
import DonutChart from './components/DonutChart/';

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get('https://api.seiki.co/v1/pois', {
				headers: {
					'X-API-KEY':
						'XgxHDnDJGSFLck-puloZZhyDaaycszcpsNjIMLkuX6gXzL5Dsdp1jypopfbvwQx8J-ywLNV0FxEleNIrW2OjgWLM60d9FFQxFlpTg7Glz61BQMVU7PUUob89U-NzltyMB4XsEQ',
				},
			})
			.then((response) => {
				setData(response.data.items);
			})
			.catch((error) => {
				console.error('Erreur lors de la récupération des données:', error);
			});
	}, []);

	return (
		<>
			<h1>SEIKI</h1>
			<div className="main--container">
				<div className="App">
					<div>
						<BarChart data={data} />
					</div>
				</div>
				<div className="App">
					<LineChart data={data} />
				</div>
			</div>
			<div className="App">
				<DonutChart data={data} />
			</div>
		</>
	);
}

export default App;
