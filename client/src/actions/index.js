import axios from 'axios';

import {
	FETCH_STRAIN_START,
	FETCH_STRAIN_SUCCESS,
	FETCH_STRAIN_FAILURE
} from './types';

export const getStrains = () => dispatch => {
	console.log('getStrains');
	dispatch({ type: FETCH_STRAIN_START });

	axios.get('https://api.otreeba.com/v1/strains')
		.then(res => {
			dispatch({
				type: FETCH_STRAIN_SUCCESS,
				payload: res.data.data
			});
		})
		.catch(err => dispatch({ type: FETCH_STRAIN_FAILURE, payload: err.response.data }));
};
