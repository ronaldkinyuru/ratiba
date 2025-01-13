"use client";

import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import {
	BiSolidDashboard,
	BiTask,
	BiSpreadsheet,
	BiTransfer,
} from "react-icons/bi";
import Link from "next/link";

const Sidebar = () => {
	const [isCollapsedSidebar, setCollapsedSidebar] = useState(false);

	const toggleSidebarCollapseHandler = () => {
		setCollapsedSidebar((prev) => !prev);
	};

	return (
		<div className="sidebar__wrapper">
			<button className="btn" onClick={toggleSidebarCollapseHandler}>
				{isCollapsedSidebar ? (
					<MdKeyboardArrowRight />
				) : (
					<MdKeyboardArrowLeft />
				)}
			</button>
			<aside className="sidebar" data-collapse={isCollapsedSidebar}>
				<div className="sidebar__top">
					<Image
						width={50}
						height={50}
						className="vlogo"
						src="/assets/images/ratiba.svg"
						alt="logo"
					/>
					<Image
						width={50}
						height={50}
						className="vlogo"
						src="/assets/images/ratiba.svg"
						alt="logo"
					/>
				</div>
				<div className="list-navs">
					<div className="top-navs">
						<ul className="sidebar__list">
							<Link href="/homepage">
								<li className="sidebar__item">
									<span className="sidebar__icon">
										<BiSolidDashboard />
									</span>
									<span className="sidebar__name">Homepage</span>
									<span className="tooltiptext">Homepage</span>
								</li>
							</Link>
							<Link href="/dashboard">
								<li className="sidebar__item">
									<span className="sidebar__icon">
										<BiTask />
									</span>
									<span className="sidebar__name">Dashboard</span>
									<span className="tooltiptext">Dashboard</span>
								</li>
							</Link>
							<Link href="/dashboard/events">
								<li className="sidebar__item">
									<span className="sidebar__icon">
										<BiSpreadsheet />
									</span>
									<span className="sidebar__name">Events</span>
									<span className="tooltiptext">Events</span>
								</li>
							</Link>
							<Link href="/dashboard/create-event">
								<li className="sidebar__item">
									<span className="sidebar__icon">
										<BiTransfer />
									</span>
									<span className="sidebar__name">Create Event</span>
									<span className="tooltiptext">Create event</span>
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;
