import React from 'react';
import SearchGif from "./SearchGif";

function TheHeader() {
	return (
		<>
			<header>
				<div className="px-2 py-2">
					<SearchGif />
				</div>
			</header>
		</>
	);
}

export default TheHeader;