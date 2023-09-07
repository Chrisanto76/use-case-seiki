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
					yaxis: {
						labels: {
							show: true,
						},
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
						text: 'POI longitudes',
						align: 'center',
						style: {
							fontSize: '20px',
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
							breakpoint: 768,
							options: {
								chart: {
									width: 500, // Largeur du graphique pour les écrans plus petits
								},
								legend: {
									enabled: false,
								},
							},
						},
					],
				}}
				series={[
					{
						name: 'longitude',
						data: data.map((item) => item.lng),
					},
				]}
				type="line"
				height={300}
				width={600}
			/>
		</div>
	);
}

export default BarChart;
