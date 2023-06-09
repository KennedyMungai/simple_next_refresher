import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import { aboutMeData, contactMeLinks, pages } from '../components/data/data'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header name={aboutMeData.name} pages={pages} />
				{children}
				<Footer contactMeLinks={contactMeLinks} />
			</body>
		</html>
	)
}
