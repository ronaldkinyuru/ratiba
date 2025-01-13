"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./event.module.css";

const CreateEvent = () => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [venue, setVenue] = useState("");
	const [charge, setCharge] = useState("free");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const formData = new FormData();
		formData.append("title", title);
		formData.append("date", date);
		formData.append("time", time);
		formData.append("venue", venue);
		formData.append("charge", charge);
		formData.append("description", description);

		// If an image is selected, append it to the formData
		if (image) {
			formData.append("image", image);
		}

		try {
			const response = await fetch(
				"https://djangoratiba-d7e3c1112f97.herokuapp.com/events/create/",
				{
					method: "POST",
					body: formData, // FormData will automatically set the correct Content-Type
				}
			);

			if (response.ok) {
				// Event created successfully
				toast.success("Event created successfully!");
			} else {
				const data = await response.json();
				console.error("Error details:", data);
				toast.error(data.message || "Failed to create event.");
			}
		} catch (error) {
			toast.error("Error submitting the form. Please try again later.");
			console.error("Network error:", error); // Log any network error
		}

		setLoading(false);
	};

	return (
		<div className={styles.main}>
			<ToastContainer /> {/* Toastify container to show the toasts */}
			<form onSubmit={handleSubmit}>
				<h1>Create Event</h1>
				<div className={styles.form_group}>
					<div>
						<label htmlFor="event-name">Event Name</label>
						<input
							type="text"
							id="event-name"
							placeholder="Enter event name"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="event-date">Event Date</label>
						<input
							type="date"
							id="event-date"
							placeholder="Enter event date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className={styles.form_group}>
					<div>
						<label htmlFor="event-time">Event Time</label>
						<input
							type="time"
							id="event-time"
							placeholder="Enter event time"
							value={time}
							onChange={(e) => setTime(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="event-location">Event Location</label>
						<input
							type="text"
							id="event-location"
							placeholder="Enter event location"
							value={venue}
							onChange={(e) => setVenue(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className={styles.form_group}>
					<div>
						<input type="file" onChange={handleImageChange} />
					</div>
					<div>
						<label htmlFor="event-description">Event Description</label>
						<textarea
							id="event-description"
							placeholder="Enter event description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className={styles.form_group}>
					<div>
						<label htmlFor="event-charge">Charge</label>
						<select
							id="event-charge"
							value={charge}
							onChange={(e) => setCharge(e.target.value)}>
							<option value="free">Free</option>
							<option value="pay">Pay</option>
						</select>
					</div>
				</div>
				<button type="submit" disabled={loading}>
					{loading ? "Creating..." : "Create Event"}
				</button>
			</form>
		</div>
	);
};

export default CreateEvent;
