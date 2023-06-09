import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const fira = Fira_Code({ subsets: ['latin']})

export const metadata = {
  title: 'NateKrth',
  description: 'Portfolio Web Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
