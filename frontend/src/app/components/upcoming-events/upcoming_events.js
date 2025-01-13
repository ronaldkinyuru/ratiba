"use client";
import React from "react";
import styles from "./upcoming.module.css";
import Image from "next/image";
import upcoming_events from "/models/upcoming_events";
import { useState, useEffect } from "react";

const UpcomingEvents = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		setEvents(upcoming_events);
	}, []);

	return (
		<div className={styles.upcoming_events}>
			<h2>Upcoming Events</h2>
			<div className={styles.events_container}>
				<div className={styles.events}>
					{events.map((event) => (
						<div key={event.id} className={styles.card}>
							<Image
								src={event.image}
								alt={event.name}
								width={200}
								height={200}
								loading="lazy"
							/>
							<h6>{event.title}</h6>
							<p>{event.date}</p>
							<p>{event.time}</p>
							<p>{event.venue}</p>
							<p>{event.charge}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default UpcomingEvents;
