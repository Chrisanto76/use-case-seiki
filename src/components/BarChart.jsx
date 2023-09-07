import React from 'react';
import ReactApexChart from 'react-apexcharts';

function FootfallChart({ data }) {
	return (
		<div>
			<ReactApexChart
				options={{
					plotOptions: {
						bar: {
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
						stacked: false,
						dropShadow: {
							enabled: true,
							enabledOnSeries: undefined,
							top: 0,
							left: 0,
							blur: 2,
							color: '#000',
							opacity: 0.35,
						},
					},

					xaxis: {
						categories: data.map((item) => item.data.section.name),
					},
					yaxis: {
						reversed: true,
					},
					tooltip: {
						y: {
							formatter: function (val) {
								// Utilisez toFixed(2) pour tronquer au deuxième chiffre après la virgule
								return val.toFixed(2);
							},
						},
					},
					title: {
						text: 'Average speed of the POIS',
						align: 'center',
						style: {
							fontSize: '16px',
							fontFamily: 'Poppins, sans-serif',
							fontWeight: '400',
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
					theme: {
						palette: 'palette8',
					},
					dataLabels: {
						enabled: true,
					},
					// grid: {
					// 	row: {
					// 		colors: ['#f3f3f3', 'transparent'],
					// 		opacity: 0.5,
					// 	},
					// },
				}}
				series={[
					{
						name: 'average speed',
						data: data.map((item) => item.data.section.avg_speed),
					},
				]}
				type="bar"
				height={200}
				width={500}
			/>
		</div>
	);
}

export default FootfallChart;
