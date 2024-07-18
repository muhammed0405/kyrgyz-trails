/** @format */

import type { Metadata } from 'next'
import React from 'react'
import Footer from './components/commont/footer/page'
import Header from './components/commont/header/page'
import Provider from './redux/provider'
import './styles/globals.scss'

export const metadata: Metadata = {
	title: 'Kyrgyz Trails',
	description: 'Your guide to Kyrgyzstan',
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<Provider>
					<Header />
					<main id='main'>{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
