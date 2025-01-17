"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // for reading URL parameters
import styles from './EventDetails.module.css'; // Import CSS Module

const EventDetails = () => {
    const { event_id, creator_id } = useParams(); // Extract event_id and creator_id from URL
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const url = creator_id 
                    ? `http://127.0.0.1:8000/events/${event_id}/creator/${creator_id}/` 
                    : `http://127.0.0.1:8000/events/${event_id}/`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Event not found or unauthorized');
                }
                const data = await response.json();
                setEvent(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [event_id, creator_id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.event-title}>{event.title}</h1>
            <p className={styles.event-description}>{event.description}</p>

            <div className={styles.event-details}>
                <div className={styles.details-item}><strong>Date:</strong> {event.date}</div>
                <div className={styles.details-item}><strong>Time:</strong> {event.time}</div>
                <div className={styles.details-item}><strong>Venue:</strong> {event.venue}</div>
                <div className={styles.details-item}><strong>Charge:</strong> {event.charge}</div>
            </div>

            {event.image_url && <div className={styles.event-image}><img src={event.image_url} alt={event.title} /></div>}

            <a href="/events" className={styles.view-btn}>Back to Events</a>
        </div>
    );
};

export default EventDetails;

