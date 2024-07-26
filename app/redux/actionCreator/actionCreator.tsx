/** @format */

import axios from "axios"
import { Dispatch } from "redux"
import { userActionsTypes } from "../actionTypes/actionTypes"
import { IUserAction, IUserType } from "../Interfaces/interFaces"
export const getUsers =
	() =>
	async (dispatch: Dispatch<IUserAction>): Promise<void> => {
		try {
			const response = await axios.get<IUserType>(
				"https://jsonplaceholder.typicode.com/users"
			)

			dispatch({
				type: userActionsTypes.GET_USER_SUCCESS,
				payload: response.data,
			})
		} catch (error) {
			dispatch({
				type: userActionsTypes.GET_USER_ERROR,
				payload: "it is an Error" || "Error fetching data",
			})
		}
	}

export const getTours = () => async (dispatch: Dispatch) => {
	try {
		const response = await axios.get("http://127.0.0.1:8000/admin/main/tour/")
		dispatch({
			type: userActionsTypes.GET_USER_TOURS_SUCCESS,
			payload: response.data,
		})
		console.log("response.data", response.data)
	} catch (error) {
		dispatch({
			type: userActionsTypes.GET_USER_TOURS_ERROR,
			payload: error.message || "Error fetching data",
		})
	}
}
