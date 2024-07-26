/** @format */
import YssykKul from "../../assets/img/yssyk-kul.jpg"
import Osh from "../../assets/img/osh.jpg"

import { ITourState } from '../Interfaces/tourReducerType'
const initialState : ITourState = {
	tours: [
		{
			id: 1,
			name: "Issyk-Kul",
			shortDescription: "Home to the world's second-largest saline lake",
			longDescription:
				"Issyk-Kul is famous for its beautiful lake surrounded by snow-capped mountains. It offers beaches, hot springs, and various outdoor activities.",
			imageUrl: YssykKul.src,
			rating: 4.8,
			reviews: 230,
			tours: [
				{
					id: 101,
					name: "Lake Shore Excursion",
					description: "Explore the beautiful shores of Issyk-Kul lake",
					duration: 7,
					price: 50,
					guideId: 1,
				},
				{
					id: 102,
					name: "Mountain Hiking Adventure",
					description:
						"Hike in the Tian Shan mountains with breathtaking views",
					duration: 4,
					price: 200,
					guideId: 2,
				},
			],
		},
		{
			id: 2,
			name: "Osh",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl:YssykKul.src,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,	
					imageUrl:Osh.src,
					name: "Osh Bazaar Tour",
				
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: 5,
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
			imageUrl:Osh.src,
					
					description: "Visit the sacred mountain and its historical sites",
					duration: 7,
					price: 60,
					guideId: 4,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
			imageUrl:Osh.src,
					
					description: "Visit the sacred mountain and its historical sites",
					duration: 7,
					price: 60,
					guideId: 4,
				},	{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
			imageUrl:Osh.src,
					
					description: "Visit the sacred mountain and its historical sites",
					duration: 7,
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 3,
			name: "Bishkek",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl:Osh.src,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: 5,
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: 7,
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 4,
			name: "Naaryn",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl:Osh.src,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: 5,
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: 7,
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 5,
			name: "Talas",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl:Osh.src,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: 5,
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: 7,
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 6,
			name: "Batken",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl:Osh.src,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: 5,
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: 7,
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 7,
			name: "Jalal-Abad",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl:Osh.src,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: 5,
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: 7,
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 8,
			name: "Chui",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl:Osh.src,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: 5,
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: 7,
					price: 60,
					guideId: 4,
				},
			],
		},
	],
	loading: false,
	error: null,
}

export const toursReducer = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case "GET_TOURS_SUCCESS":
			return {
				...state,
				tours: [...state.tours, action.payload],
				loading: false,
				error: null,
			}

		case "GET_TOURS_ERROR":
			return { ...state, loading: false, error: action.payload }

		default:
			return state
	}
}
