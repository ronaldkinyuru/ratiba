import "../globals.css";

export const metadata = {
	title: "Ratiba Events",
	description: "Ratiba Events is a platform for creating and managing events.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
