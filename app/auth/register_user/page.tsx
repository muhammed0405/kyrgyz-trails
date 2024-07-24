/** @format */
"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import styles from "../../styles/formStyles.module.scss"

export default function Register() {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	useEffect(() => {
		const labels = document.querySelectorAll(`.${styles.label}`)
		labels.forEach(label => {
			const text = (label as HTMLElement).innerText
			label.innerHTML = text
				.split("")
				.map(
					(letter: string, idx: number) =>
						`<span style="transition-delay:${idx * 50}ms">${letter}</span>`
				)
				.join("")
		})
	}, [])

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
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
					<input
						type="text"
						id="username"
						className={styles.input}
						value={username}
						onChange={e => setUsername(e.target.value)}
						required
						placeholder=" "
					/>
					<label htmlFor="username" className={styles.label}>
						Имя
					</label>
				</div>
				<div className={styles.inputGroup}>
					<input
						type="email"
						id="email"
						className={styles.input}
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
						placeholder=" "
					/>
					<label htmlFor="email" className={styles.label}>
						Электронная почта
					</label>
				</div>
				<div className={styles.inputGroup}>
					<input
						type="password"
						id="password"
						className={styles.input}
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
						placeholder=" "
					/>
					<label htmlFor="password" className={styles.label}>
						Пароль
					</label>
				</div>
				<button type="submit" className={styles.submitButton}>
					Зарегистрироваться
				</button>
				<Link href="/auth/login" className={styles.switchLink}>
					Уже есть аккаунт? Войти
				</Link>
			</form>
		</div>
	)
}
