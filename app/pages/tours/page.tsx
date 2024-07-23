/** @format */
"use client"
import { useTypedSelectorHook } from "@/app/Redux/customHooks/useTypedSelectorHook"
import Link from "next/link"
import React from "react"

export default function Page() {
	const regions = useTypedSelectorHook(state => state.tours.tours)
	return (
		<div>
			<h1>Regions of Kyrgyzstan</h1>
			<div>
				{regions.map(region => (
					<Link href={`/pages/regions/${region.id}`} key={region.id}>
						<div className="region-card">
							<h2>{region.name}</h2>
							<p>{region.shortDescription}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
