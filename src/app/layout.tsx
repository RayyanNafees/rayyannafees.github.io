import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";
import "@/styles/tailwind.css";
export const metadata: Metadata = {
	title: {
		template: "%s - Rayyan Nafees",
		default:
			"Rayyan Nafees - Software designer, founder, and amateur astronaut",
	},
	description: `I'm Rayyan, a software designer and entrepreneur based in New York City. I'm the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.`,
	metadataBase: new URL("https://rayyannafees.githun.io"), // Replace with your actual domain

};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const fullUrl = process.env.NODE_ENV === "development" ? 'https://localhost:3000' : 'https://rayyannafees.githun.io'
	return (
		<html lang="en" className="h-full antialiased" suppressHydrationWarning>
			<head>
				<script defer src="https://unpkg.com/alpinejs"></script>
			</head>
			{fullUrl?.includes('keystatic') ? <body>{children}</body> : <body className="flex h-full bg-zinc-50 dark:bg-black" >
				<Providers>
					<div className="flex w-full">
						<Layout>{children}</Layout>
					</div>
				</Providers>
			</body>}
		</html >
	);
}
