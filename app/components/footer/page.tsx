/** @format */

import React from "react"
import styles from "../../styles/footer.module.scss"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<div className={styles.footerSection}>
					<h3>О нас</h3>
					<p>Kyrgyz Trails - ваш надежный гид по Кыргызстану</p>
				</div>
				<div className={styles.footerSection}>
					<h3>Контакты</h3>
					<p>Email: info@kyrgyztrails.kg</p>
					<p>Телефон: +996 777 888 999</p>
				</div>
				<div className={styles.footerSection}>
					<h3>Следите за нами</h3>
					<div className={styles.socialIcons}>
						<a href="#" className={styles.socialIcon}>
							FB
						</a>
						<a href="#" className={styles.socialIcon}>
							IG
						</a>
						<a href="#" className={styles.socialIcon}>
							TW
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
