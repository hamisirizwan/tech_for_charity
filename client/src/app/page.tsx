
import Banner from '@/components/home/sections/Banner'
import CTA from '@/components/home/sections/CTA'
import OurCauses from '@/components/home/sections/OurCauses'
import Stats from '@/components/home/sections/Stats'
import Team from '@/components/home/sections/Team'
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
      <OurCauses />
      <Stats />
      <Team />
      <CTA />
    </main>
  )
}
