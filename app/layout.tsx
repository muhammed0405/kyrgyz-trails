/** @format */

import React from "react"
import Header from "./components/commont/header/page"
import Footer from "./components/commont/footer/page"
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
				<main id="main">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
