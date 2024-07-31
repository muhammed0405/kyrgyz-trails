/** @format */

'use client'
import { UseTypedDispatch } from '@/app/Redux/customHooks/useTypedDispatch'
import { useTypedSelectorHook } from '@/app/Redux/customHooks/useTypedSelectorHook'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useEffect } from 'react'
import styles from '../../../styles/regions_details.module.scss'
export default function RegionPage({ params }: { params: { id: string } }) {
	const tour = useTypedSelectorHook((state) => state.tours.tours)
	const { getTours, getRegions } = UseTypedDispatch()

	const region = useTypedSelectorHook((state) => state.tours.regions)

	const filteredRegion = region.find((r) => r.id === parseInt(params.id, 10))

	if (!region) {
		notFound()
	}
	useEffect(() => {
		getTours()
		getRegions()
	}, [])

	console.log('region', region)
	console.log('filteredRegion', filteredRegion)
	console.log('tour', tour)
	return (
		<div className={styles.container}>
			<div className='region'>
				<div key={filteredRegion?.id}>
					{/* <p>{filteredRegion?.id}</p> */}
					<h1>{filteredRegion?.name}</h1>

					<Image
						src={filteredRegion?.image}
						alt={filteredRegion?.name}
						width={500}
						height={500}
					/>
					<p>{filteredRegion?.content}</p>
				</div>

				<div>
					<p>Все туры в регионе</p>
					{tour.map((t) => (
						<div className={styles.toursCard} key={t.id}>
							<Link href={`/pages/tour_details/${t.id}`}>
              <p>{t.id}</p>
								<Image
                  className={styles.image}
									src={t.images}
									alt={t.itinerary.title}
									width={500}
									height={500}
								/>
							</Link>
							<p>{t.title}</p>

							<p>{t.guide.full_name}</p>
							<p>{t.price}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
