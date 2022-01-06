import React from 'react';

function GridItem({ image, title }) {
	return (
		<div className="animate__animated animate__delay-1s animate__fadeIn">
			<img src={ image } alt={ title } className="aspect-square object-cover" />
		</div>
	);
}

export default GridItem;