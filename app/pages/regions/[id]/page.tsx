/** @format */

"use client"
import Image from "next/image"
import styles from "../../../styles/regions_details.module.scss"
import { useTypedSelectorHook } from "@/app/Redux/customHooks/useTypedSelectorHook"
import { notFound } from "next/navigation"

export default function RegionPage({ params }: { params: { id: string } }) {
	const region = useTypedSelectorHook(state =>
		state.tours.tours.find(r => r.id === parseInt(params.id, 10))
	)

	if (!region) {
		notFound()
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{region.name}</h1>
			<Image
				className={styles.image}
				width={500}
				height={400}
				src={region.imageUrl}
				alt={region.name}
			/>
			<p className={styles.shortDescription}>{region.shortDescription}</p>
			<div className={styles["rating-reviews"]}>
				<span className={styles.rating}>Rating: {region.rating}</span>
				<span className={styles.reviews}>Reviews: {region.reviews}</span>
			</div>
			<h2 className={styles["section-title"]}>About</h2>
			<p>{region.longDescription}</p>
			<h2 className={styles["section-title"]}>Tours</h2>
			{region.tours.map(tour => (
				<div key={tour.id} className={styles.tour}>
					<h3 className={styles["tour-title"]}>{tour.name}</h3>
					<p className={styles["tour-description"]}>{tour.description}</p>
					<p className={styles["tour-duration"]}>Duration: {tour.duration}</p>
					<p className={styles["tour-price"]}>Price: ${tour.price}</p>
				</div>
			))}
		</div>
	)
}
