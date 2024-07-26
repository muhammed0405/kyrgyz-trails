import { StaticImageData } from 'next/image'

export interface IRegion {
	id: number

	name: string
	shortDescription: string
	longDescription: string
	imageUrl: string
	rating: number
	reviews: number
	tours: ITour[]
}

export interface ITour {
	id: number
	name: string
	imageUrl ?: string
	description: string
	duration: number
	price: number
	guideId: number

}
export interface ITourState {
	tours: IRegion[]

	loading: boolean
	error: string | null
}
