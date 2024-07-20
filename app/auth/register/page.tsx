/** @format */
"use client"
import React, { useState, ChangeEvent, FormEvent } from "react"
import axios from "axios"
import styles from "../../styles/formStyles.module.scss"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { useRegisterMutation } from "@/app/redux/features/authApiSlice"
const Register = () => {
	const router = useRouter()
	const [register, { isLoading }] = useRegisterMutation()
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		re_password: "",
	})
	const { first_name, last_name, email, password, re_password } = formData

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const [isCorrectEmail, setIsCorrectEmail] = useState<boolean | null>(null)
	const [isCorrectPassword, setIsCorrectPassword] = useState<boolean | null>(
		null
	)

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		register({ first_name, last_name, email, password, re_password })
			.unwrap()
			.then(() => {
				toast.success("Please check email to verify account")
				router.push("/auth/login")
			})
			.catch(() => {
				toast.error("Failed to register account")
			})
	}

	return (
		<div className={styles.formContainer}>
			<form onSubmit={event => onSubmit(event)}>
				<h2>Регистрация</h2>
				<div className={styles.formGroup}>
					<label htmlFor="first_name">Имя:</label>
					<input
						type="text"
						id="first_name"
						name="first_name"
						value={first_name}
						onChange={onChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="last_name">Фамилия:</label>
					<input
						type="text"
						id="last_name"
						name="last_name"
						value={last_name}
						onChange={onChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="password">Пароль:</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={onChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="re_password">Подтвердить пароль:</label>
					<input
						type="password"
						id="re_password"
						name="re_password"
						value={re_password}
						onChange={onChange}
						required
					/>
				</div>
				<button type="submit">Зарегистрироваться</button>
			</form>

			<p>
				Уже есть аккаунт? <Link href={"/auth/login"}>Войдите здесь</Link>
			</p>
		</div>
	)
}

export default Register
