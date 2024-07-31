/** @format */
"use client"
import { useEffect, useState } from "react"

export default function SignupPage() {
	const [csrfToken, setCsrfToken] = useState("")

	useEffect(() => {
		async function fetchCsrfToken() {
			try {
				const response = await fetch("http://127.0.0.1:8000/accounts/signup/")
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}
				const html = await response.text()

				// Create a DOM parser
				const parser = new DOMParser()
				const doc = parser.parseFromString(html, "text/html")

				// Find the CSRF token input
				const csrfInput = doc.querySelector('input[name="csrfmiddlewaretoken"]')

				if (csrfInput) {
					setCsrfToken(csrfInput.value)
				} else {
					console.error("CSRF token not found")
				}
			} catch (error) {
				console.error("Fetching CSRF token failed:", error)
			}
		}

		fetchCsrfToken()
	}, [])

	return (
		<div>
			{csrfToken ? (
				<p>CSRF Token: {csrfToken}</p>
			) : (
				<p>Loading CSRF token...</p>
			)}
		</div>
	)
}
