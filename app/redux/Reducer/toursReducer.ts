/** @format */

import { userActionsTypes } from '../actionTypes/actionTypes'
import { ITourState } from '../Interfaces/tourReducerType'
const initialState: ITourState = {
	tours: [],

	loading: false,
	error: null,
}

export const toursReducer = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case userActionsTypes.GET_LOCATIONS:
			return {
				...state,
				tours: [...state.tours, action.payload],
				loading: false,
				error: null,
			}

		case 'GET_TOURS_ERROR':
			return { ...state, loading: false, error: action.payload }

		default:
			return state
	}
}
