import React, { useState } from 'react';
import { SearchIcon } from "@heroicons/react/outline";

function SearchGif({ setGifs }) {
	const [ { search }, setSearch ] = useState({
		search: ''
	});
	
	const handleInputChange = ({ target }) => {
		setSearch({
			[target.name]: target.value
		});
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (search.length === 0) return;
		
		setGifs(gifs => [ search, ...gifs ]);
		
		setSearch({
			search: ''
		});
	};
	
	return (
		<>
			<form action="#" className="flex flex-col gap-2 md:flex-row max-w-md m-auto md:max-w-xl" onSubmit={ handleSubmit }>
				{/* @formatter:off */}
				<div className="md:w-5/6">
					<label htmlFor="search" className="sr-only">Buscar Gif</label>
					<input type="text"
					       name="search"
					       id="search"
					       autoComplete="off"
					       value={ search }
					       placeholder="Buscar Gif"
					       className="py-2 px-2 block w-full outline-none border-gray-200 rounded border-2 focus:border-blue-500"
					       onChange={ handleInputChange }
					/>
				</div>
				{/* @formatter:on */ }
				<button type="submit" className="flex justify-center items-center gap-1 py-2 bg-blue-600 text-white border-none rounded md:w-1/6">
					<SearchIcon className="h-5" /> Buscar
				</button>
			</form>
		</>
	);
}

export default SearchGif;