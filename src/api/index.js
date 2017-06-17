import config from './config'

const API = config.apiKey
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${API}&format=json`

export default function getArtists(country){

	const url = URL.replace(':country', country)

	return fetch(url)	// viene en el navegador	(trae un objeto con un parametro json)
		.then(res => res.json())
		.then(json => json.topartists.artist)				
}	
