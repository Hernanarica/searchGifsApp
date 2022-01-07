import React, { useState } from 'react';
import TheHeader from "../components/TheHeader";
import GridGifs from "../components/GridGifs";

function TodoApp() {
	const [ gifs, setGifs ] = useState([ 'Boku' ]);
	
	return (
		<>
			<TheHeader setGifs={ setGifs } />
			<main className="px-2">
				<section className="flex flex-col gap-8 max-w-6xl m-auto">
					{
						gifs.map(gif => <GridGifs key={ gif } gif={ gif } />)
					}
				</section>
			</main>
		</>
	);
}

export default TodoApp;