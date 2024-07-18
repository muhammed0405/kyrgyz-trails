// /** @format */

// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { useRouter } from "next/router"

// const Profile: React.FC = () => {
// 	const [user, setUser] = useState(null)
// 	const router = useRouter()

// 	useEffect(() => {
// 		const fetchUser = async () => {
// 			const token = localStorage.getItem("token")
// 			if (!token) {
// 				router.push("/login")
// 				return
// 			}

// 			try {
// 				const response = await axios.get("http://localhost:8000/api/user/", {
// 					headers: {
// 						Authorization: `Bearer ${token}`,
// 					},
// 				})
// 				setUser(response.data)
// 			} catch (error) {
// 				console.error("Fetch user error:", error)
// 				localStorage.removeItem("token")
// 				router.push("/login")
// 			}
// 		}

// 		fetchUser()
// 	}, [router])

// 	if (!user) {
// 		return <div>Loading...</div>
// 	}

// 	return (
// 		<div>
// 			<h1>Profile</h1>
// 			<p>Email: {user.email}</p>
// 		</div>
// 	)
// }

// export default Profile
