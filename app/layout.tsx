import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Portfolio by Tien Anh',
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}