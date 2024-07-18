/** @format */
"use client"
import React, { useState } from "react"
import axios from "axios"
import styles from "../../styles/formStyles.module.scss"
// import { useRouter } from "next/router"

const Login: React.FC = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const response = await axios.post("http://localhost:8000/api/login/", {
				email,
				password,
			})
			localStorage.setItem("token", response.data.token)
			// router.push("/profile")
		} catch (error) {
			console.error("Ошибка авторизации:", error)
		}
	}

	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleLogin}>
				<h2>Авторизация</h2>
				<div className={styles.formGroup}>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="password">Пароль:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Войти</button>
			</form>
		</div>
	)
}

export default Login
