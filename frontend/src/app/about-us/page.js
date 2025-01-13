import React from "react";
import styles from "./about.module.css";

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<h1 className={styles.title}>About Ratiba Events</h1>
				<p className={styles.description}>
					Welcome to Ratiba Events, your go-to solution for planning,
					organizing, and managing events effortlessly. Whether it is a small
					gathering or a large celebration, our platform is designed to make
					event planning simple and stress-free.
				</p>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Our Mission</h2>
					<p className={styles.sectionText}>
						Our mission at Ratiba Events is to empower individuals and
						organizations to plan, organize, and enjoy events with ease. We aim
						to create a seamless experience for users to create and manage
						events, invite guests, and track RSVPs in one place.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Our Features</h2>
					<div className={styles.featuresGrid}>
						<div className={styles.featureCard}>
							<h3 className={styles.featureTitle}>Event Creation</h3>
							<p className={styles.featureText}>
								Easily create and customize your events with details like time,
								date, location, and image.
							</p>
						</div>

						<div className={styles.featureCard}>
							<h3 className={styles.featureTitle}>RSVP Tracking</h3>
							<p className={styles.featureText}>
								Manage invitations and keep track of who has RSVP for your
								events.
							</p>
						</div>

						<div className={styles.featureCard}>
							<h3 className={styles.featureTitle}>Event Sharing</h3>
							<p className={styles.featureText}>
								Easily share your event with friends and family via a link or
								social media platforms.
							</p>
						</div>
					</div>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Meet Our Team</h2>
					<p className={styles.sectionText}>
						We are a team of passionate developers and event planners working
						together to make event planning easier for everyone.
					</p>

					<div className={styles.teamGrid}>
						<div className={styles.teamCard}>
							<img src="150" alt="Team Member 1" className={styles.teamImage} />
							<h4 className={styles.teamName}>Victor Timbwa</h4>
							<p className={styles.teamRole}>Frontend Developer</p>
						</div>

						<div className={styles.teamCard}>
							<img src="150" alt="Team Member 2" className={styles.teamImage} />
							<h4 className={styles.teamName}>Ronald Kinyuru</h4>
							<p className={styles.teamRole}>UI/UX Designer</p>
						</div>

						<div className={styles.teamCard}>
							<img src="150" alt="Team Member 3" className={styles.teamImage} />
							<h4 className={styles.teamName}>Billy Wakhanu</h4>
							<p className={styles.teamRole}>Backend Developer</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
