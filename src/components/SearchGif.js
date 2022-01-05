import React from 'react';

function SearchGif() {
	return (
		<>
			<form action="#" className="border flex flex-col gap-2">
				<div className="border-green">
					<label htmlFor="search" className="sr-only">Buscar Gif</label>
					<input type="text" name="search" id="search" placeholder="Buscar Gif" className="py-2 px-2 block w-full" />
				</div>
				<button type="submit" className=" py-2 bg-blue-600 text-white border-none rounded">Buscar</button>
			</form>
		</>
	);
}

export default SearchGif;