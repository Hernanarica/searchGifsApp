import React from 'react';
import GridItem from "./GridItem";
import { useFetch } from "../hooks/useFetch";

function GridGifs({ gif }) {
	const { data, loading } = useFetch(gif);
	return (
		<>
			{/*@formatter:off*/}
			{ loading && <div className="loader">Loading...</div> }
			<div>
			<h2 className="text-2xl uppercase my-6 font-medium inline-block px-3 py-2 text-purple-600 bg-purple-100 rotate-1 ring-2 ring-purple-600">{ gif }</h2>
				<article className="grilla">
					{ data.length > 0 && data.map(gif => (
						<GridItem key={ gif.id } {...gif} />
					))}
				</article>
			</div>
			{/*@formatter:on*/ }
		</>
	);
}

export default GridGifs;