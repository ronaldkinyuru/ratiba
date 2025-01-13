"use client";
import React, { useState, useEffect } from "react";
import styles from "./past.module.css";
import Image from "next/image";
import upcoming_events from "/models/upcoming_events";

const PastEvents = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		setEvents(upcoming_events);
	}, []);

	const handleRSVP = (eventId) => {
		// Placeholder for RSVP functionality, e.g., sending a request to an API or updating state
		alert(`You have RSVP'd for event with ID: ${eventId}`);
	};

	return (
		<div className={styles.upcoming_events}>
			<h2>Past Events</h2>
			<div className={styles.events_container}>
				<div className={styles.events}>
					{events.map((event) => (
						<div key={event.id} className={styles.card}>
							<Image
								src={event.image || "/placeholder-image.jpg"} // Add a placeholder if image is missing
								alt={event.title}
								width={200}
								height={200}
								loading="lazy"
							/>
							<h6>{event.title}</h6>
							<p>{event.date}</p>
							<p>{event.time}</p>
							<p>{event.venue}</p>
							<p>{event.charge}</p>
							{/* RSVP Button */}
							<button
								onClick={() => handleRSVP(event.id)}
								className={styles.rsvp_button}>
								RSVP
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PastEvents;
