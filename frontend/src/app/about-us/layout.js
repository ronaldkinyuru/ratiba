import "../globals.css";
import Header from "../components/header/Header";

export const metadata = {
	title: "Ratiba Events",
	description: "Ratiba Events is a platform for creating and managing events.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
