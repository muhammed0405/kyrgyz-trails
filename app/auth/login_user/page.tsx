/** @format */
"use client"
import React, { useState } from "react"
import Link from "next/link"
import styles from "../../styles/formStyles.module.scss"

export default function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle login logic here
		console.log("Login:", { email, password })
	}

	return (
		<div className={styles.authContainer}>
			<form className={styles.authForm} onSubmit={handleSubmit}>
				<h2 className={styles.authTitle}>Login</h2>
				<div className={styles.inputGroup}>
					<label htmlFor="email" className={styles.label}>
						Email
					</label>
					<input
						type="email"
						id="email"
						className={styles.input}
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label htmlFor="password" className={styles.label}>
						Password
					</label>
					<input
						type="password"
						id="password"
						className={styles.input}
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit" className={styles.submitButton}>
					Login
				</button>
				<Link href="/auth/register_user" className={styles.switchLink}>
					Don't have an account? Register
				</Link>
			</form>
		</div>
	)
}
