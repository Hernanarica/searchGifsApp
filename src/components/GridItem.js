import React from 'react';

function GridItem({ image, title }) {
	return (
		<div className="animate__animated animate__delay-1s animate__fadeIn relative overflow-hidden card">
			<div className="card-hover">
				<p className="text-hover text-lg text-center font-medium text-white uppercase">{ title }</p>
			</div>
			<img src={ image } alt={ title } className="aspect-square object-cover" />
		</div>
	);
}

export default GridItem;