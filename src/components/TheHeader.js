import React from 'react';
import SearchGif from "./SearchGif";

function TheHeader({ setGifs }) {
	return (
		<>
			<header className="mb-6 mt-3">
				<div className="px-2 py-2">
					<SearchGif setGifs={ setGifs } />
				</div>
			</header>
		</>
	);
}

export default TheHeader;