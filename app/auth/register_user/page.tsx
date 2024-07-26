/** @format */
"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import styles from "../../styles/formStyles.module.scss"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Register() {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password1, setPassword1] = useState("")
	const [password2, setPassword2] = useState("")
	const [error, setError] = useState("")
	const router = useRouter()

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

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError("")

		if (password1 !== password2) {
			setError("Passwords do not match")
			return
		}

		try {
			console.log("Sending POST request to /accounts/signup/")
			const response = await axios.post(
				"http://127.0.0.1:8000/accounts/signup/",
				{
					email,
					username,
					password1,
				},
				{
					withCredentials: true,
				}
			)

			console.log("Registration successful:", response.data)
			// Redirect to login page or dashboard
			router.push("/auth/login")
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.error("Registration error:", error.response.data)
				setError(JSON.stringify(error.response.data))
			} else {
				// Something happened in setting up the request that triggered an Error
				console.error("Error", error)
				setError("An unexpected error occurred")
			}
		}
	}

	return (
		<div className={styles.authContainer}>
			<form className={styles.authForm} onSubmit={handleSubmit}>
				<h2 className={styles.authTitle}>Регистрация</h2>
				{error && <div className={styles.error}>{error}</div>}
				<Link href="/auth/register_guide">
					<h3 className={styles.switchLink}>Если вы Гид то вам сюда</h3>
				</Link>
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
						type="password"
						id="password1"
						className={styles.input}
						value={password1}
						onChange={e => setPassword1(e.target.value)}
						required
						placeholder=" "
					/>
					<label htmlFor="password1" className={styles.label}>
						Пароль
					</label>
				</div>
				<div className={styles.inputGroup}>
					<input
						type="password"
						id="password2"
						className={styles.input}
						value={password2}
						onChange={e => setPassword2(e.target.value)}
						required
						placeholder=" "
					/>
					<label htmlFor="password2" className={styles.label}>
						Подтвердить Пароль
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
