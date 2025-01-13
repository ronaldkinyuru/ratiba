import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/sidebar";

export default function DashboardLayout({ children }) {
	return (
		<section>
			<div className="layout">
				<Sidebar />

				<div className="children">
					<Navbar />
					{children}
				</div>
			</div>
		</section>
	);
}
