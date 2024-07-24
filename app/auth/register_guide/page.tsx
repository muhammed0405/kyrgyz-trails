/** @format */
"use client"
import React, { useState } from "react"
import styles from "../../styles/formStyles.module.scss"

export default function GuideRegister() {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [resume, setResume] = useState<File | null>(null)
	const [showEmailSent, setShowEmailSent] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Here you would typically send the data to your backend
		// For this example, we'll just simulate a successful submission
		console.log("Guide Register:", {
			firstName,
			lastName,
			email,
			password,
			resume,
		})
		setShowEmailSent(true)
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setResume(e.target.files[0])
		}
	}

	return (
		<div className={styles.authContainer}>
			<form className={styles.authForm} onSubmit={handleSubmit}>
				<h2 className={styles.authTitle}>Регистрация Гида </h2>
				<div className={styles.inputGroup}>
					<label htmlFor="firstName" className={styles.label}>
						Имя
					</label>
					<input
						type="text"
						id="firstName"
						className={styles.input}
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label htmlFor="lastName" className={styles.label}>
						Фамилия
					</label>
					<input
						type="text"
						id="lastName"
						className={styles.input}
						value={lastName}
						onChange={e => setLastName(e.target.value)}
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label htmlFor="email" className={styles.label}>
						Электронная почта
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
						Пароль
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

				<div className={styles.inputGroup}>
					<label htmlFor="resume" className={styles.label}>
						Resume (PDF)
					</label>
					<input
						type="file"
						id="resume"
						className={styles.fileInput}
						onChange={handleFileChange}
						accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
						required
					/>
				</div>
				<button type="submit" className={styles.submitButton}>
					Зарегистрироваться как Гид
				</button>
				{showEmailSent && (
					<div className={styles.successMessage}>
						Registration successful! Please check your email for a verification
						code.
					</div>
				)}
			</form>
		</div>
	)
}
