/** @format */
'use client'
import axios from 'axios'
import Link from 'next/link'
import { useEffect } from 'react'
import Search from './components/search/search'
import { UseTypedDispatch } from './Redux/customHooks/useTypedDispatch'
import { useTypedSelectorHook } from './Redux/customHooks/useTypedSelectorHook'
import styles from './styles/page.module.scss'

export default function Home() {
	const regions = useTypedSelectorHook((state) => state.tours.tours)
	const { getRegions } = UseTypedDispatch()



	useEffect(() => {
		getRegions()
	}, [])
	return (
		<div className={styles.homePage}>
			<section className={styles.hero}>
				<h1>Откройте для себя красоту Кыргызстана</h1>
				<p>
					Планируйте свое путешествие, бронируйте туры и делитесь впечатлениями
				</p>
				<Search />
			</section>

			<section className={styles.featuredDestinations}>
				<h2>Популярные направления</h2>
				<div className={styles.destinationGrid}>
					{['Иссык-Куль', 'Ала-Арча', 'Сон-Куль', 'Джети-Огуз'].map(
						(destination) => (
							<div key={destination} className={styles.destinationCard}>
								<h3>{destination}</h3>
							</div>
						)
					)}
				</div>
			</section>

			<section className={styles.popularTours}>
				<h2>Все области</h2>
				<div className={styles.tourGrid}>
					{regions.map((tour) => (
						<Link href={`/pages/region-details/${tour.id}`} key={tour.id}>
							<div key={tour} className={styles.tourCard}>
								<h3>{tour.name}</h3>
								<h3>{tour.id} id</h3>
							</div>
						</Link>
					))}
				</div>
			</section>
		</div>
	)
}
function useTypedDispatch(): { getRegions: any } {
	throw new Error('Function not implemented.')
}
