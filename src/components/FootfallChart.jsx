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
						align: 'left',
						style: {
							fontSize: '20px',
							color: '#444',
						},
					},
					theme: {
						palette: 'palette8', // upto palette10
					},
					grid: {
						row: {
							colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
							opacity: 0.5,
						},
					},
				}}
				series={[
					{
						name: 'average speed',
						data: data.map((item) => item.data.section.avg_speed),
					},
				]}
				type="bar"
				height={350}
			/>
		</div>
	);
}

export default FootfallChart;
