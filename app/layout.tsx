/** @format */

import type { Metadata } from "next"
import React from "react"
import Providers from "./Redux/CustomProvider"

import "./styles/global.scss"
import Header from "./components/common/header/page"
import Footer from "./components/common/footer/page"
export const metadata: Metadata = {
	title: "Kyrgyz Trails",
	description: "Your guide to Kyrgyzstan",
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Header />
					<main id="main">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
