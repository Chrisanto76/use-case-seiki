// import ReactApexChart from 'react-apexcharts';

// import React from 'react';

// const DonutChart = ({ data }) => {
// 	return (
// 		<ReactApexChart
// 			options={{
// 				labels: data.map((item) => item.address),
// 				chart: {
// 					type: 'donut',
// 					toolbar: {
// 						show: true, // Afficher la barre d'outils du graphique
// 					},
// 					title: {
// 						text: 'Average speed of the POIS',
// 						align: 'center',
// 						style: {
// 							fontSize: '16px',
// 							fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
// 							fontWeight: '400',
// 							color: '#444',
// 						},
// 					},
// 					theme: {
// 						palette: 'palette8',
// 					}, // upto palette10
// 				},
// 			}}
// 			series={[
// 				{
// 					name: 'avg_speed_percent',
// 					data: data.map((item) => item.data.traffic.avg_daily_flow),
// 				},
// 			]}
// 			type="donut"
// 			height={300}
// 			width={300}
// 		/>
// 	);
// };

// export default DonutChart;
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = ({ data }) => {
	// Les données doivent être passées sous forme de tableau d'objets avec des étiquettes et des valeurs
	// Exemple : [{ label: "Section 1", value: 30 }, { label: "Section 2", value: 45 }, ...]

	const options = {
		chart: {
			type: 'donut', // Type de graphique Donut
			toolbar: {
				show: false, // Afficher la barre d'outils du graphique
			},
		},
		labels: data.map((item) => item.address), // Les étiquettes de chaque section du Donut
		legend: {
			show: true, // Afficher la légende
			position: 'left', // Position de la légende (peut être modifiée)
		},
		theme: {
			palette: 'palette8', // upto palette10
		},
		title: {
			text: 'Latitude des POIS',
			align: 'left',
			style: {
				fontSize: '16px',
				fontWeight: '400',
				fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
				color: '#444',
			},
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200, // Largeur du graphique pour les écrans plus petits
					},
					legend: {
						position: 'bottom',
					},
				},
			},
		],
	};

	return (
		<div className="donut-chart">
			<ReactApexChart
				options={options}
				series={data.map((item) => item.data.traffic.avg_daily_flow)}
				type="donut"
				height={210}
				width={500}
			/>
		</div>
	);
};

export default DonutChart;
