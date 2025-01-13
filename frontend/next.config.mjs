/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "djangoratiba-d7e3c1112f97.herokuapp.com",
				pathname: "/media/event_images/**",
			},
		],
	},
};

export default nextConfig;
