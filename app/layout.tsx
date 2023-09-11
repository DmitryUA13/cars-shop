import { Navbar,Footer } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cars Shop App',
  description: 'Discover the best car of the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
