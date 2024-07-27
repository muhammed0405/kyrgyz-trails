/** @format */

import axios from "axios"
import { Dispatch } from "redux"
import { userActionsTypes } from "../actionTypes/actionTypes"

export const getRegions = () => async (dispatch: Dispatch) => {
	try {
		const response = await axios.get("http://127.0.0.1:8000/api/locations/", {
			withCredentials: true,
		})

		dispatch({
			type: userActionsTypes.GET_LOCATIONS,
			payload: response.data,
		})
		console.log("it is working", response.data)
	} catch (error) {
		dispatch({
			type: userActionsTypes.GET_LOCATIONS_ERROR,
			payload: error.message || "Error fetching data",
		})
		console.error("Error fetching data:", error.message)
	}
}

export const getTours = () => async (dispatch: Dispatch) => {
	try {
		const response = await axios.get(
			"http://127.0.0.1:8000/api/tours/?format=json",
			{
				auth: {
					username: "admin",
					password: "1",
				},
			}
		)
		dispatch({
			type: userActionsTypes.GET_USER_TOURS_SUCCESS,
			payload: response.data,
		})
		console.log("response.data_", response.data)
	} catch (error) {
		dispatch({
			type: userActionsTypes.GET_USER_TOURS_ERROR,
			payload: error.message || "Error fetching data",
		})
	}
}
