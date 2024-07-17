/** @format */

import React from "react"
import Header from "./components/header/page"
import Footer from "./components/footer/page"
import "./styles/globals.scss"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
