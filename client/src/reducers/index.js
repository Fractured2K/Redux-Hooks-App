import {
	FETCH_STRAIN_START,
	FETCH_STRAIN_SUCCESS,
	FETCH_STRAIN_FAILURE
} from '../actions/types';

const initialState = {
	strains: [],
	errors: '',
	isFetching: false
};

export const rooterReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_STRAIN_START:
			return {
				...state,
				errors: '',
				isFetching: true
			};
		case FETCH_STRAIN_SUCCESS:
			return {
				...state,
				errors: '',
				isFetching: false,
				strains: payload
			};
		case FETCH_STRAIN_FAILURE:
			return {
				...state,
				errors: payload,
				isFetching: false
			};
		default:
			return state;
	}
};
