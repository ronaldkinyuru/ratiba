import React from "react";
import styles from "./hero.module.css";

const HeroSection = () => {
	return (
		<div className={styles.hero_banner}>
			<div className={styles.banner_content}>
				<h2>Ratiba Events</h2>
				<p>Create, manage and share your events with ease.</p>
			</div>
		</div>
	);
};

export default HeroSection;
