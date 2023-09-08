import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = ({ data }) => {
	const options = {
		chart: {
			type: 'donut',
			toolbar: {
				show: false,
			},
		},
		labels: data.map((item) => item.address),
		legend: {
			show: true,
			position: 'bottom',
			horizontalAlign: 'center',
			fontWeight: '200',
		},
		theme: {
			palette: 'palette1',
		},

		title: {
			text: 'POI Average daily flow',
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
						width: 500,
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
				height={400}
				width={500}
			/>
		</div>
	);
};

export default DonutChart;
