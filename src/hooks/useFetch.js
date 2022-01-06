import React, { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

export function useFetch(gifName) {
	const [ state, setGifs ] = useState({
		data: [],
		loading: true
	});
	
	useEffect(() => {
		getGifs(gifName).then(res => {
			setGifs({
				data: res,
				loading: false
			});
		});
	}, [ gifName ]);
	
	return state;
}