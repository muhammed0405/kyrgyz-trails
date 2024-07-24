/** @format */
"use client"
import React, { useState } from "react"
import Link from "next/link"
import styles from "../../styles/formStyles.module.scss"

export default function Register() {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle registration logic here
		console.log("Register:", { username, email, password })
	}

	return (
		<div className={styles.authContainer}>
			<form className={styles.authForm} onSubmit={handleSubmit}>
				<h2 className={styles.authTitle}>Регистрация</h2>
				<Link href="/auth/register_guide">
					<h3 className={styles.switchLink}>Если вы Гид то вам сюда</h3>
				</Link>
				<div className={styles.inputGroup}>
					<label htmlFor="username" className={styles.label}>
						Username
					</label>
					<input
						type="text"
						id="username"
						className={styles.input}
						value={username}
						onChange={e => setUsername(e.target.value)}
						required
					/>
				</div>
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
					Зарегистрироваться
				</button>
				<Link href="/auth/login" className={styles.switchLink}>
					Already have an account? Login
				</Link>
			</form>
		</div>
	)
}
