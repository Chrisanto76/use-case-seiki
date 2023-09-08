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
								enabled: true,
								formatter: function (val) {
									return val + '%';
								},
							},
						},
					},

					chart: {
						id: 'apexchart-example',
						stacked: true,
						dropShadow: {
							enabled: true,
							enabledOnSeries: undefined,
							top: 0,
							left: 0,
							blur: 2,
							color: '#000',
							opacity: 0.35,
						},
						toolbar: {
							show: false,
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
								return val.toFixed(2);
							},
						},
					},
					title: {
						text: 'POI average speed',
						align: 'center',
						style: {
							fontSize: '20px',
							fontFamily: 'Poppins, sans-serif',
							fontWeight: '400',
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
					theme: {
						palette: 'palette8',
					},
					dataLabels: {
						enabled: true,
					},
					grid: {
						row: {
							colors: ['#f3f3f3', 'transparent'],
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
				height={300}
				width={700}
			/>
		</div>
	);
}

export default FootfallChart;
