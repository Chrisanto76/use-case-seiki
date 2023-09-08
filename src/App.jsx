// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from './components/BarChart/';
import LineChart from './components/LineChart/';
import DonutChart from './components/DonutChart/';
import PieChart from './components/PieChart';
import Filter from './components/Filter';

import { Container, Row, Col } from 'react-bootstrap';
import { ThemeProvider } from 'react-bootstrap';

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
			<ThemeProvider
				breakpoints={['xxxl', 'xxl', 'xl', 'md', 'sm', 'xs', 'xxs']}
				minBreakpoint="xxs"
			>
				<div className="header">Use Case Seiki</div>
				<div className="boot--container">
					<Container fluid className="">
						<Row>
							<Col md={12} className="App">
								<Filter data={data} />
							</Col>
						</Row>
						<Row className="">
							<Col md={5} className="App">
								<DonutChart data={data} />
							</Col>
							<Col md={7} className="App">
								<BarChart data={data} />
							</Col>
						</Row>

						<Row>
							<Col md={6} className="App">
								<LineChart data={data} />
							</Col>
							<Col md={6} className="App">
								<PieChart data={data} />
							</Col>
						</Row>
						{/* <Row>
							<MapComponent />
						</Row> */}
					</Container>
				</div>
			</ThemeProvider>
			;
		</>
	);
}

export default App;
