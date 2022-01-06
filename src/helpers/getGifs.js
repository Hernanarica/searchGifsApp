import { API, API_KEY } from "../constants/constants";

async function getGifs(nameGifs) {
	const fetchData = await fetch(`${ API }?api_key=${ API_KEY }&limit=10&q=${ nameGifs }`);
	const { data }  = await fetchData.json();
	return data.map(gif => {
		return {
			id: gif.id,
			title: gif.title,
			image: gif.images.downsized_medium.url
		};
	});
}

export default getGifs;