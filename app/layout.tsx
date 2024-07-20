/** @format */

import type { Metadata } from "next"
import React from "react"
import Footer from "./components/common/footer/page"
import Header from "./components/common/header/page"
import Provider from "./redux/provider"
import "./styles/globals.scss"
import { SetUp } from "./components/utils"
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
				<Provider>
					<SetUp />
					<Header />
					<main id="main">{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
