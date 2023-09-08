import React, { useState } from 'react';

function Filter({ data }) {
	// const [data, setData] = useState([]);
	const [filter, setFilter] = useState('');
	const [filteredData, setFilteredData] = useState([]);

	return (
		<>
			<div className="search--bar">
				<input
					type="text"
					name="filter"
					id="filter"
					placeholder="search..."
					value={filter}
					onChange={(e) => {
						setFilter(e.target.value);
						setFilteredData(
							data.filter((item) =>
								item.name.toLowerCase().includes(e.target.value.toLowerCase())
							)
						);
					}}
				/>
			</div>
			<div className="filter--results">
				{filteredData.map((item) => (
					<div className="filter--result" key={item.id}>
						<div className="filter--result--name">{item.name}</div>
					</div>
				))}
			</div>
		</>
	);
}
export default Filter;
