import Banner from '@/components/home/sections/Banner'
import CTA from '@/components/home/sections/CTA'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Tech For Charity',
  description: 'One Smile Matters | Humanity matters',
}

export default function Home() {
  return (
    <main >
      <Banner />
      <CTA />
    </main>
  )
}
