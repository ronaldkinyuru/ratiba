"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./register.module.css";

const Register = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await fetch(
				`https://djangoratiba-d7e3c1112f97.herokuapp.com/auth/register/`,
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						first_name: firstName,
						last_name: lastName,
						email: email,
						password: password,
						username: username,
					}),
				}
			);

			const data = await response.json();

			if (response.ok) {
				// Registration was successful
				toast.success(
					"Registration successful! Check your email to verify your account",
					{
						position: "top-center",
						autoClose: 5000,
					}
				);
				setTimeout(() => router.push("/auth"), 5000);
			} else {
				// Show error message if registration failed
				const errorMsg = data.message || "Registration failed. Try again.";
				toast.error(errorMsg, {
					position: "top-center",
					autoClose: 3000,
				});
			}
		} catch (error) {
			toast.error("Network error. Please try again later.", {
				position: "top-center",
				autoClose: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className={styles.homeregister}>
			<ToastContainer />
			<h2>Create an Account</h2>
			<form className={styles.registerform} onSubmit={handleSubmit}>
				<div className={styles.inputbox}>
					<input
						type="text"
						placeholder="First Name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</div>
				<div className={styles.inputbox}>
					<input
						type="text"
						placeholder="Last Name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</div>
				<div className={styles.inputbox}>
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className={styles.inputbox}>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className={styles.inputbox}>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button
					type="submit"
					className={styles.register_button}
					disabled={loading}>
					{loading ? "Registering..." : "Register"}
				</button>
			</form>
		</section>
	);
};

export default Register;
