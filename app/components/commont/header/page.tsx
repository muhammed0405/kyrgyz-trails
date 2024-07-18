/** @format */

import React from "react"
import Link from "next/link"
import styles from "../../../styles/header.module.scss"
import Logo from "../../../assets/img/logo.png"
import Image from "next/image"
import BurgerMenu from "../burgerMenu"

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href="/" className={styles.logo}>
					<Image src={Logo} width={50} alt="Logo" />
					<span>Kyrgyz Trails</span>
				</Link>
				<div className={styles.navLinks}>
					<Link href="/pages/destinations">Достопримечательности</Link>
					<Link href="/pages/tours">Туры</Link>
					<Link href="/pages/hotels">Отели</Link>
					<Link href="/pages/restaurants">Рестораны</Link>
				</div>

				<div>
					<button className={styles.burgerBtn}>
						<BurgerMenu />
					</button>
				</div>
				<div className={styles.authLinks}>
					<Link href="/auth/login" className={styles.loginBtn}>
						Войти
					</Link>
					<Link href="/auth/register" className={styles.registerBtn}>
						Регистрация
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Header
