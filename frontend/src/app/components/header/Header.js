import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
	return (
		<div className={styles.main}>
			<ul className={styles.list}>
				<Link href="/homepage">
					<li>Home</li>
				</Link>
				<Link href="/about-us">
					<li>About US</li>
				</Link>
				<Link href="/all-events">
					<li>Events</li>
				</Link>
				<Link href="/">
					<li>Create Event</li>
				</Link>
				<Link href="/auth">
					<li>Profile</li>
				</Link>
			</ul>
		</div>
	);
};

export default Header;
