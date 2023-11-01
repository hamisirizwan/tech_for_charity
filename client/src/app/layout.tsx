"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/globals/NavBar'
import Footer from '@/components/globals/Footer'
import DonationModal from '@/components/globals/DonationModal'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <DonationModal />
        <Toaster 
  position="top-center"
  reverseOrder={false}
/>
        <Footer />
        </body>
    </html>
  )
}
