/** @format */

"use client"
import axios from "axios"
import styles from "../../styles/formStyles.module.scss"
import { useState, ChangeEvent, FormEvent } from "react"
import Image from "next/image"

interface Location {
	name: string
	title: string
	content: string
	images: File[]
}

interface Description {
	people: number
	activityLevel: string
	comfortLevel: string
	language: string[]
	journey: string
}

interface Itinerary {
	place: string
	description: string
	images: File[]
}

interface PlaceToLive {
	description: string
	images: File[]
}

interface TourData {
	title: string
	images: File[]
	included: string
	not_included: string
	price: string
	guide: string
	location: Location[]
	description: Description
	itinerary: Itinerary[]
	place_to_live: PlaceToLive[]
}

const TourForm = () => {
	const [tourData, setTourData] = useState<TourData>({
		title: "",
		images: [],
		included: "",
		not_included: "",
		price: "",
		guide: "",
		location: [
			{
				name: "",
				title: "",
				content: "",
				images: [],
			},
		],
		description: {
			people: 0,
			activityLevel: "",
			comfortLevel: "",
			language: [],
			journey: "",
		},
		itinerary: [
			{
				place: "",
				description: "",
				images: [],
			},
		],
		place_to_live: [
			{
				description: "",
				images: [],
			},
		],
	})

	const handleFileChange = (
		e: ChangeEvent<HTMLInputElement>,
		section: string,
		index?: number
	) => {
		const files = Array.from(e.target.files || [])
		setTourData(prevData => {
			if (section === "images") {
				return { ...prevData, images: [...prevData.images, ...files] }
			} else if (section === "location" && typeof index === "number") {
				const updatedLocation = [...prevData.location]
				updatedLocation[index].images = [
					...updatedLocation[index].images,
					...files,
				]
				return { ...prevData, location: updatedLocation }
			} else if (section === "itinerary" && typeof index === "number") {
				const updatedItinerary = [...prevData.itinerary]
				updatedItinerary[index].images = [
					...updatedItinerary[index].images,
					...files,
				]
				return { ...prevData, itinerary: updatedItinerary }
			} else if (section === "place_to_live" && typeof index === "number") {
				const updatedPlaceToLive = [...prevData.place_to_live]
				updatedPlaceToLive[index].images = [
					...updatedPlaceToLive[index].images,
					...files,
				]
				return { ...prevData, place_to_live: updatedPlaceToLive }
			}
			return prevData
		})
	}

	const removeImage = (section: string, index: number, imgIndex?: number) => {
		setTourData(prevData => {
			if (section === "images") {
				return {
					...prevData,
					images: prevData.images.filter((_, i) => i !== index),
				}
			} else if (
				section === "location" &&
				typeof index === "number" &&
				typeof imgIndex === "number"
			) {
				const updatedLocation = [...prevData.location]
				updatedLocation[index].images = updatedLocation[index].images.filter(
					(_, i) => i !== imgIndex
				)
				return { ...prevData, location: updatedLocation }
			} else if (
				section === "itinerary" &&
				typeof index === "number" &&
				typeof imgIndex === "number"
			) {
				const updatedItinerary = [...prevData.itinerary]
				updatedItinerary[index].images = updatedItinerary[index].images.filter(
					(_, i) => i !== imgIndex
				)
				return { ...prevData, itinerary: updatedItinerary }
			} else if (
				section === "place_to_live" &&
				typeof index === "number" &&
				typeof imgIndex === "number"
			) {
				const updatedPlaceToLive = [...prevData.place_to_live]
				updatedPlaceToLive[index].images = updatedPlaceToLive[
					index
				].images.filter((_, i) => i !== imgIndex)
				return { ...prevData, place_to_live: updatedPlaceToLive }
			}
			return prevData
		})
	}

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		index?: number,
		field?: keyof TourData
	) => {
		const { name, value } = e.target
		if (field) {
			setTourData(prevData => ({
				...prevData,
				[field]: (prevData[field] as any[]).map((item, i) =>
					i === index ? { ...item, [name]: value } : item
				),
			}))
		} else if (name.includes(".")) {
			const [objName, key] = name.split(".")
			setTourData(prevData => ({
				...prevData,
				[objName]: { ...prevData[objName], [key]: value },
			}))
		} else {
			setTourData(prevData => ({ ...prevData, [name]: value }))
		}
	}

	const handleArrayChange = (
		field: keyof TourData,
		action: "add" | "remove",
		index?: number
	) => {
		if (action === "add") {
			setTourData(prevData => ({
				...prevData,
				[field]: [
					...prevData[field],
					field === "location"
						? { name: "", title: "", content: "", images: [] }
						: field === "itinerary"
						? { place: "", description: "", images: [] }
						: { description: "", images: [] },
				],
			}))
		} else if (action === "remove") {
			setTourData(prevData => ({
				...prevData,
				[field]: (prevData[field] as any[]).filter((_, i) => i !== index),
			}))
		}
	}

	const username = "admin"
	const password = "1"

	const handleSubmit = async e => {
		e.preventDefault()

		// Ensure locations, itinerary, place_to_live are properly formatted
		const formattedLocations = tourData.location.map(loc => ({
			...loc,
			id: parseInt(loc.id, 10), // Assuming 'id' is the primary key
		}))

		const formattedItinerary = tourData.itinerary.map(item => ({
			...item,
			id: parseInt(item.id, 10), // Assuming 'id' is the primary key
		}))

		const formattedPlaceToLive = tourData.place_to_live.map(place => ({
			...place,
			id: parseInt(place.id, 10), // Assuming 'id' is the primary key
		}))

		const formattedData = {
			...tourData,
			location: formattedLocations,
			price: parseFloat(tourData.price), // Ensure price is a numeric value
			guide: parseInt(tourData.guide, 10),
			description: {
				...tourData.description,
				// Format any nested fields if required
			},
			itinerary: formattedItinerary,
			place_to_live: formattedPlaceToLive,
		}

		try {
			const response = await axios.post(
				"http://127.0.0.1:8000/api/tours/",
				formattedData,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: "Basic " + btoa("admin:1"), // If using Basic Auth
					},
					withCredentials: true,
				}
			)
			console.log(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h2 className={styles.authTitle}>Жаңы тур кошуу</h2>

			<div className={styles.inputGroup}>
				<input
					type="text"
					name="title"
					value={tourData.title}
					onChange={handleChange}
					className={styles.input}
					placeholder=" "
					required
				/>
				<label className={styles.label}>
					<span>Тур аталышы</span>
				</label>
			</div>

			<div className={styles.inputGroup}>
				<input
					type="file"
					name="images"
					onChange={e => handleFileChange(e, "images")}
					className={styles.fileInput}
					multiple
					accept="image/*"
				/>
				<label className={styles.fileLabel}>
					<span>Сүрөттөрдү тандаңыз</span>
				</label>
			</div>

			{tourData.images.length > 0 && (
				<div className={styles.imagePreviewContainer}>
					{tourData.images.map((file, index) => (
						<div key={index} className={styles.imagePreview}>
							<Image
								width={100}
								height={100}
								src={URL.createObjectURL(file)}
								alt={`Preview ${index}`}
							/>
							<button
								type="button"
								onClick={() => removeImage("images", index)}
							>
								Өчүрүү
							</button>
						</div>
					))}
				</div>
			)}

			<div className={styles.inputGroup}>
				<input
					type="text"
					name="included"
					value={tourData.included}
					onChange={handleChange}
					className={styles.input}
					placeholder=" "
				/>
				<label className={styles.label}>
					<span>Камтылган кызматтар</span>
				</label>
			</div>

			<div className={styles.inputGroup}>
				<input
					type="text"
					name="not_included"
					value={tourData.not_included}
					onChange={handleChange}
					className={styles.input}
					placeholder=" "
				/>
				<label className={styles.label}>
					<span>Камтылбаган кызматтар</span>
				</label>
			</div>

			<div className={styles.inputGroup}>
				<input
					type="number"
					name="price"
					value={tourData.price}
					onChange={handleChange}
					className={styles.input}
					placeholder=" "
					required
				/>
				<label className={styles.label}>
					<span>Баасы</span>
				</label>
			</div>

			<div className={styles.inputGroup}>
				<input
					type="number"
					name="guide"
					value={tourData.guide}
					onChange={handleChange}
					className={styles.input}
					placeholder=" "
				/>
				<label className={styles.label}>
					<span>Гид ID'си</span>
				</label>
			</div>

			<h3>Локациялар</h3>
			{tourData.location.map((loc, index) => (
				<div key={index}>
					<div className={styles.inputGroup}>
						<input
							type="text"
							name="name"
							value={loc.name}
							onChange={e => handleChange(e, index, "location")}
							className={styles.input}
							placeholder=" "
						/>
						<label className={styles.label}>
							<span>Локация аты</span>
						</label>
					</div>
					<div className={styles.inputGroup}>
						<input
							type="text"
							name="title"
							value={loc.title}
							onChange={e => handleChange(e, index, "location")}
							className={styles.input}
							placeholder=" "
						/>
						<label className={styles.label}>
							<span>Локация башкы сөзү</span>
						</label>
					</div>
					<div className={styles.inputGroup}>
						<textarea
							name="content"
							value={loc.content}
							onChange={e => handleChange(e, index, "location")}
							className={styles.input}
							placeholder=" "
						/>
						<label className={styles.label}>
							<span>Локация мазмуну</span>
						</label>
					</div>
					<div className={styles.inputGroup}>
						<input
							type="file"
							name="images"
							onChange={e => handleFileChange(e, "location", index)}
							className={styles.fileInput}
							multiple
							accept="image/*"
						/>
						<label className={styles.fileLabel}>
							<span>Сүрөттөрдү тандаңыз</span>
						</label>
					</div>
					{loc.images.length > 0 && (
						<div className={styles.imagePreviewContainer}>
							{loc.images.map((file, imgIndex) => (
								<div key={imgIndex} className={styles.imagePreview}>
									<Image
										width={100}
										height={100}
										src={URL.createObjectURL(file)}
										alt={`Preview ${imgIndex}`}
									/>
									<button
										type="button"
										onClick={() => removeImage("location", index, imgIndex)}
									>
										Өчүрүү
									</button>
								</div>
							))}
						</div>
					)}
					<button
						type="button"
						onClick={() => handleArrayChange("location", "remove", index)}
					>
						Локацияны өчүрүү
					</button>
				</div>
			))}
			<button
				type="button"
				onClick={() => handleArrayChange("location", "add")}
			>
				Локация кошуу
			</button>

			<h3>Сүрөттөмө</h3>
			<div className={styles.inputGroup}>
				<input
					type="number"
					name="description.people"
					value={tourData.description.people}
					onChange={handleChange}
					className={styles.input}
					placeholder=" "
				/>
				<label className={styles.label}>
					<span>Адамдардын саны</span>
				</label>
			</div>
			<div className={styles.inputGroup}>
				<input
					type="text"
					name="description.activityLevel"
					value={tourData.description.activityLevel}
					onChange={handleChange}
					className={styles.input}
					placeholder=" "
				/>
				<label className={styles.label}>
					<span>Активдүүлүк деңгээли</span>
				</label>
			</div>
			<div className={styles.inputGroup}>
				<input
					type="text"
					name="description.comfortLevel"
					value={tourData.description.comfortLevel}
					onChange={handleChange}
					className={styles.input}
					placeholder=" "
				/>
				<label className={styles.label}>
					<span>Комфорт деңгээли</span>
				</label>
			</div>
			<div className={styles.inputGroup}>
				<input
					type="text"
					name="description.language"
					value={tourData.description.language.join(", ")}
					onChange={e =>
						setTourData(prevData => ({
							...prevData,
							description: {
								...prevData.description,
								language: e.target.value.split(", "),
							},
						}))
					}
					className={styles.input}
					placeholder=" "
				/>
				<label className={styles.label}>
					<span>Тилдер (үтүр менен бөлүңүз)</span>
				</label>
			</div>
			<div className={styles.inputGroup}>
				<input
					type="text"
					name="description.journey"
					value={tourData.description.journey}
					onChange={handleChange}
					className={styles.input}
					placeholder=" "
				/>
				<label className={styles.label}>
					<span>Саякат</span>
				</label>
			</div>

			<h3>Маршрут</h3>
			{tourData.itinerary.map((item, index) => (
				<div key={index}>
					<div className={styles.inputGroup}>
						<input
							type="text"
							name="place"
							value={item.place}
							onChange={e => handleChange(e, index, "itinerary")}
							className={styles.input}
							placeholder=" "
						/>
						<label className={styles.label}>
							<span>Жер</span>
						</label>
					</div>
					<div className={styles.inputGroup}>
						<textarea
							name="description"
							value={item.description}
							onChange={e => handleChange(e, index, "itinerary")}
							className={styles.input}
							placeholder=" "
						/>
						<label className={styles.label}>
							<span>Сүрөттөмө</span>
						</label>
					</div>
					<div className={styles.inputGroup}>
						<input
							type="file"
							name="images"
							onChange={e => handleFileChange(e, "itinerary", index)}
							className={styles.fileInput}
							multiple
							accept="image/*"
						/>
						<label className={styles.fileLabel}>
							<span>Сүрөттөрдү тандаңыз</span>
						</label>
					</div>
					{item.images.length > 0 && (
						<div className={styles.imagePreviewContainer}>
							{item.images.map((file, imgIndex) => (
								<div key={imgIndex} className={styles.imagePreview}>
									<Image
										width={100}
										height={100}
										src={URL.createObjectURL(file)}
										alt={`Preview ${imgIndex}`}
									/>
									<button
										type="button"
										onClick={() => removeImage("itinerary", index, imgIndex)}
									>
										Өчүрүү
									</button>
								</div>
							))}
						</div>
					)}
					<button
						type="button"
						onClick={() => handleArrayChange("itinerary", "remove", index)}
					>
						Маршрут пунктун өчүрүү
					</button>
				</div>
			))}
			<button
				type="button"
				onClick={() => handleArrayChange("itinerary", "add")}
			>
				Маршрут пунктун кошуу
			</button>

			<h3>Жашоо жери</h3>
			{tourData.place_to_live.map((place, index) => (
				<div key={index}>
					<div className={styles.inputGroup}>
						<textarea
							name="description"
							value={place.description}
							onChange={e => handleChange(e, index, "place_to_live")}
							className={styles.input}
							placeholder=" "
						/>
						<label className={styles.label}>
							<span>Сүрөттөмө</span>
						</label>
					</div>
					<div className={styles.inputGroup}>
						<input
							type="file"
							name="images"
							onChange={e => handleFileChange(e, "place_to_live", index)}
							className={styles.fileInput}
							multiple
							accept="image/*"
						/>
						<label className={styles.fileLabel}>
							<span>Сүрөттөрдү тандаңыз</span>
						</label>
					</div>
					{place.images.length > 0 && (
						<div className={styles.imagePreviewContainer}>
							{place.images.map((file, imgIndex) => (
								<div key={imgIndex} className={styles.imagePreview}>
									<Image
										width={100}
										height={100}
										src={URL.createObjectURL(file)}
										alt={`Preview ${imgIndex}`}
									/>
									<button
										type="button"
										onClick={() =>
											removeImage("place_to_live", index, imgIndex)
										}
									>
										Өчүрүү
									</button>
								</div>
							))}
						</div>
					)}
					<button
						type="button"
						onClick={() => handleArrayChange("place_to_live", "remove", index)}
					>
						Жашоо жерин өчүрүү
					</button>
				</div>
			))}
			<button
				type="button"
				onClick={() => handleArrayChange("place_to_live", "add")}
			>
				Жашоо жерин кошуу
			</button>

			<button type="submit" className={styles.submitButton}>
				Турду кошуу
			</button>
		</form>
	)
}

export default TourForm
