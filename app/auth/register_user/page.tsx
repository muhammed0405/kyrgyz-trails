/** @format */

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/formStyles.module.scss";
import axios from "axios";
import { API_URL } from "../../config";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const labels = document.querySelectorAll(`.${styles.label}`);
    labels.forEach((label) => {
      const text = (label as HTMLElement).innerText;
      label.innerHTML = text
        .split("")
        .map(
          (letter: string, idx: number) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  // Регистрация пользователя
  const register = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const fullName = (document.getElementById("fullName") as HTMLInputElement)
      ?.value;
    const password = (document.getElementById("password") as HTMLInputElement)
      ?.value;
    const confirmPassword = (
      document.getElementById("confirmPassword") as HTMLInputElement
    )?.value;

    if (!password || !confirmPassword) {
      console.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register_user",
        {
          email,
          fullName,
          password,
          confirmPassword,
        }
      );
      console.log("User registered successfully");
      const token = response.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error registering user:",
          error.response?.data || error.message
        );
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Регистрация:", { name, email, password, confirmPassword });
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2 className={styles.authTitle}>Регистрация</h2>
        <div className={styles.inputGroup}>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            id="name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="name" className={styles.label}>
            Имя и фамилия
          </label>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="password" className={styles.label}>
            Пароль
          </label>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            id="confirmPassword"
            className={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="confirmPassword" className={styles.label}>
            Подтверждение пароля
          </label>
        </div>
        <button
          onClick={register}
          type="submit"
          className={styles.submitButton}
        >
          Зарегистрироваться
        </button>
        <Link href="/auth/login_user" className={styles.switchLink}>
          Уже есть аккаунт? Войти
        </Link>
      </form>
    </div>
  );
}
