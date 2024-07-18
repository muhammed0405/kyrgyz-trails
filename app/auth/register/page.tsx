/** @format */
"use client"
import React, { useState } from "react"
import axios from "axios"
import styles from "../../styles/formStyles.module.scss"

const Register: React.FC = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [name, setName] = useState("")
	const [isCorrectEmail, setIsCorrectEmail] = useState<boolean | null>(null)
	const [isCorrectPassword, setIsCorrectPassword] = useState<boolean | null>(
		null
	)

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const response = await axios.post("#", {
				email,
				password,
				name,
			})
			alert("Регистрация успешна! Пожалуйста, подтвердите вашу почту.")
			setIsCorrectEmail(true)
			setIsCorrectPassword(true)
		} catch (error) {
			console.error("Ошибка регистрации:", error)
			setIsCorrectEmail(false)
			setIsCorrectPassword(false)
		}
	}

	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleRegister}>
				<h2>Регистрация</h2>
				<div className={styles.formGroup}>
					<label htmlFor="name">Имя:</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
				</div>
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
				<button type="submit">Зарегистрироваться</button>
			</form>
		</div>
	)
}

export default Register
