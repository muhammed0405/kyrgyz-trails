/** @format */

import axios from 'axios'
import { Dispatch } from 'redux'
import { userActionsTypes } from '../actionTypes/actionTypes'

export const getRegions = () => async (dispatch: Dispatch) => {
	try {
		const response = await axios.get('http://127.0.0.1:8000/api/locations/', {
			timeout: 5000, // Set a reasonable timeout
			headers: {
				Accept: 'application/json, text/plain, */*',
			},
		})
		console.log(response.data)
	} catch (error) {
		console.error('Error fetching data:', error.message)
	}
}

export const getTours = () => async (dispatch: Dispatch) => {
	try {
		const response = await axios.get('http://127.0.0.1:8000/admin/main/tour/')
		dispatch({
			type: userActionsTypes.GET_USER_TOURS_SUCCESS,
			payload: response.data,
		})
		console.log('response.data', response.data)
	} catch (error) {
		dispatch({
			type: userActionsTypes.GET_USER_TOURS_ERROR,
			payload: error.message || 'Error fetching data',
		})
	}
}
