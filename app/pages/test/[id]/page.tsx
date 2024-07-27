/** @format */
"use client"

import React from "react"
import { UseTypedDispatch } from "@/app/Redux/customHooks/useTypedDispatch"
import { useTypedSelectorHook } from "@/app/Redux/customHooks/useTypedSelectorHook"
import { ITour } from "@/app/Redux/Interfaces/tourReducerType"
import Image from "next/image"
import { notFound } from "next/navigation"
import { useEffect } from "react"
import styles from "../../../styles/regions_details.module.scss"
export default function ThisIsTest({ params }: { params: { id: string } }) {
	const tour = useTypedSelectorHook(state => state.tours.tours)
	const { getTours, getRegions } = UseTypedDispatch()

	const region = useTypedSelectorHook(state => state.tours.regions)

	const filteredRegion = region.find(r => r.id === parseInt(params.id, 10))

	console.log("region_test", filteredRegion)

	if (!region) {
		notFound()
	}
	useEffect(() => {
		getTours()
		getRegions()
	}, [])

	console.log("tour", tour)
	return <div className={styles.container}></div>
}
