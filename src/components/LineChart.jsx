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
						toolbar: { show: false },
					},
					stroke: {
						width: 5,
						curve: 'smooth',
						colors: ['#F9C80E'],
					},
					markers: {
						size: 5,
						colors: ['	#FF9800'],
					},
					xaxis: {
						categories: data.map((item) => item.address),
					},
					tooltip: {
						y: {
							formatter: function (val) {
								// Utilisez toFixed(2) pour tronquer au deuxième chiffre après la virgule
								return val.toFixed(3);
							},
						},
					},
					title: {
						text: 'Latitude des POIS',
						align: 'center',
						style: {
							fontSize: '16px',
							fontWeight: '400',
							fontFamily: 'Poppins, sans-serif',
							color: '#444',
						},
					},
					theme: {
						palette: 'palette8', // upto palette10
					},
					dataLabels: {
						enabled: false,
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
				height={200}
				width={600}
			/>
		</div>
	);
}

export default BarChart;
