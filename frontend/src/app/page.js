import React from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/hero";
import PastEvents from "./components/past_events/past_events";
import HowItWorks from "./components/guide/guide";
import UpcomingEvents from "./components/upcoming-events/upcoming_events";

const page = () => {
	return (
		<div>
			<Header />
			<HeroSection />
			<PastEvents />
			<UpcomingEvents />
			<HowItWorks />
		</div>
	);
};

export default page;
