/** @format */

"use client"
import Image from "next/image"
import styles from "../../../styles/regions_details.module.scss"
import { useTypedSelectorHook } from "@/app/Redux/customHooks/useTypedSelectorHook"
import { notFound } from "next/navigation"
import { useEffect } from "react"
import { UseTypedDispatch } from "@/app/Redux/customHooks/useTypedDispatch"
import { ITour } from "@/app/Redux/Interfaces/tourReducerType"

export default function RegionPage({ params }: { params: { id: string } }) {
	const tour = useTypedSelectorHook(state => state.tours.tour)
	const { getTours } = UseTypedDispatch()

	const region = useTypedSelectorHook(state =>
		state.tours.tours.find(r => r.id === parseInt(params.id, 10))
	)

	if (!region) {
		notFound()
	}
	useEffect(() => {
		getTours()
	}, [])

	console.log("tour", tour)
	return (
		<div className={styles.container}>
			<Image
				className={styles.image}
				width={200}
				height={150}
				src={region.imageUrl}
				alt={region.name}
			/>
			<h1 className={styles.title}>{region.name}</h1>
			<p className={styles.shortDescription}>{region.shortDescription}</p>
			<div className={styles["rating-reviews"]}>
				<span className={styles.rating}>Rating: {region.rating}</span>
				<span className={styles.reviews}>Reviews: {region.reviews}</span>
			</div>
			<h2 className={styles["section-title"]}>About</h2>
			<p>{region.longDescription}</p>
			<h2 className={styles["section-title"]}>Tours</h2>
			<div className={styles.tourCardsWrapper}>
				{region.tours.map((tour: ITour) => (
					<div key={tour.id} className={styles.tourCard}>
						<Image
							className={styles["tour-image"]}
							width={200}
							height={150}
							src={tour.imageUrl}
							alt={tour.name}
						/>
						<h3 className={styles["tour-title"]}>{tour.name}</h3>

						<p className={styles["tour-description"]}>{tour.description}</p>
						<p className={styles["tour-duration"]}>Duration: {tour.duration}</p>
						<p className={styles["tour-price"]}>Price: ${tour.price}</p>
					</div>
				))}
			</div>
		</div>
	)
}
