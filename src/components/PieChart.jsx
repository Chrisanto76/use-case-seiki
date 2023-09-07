import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = ({ data }) => {
	const options = {
		chart: {
			type: 'pie',
			toolbar: {
				show: false,
			},
		},
		labels: data.map((item) => item.address),
		legend: {
			show: true,
			position: 'bottom',
			fontWeight: '200',
		},
		theme: {
			palette: 'palette10', // upto palette10
		},

		title: {
			text: 'POI soft mode',
			align: 'center',
			style: {
				fontSize: '20px',
				fontWeight: '400',
				fontFamily: 'Poppins, sans-serif',
				color: '#444',
			},
		},
		responsive: [
			{
				breakpoint: 768,
				options: {
					chart: {
						width: 500, // Largeur du graphique pour les écrans plus petits
					},
					legend: {
						position: 'bottom',
					},
					title: {
						align: 'center',
					},
				},
			},
		],
	};

	return (
		<div className="donut-chart">
			<ReactApexChart
				options={options}
				series={data.map((item) => item.data.mode.soft_mode)}
				type="pie"
				height={400}
				width={500}
			/>
		</div>
	);
};

export default PieChart;
