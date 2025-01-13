import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata = {
	title: "Ratiba Events",
	description: "Ratiba Events is a platform for creating and managing events.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AntdRegistry>{children}</AntdRegistry>
			</body>
		</html>
	);
}
