/** @format */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/formStyles.module.scss";
import axios from "axios";
import { API_URL } from "../../config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const login = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const email = (document.getElementById("loginEmail") as HTMLInputElement)
      ?.value;
    const password = (
      document.getElementById("loginPassword") as HTMLInputElement
    )?.value;

    if (!email || !password) {
      console.error("All fields are required");
      return;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Token:", data.token);
        setToken(data.token);
      } else {
        console.error("Login failed:", data.message);
        setError(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login");
    }
    console.log("Login:", { email, password });
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2 className={styles.authTitle}>Войти</h2>
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
        <button onClick={login} type="submit" className={styles.submitButton}>
          Войти
        </button>
        {token && <p>Token: {token}</p>}
        <Link href="/auth/register_user" className={styles.switchLink}>
          Нет аккаунта? Регистрация
        </Link>
      </form>
    </div>
  );
}
