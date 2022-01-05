import React from 'react';
import SearchGif from "./SearchGif";

function TheHeader() {
	return (
		<>
			<header>
				<div className="px-1">
					<SearchGif />
				</div>
			</header>
		</>
	);
}

export default TheHeader;