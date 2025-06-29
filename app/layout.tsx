import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Lotería Pty",
	description: "Resultados de la Lotería en Panamá",
	openGraph: {
		title: "Lotería Pty",
		description: "Resultados de la Lotería en Panamá",
		type: "website",
		url: "https://lottery-pty.vercel.app",
		images: [
			{
				url: "/img/lottery-product.png",
				width: 1200,
				height: 630,
				alt: "Lotería Pty - Resultados de la Lotería en Panamá"
			}
		]
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
			>
				{children}
			</body>
		</html>
	);
}
