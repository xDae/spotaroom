import axios from 'axios';

const getRooms = (page = 9) => {
	return axios({
		method: 'get',
		baseUrl: 'https://www.spotahome.com/api/',
		url: `/public/listings/search/homecards/${page}`,
		withCredentials: true
	})
}

export default getRooms;
