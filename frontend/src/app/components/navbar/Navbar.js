"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
	const [username, setUsername] = useState("");

	useEffect(() => {
		// Retrieve the username from local storage
		const storedUsername = localStorage.getItem("username");
		if (storedUsername) {
			setUsername(storedUsername);
		}
	}, []);

	return (
		<div className={styles.main}>
			<ul className={styles.list}>
				<li className={styles.welcome}>
					{username ? `Welcome, ${username}` : "Welcome"}
				</li>
				<li>
					<Link href="/homepage">Sign Out</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
