// BarChart.jsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

function BarChart({ data }) {
	return (
		<div>
			<ReactApexChart
				options={{
					plotOptions: {
						line: {
							distributed: true,
							horizontal: true,
							barHeight: '70%',
							borderRadius: 10,
							dataLabels: {
								position: 'top',
							},
						},
					},
					chart: {
						id: 'apexchart-example',
					},
					stroke: {
						width: 5,
						curve: 'smooth',
					},
					markers: {
						size: 5,
						colors: ['#6EEAE7'],
					},
					xaxis: {
						categories: data.map((item) => item.address),
					},

					tooltip: {
						y: {
							formatter: function (val) {
								// Utilisez toFixed(2) pour tronquer au deuxième chiffre après la virgule
								return val.toFixed(7);
							},
						},
					},
					title: {
						text: 'Latitude des POIS',
						align: 'left',
						style: {
							fontSize: '20px',
							color: '#444',
						},
					},

					// fill: {
					// 	type: 'gradient',
					// 	gradient: {
					// 		shade: 'dark',
					// 		gradientToColors: ['#FDD835'],
					// 		shadeIntensity: 1,
					// 		opacityFrom: 1,
					// 		opacityTo: 1,
					// 		stops: [0, 100, 100, 100],
					// 	},
					// },
				}}
				series={[
					{
						name: 'latitude',
						data: data.map((item) => item.lat),
					},
				]}
				type="line"
				height={350}
			/>
		</div>
	);
}

export default BarChart;
