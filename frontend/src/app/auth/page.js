"use client";
import styles from "./signin.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		setErrorMessage("");

		try {
			const response = await fetch(
				"https://djangoratiba-d7e3c1112f97.herokuapp.com/auth/login/",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				}
			);

			const data = await response.json();
			console.log(data);
			if (response.ok) {
				// Login successful
				localStorage.setItem("accessToken", data.access);
				localStorage.setItem("refreshToken", data.refresh);
				localStorage.setItem("username", data.username);
				localStorage.setItem("email", data.email);

				// Show success toast message
				toast.success("Login successful!", {
					position: "right",
					autoClose: 3000,
				});

				// Redirect to dashboard
				setTimeout(() => {
					router.push("../dashboard");
				}, 3000);
			} else {
				// Show error message
				setErrorMessage(
					data.message || "Login failed. Please check your credentials."
				);
			}
		} catch (error) {
			setErrorMessage("Network error. Please try again later.");
		}
		setLoading(false);
	};

	return (
		<section className={styles.homelogin}>
			<div className={styles.left}>
				<h1>
					Welcome to <br />
					<span>Ratiba Events</span>
				</h1>
			</div>
			<div className={styles.right}>
				<h3>LOGIN</h3>
				<p>Sign in to continue.</p>
				<form className={styles.loginform} onSubmit={handleSubmit}>
					<div className={styles.inputbox}>
						<input
							type="text"
							placeholder="Enter Email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className={styles.inputbox}>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button type="submit" className="login-button" disabled={loading}>
						{loading ? "Logging in..." : "Login"}
					</button>
					<p>
						<a href="/forgot-password" className={styles.link}>
							Forgot Password?
						</a>
					</p>
					<p>
						Dont have an account? <a href="/auth/signup">Sign Up</a>
					</p>
					<ToastContainer />
				</form>
			</div>
		</section>
	);
};

export default SignIn;
