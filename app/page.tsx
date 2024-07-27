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

	const fetchData = async () => {
		try {
			const response = await axios.get('http://127.0.0.1:8000/api/locations/', {
				headers: {
					Accept: 'application/json',
					Authorization: 'Basic YWRtaW46MQ==',
					'X-CSRFToken':
						'v4pgv6dma9yINO2iflZxsIxIoLkOUgZGaIZl0HTMqYQyPd8S5fpqujuxiaReBKga',
				},
			})
			console.log(response.data)
		} catch (error) {
			if (error.response) {
				console.error('Response error:', error.response.data)
				console.error('Response status:', error.response.status)
				console.error('Response headers:', error.response.headers)
			} else if (error.request) {
				console.error('Request error:', error.request)
			} else {
				console.error('Error message:', error.message)
			}
			console.error('Config:', error.config)
		}
	}

	useEffect(() => {
		fetchData()
		// getRegions()
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
