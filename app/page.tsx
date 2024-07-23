/** @format */
"use client"
import React, { useEffect } from "react"
import Search from "./components/search/search"
import styles from "./styles/page.module.scss"
export default function Home() {
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
					{["Иссык-Куль", "Ала-Арча", "Сон-Куль", "Джети-Огуз"].map(
						destination => (
							<div key={destination} className={styles.destinationCard}>
								<h3>{destination}</h3>
							</div>
						)
					)}
				</div>
			</section>

			<section className={styles.popularTours}>
				<h2>Популярные туры</h2>
				<div className={styles.tourGrid}>
					{[
						"Горные приключения",
						"Культурный тур",
						"Конные прогулки",
						"Экотур",
					].map(tour => (
						<div key={tour} className={styles.tourCard}>
							<h3>{tour}</h3>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
