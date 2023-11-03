import type { Metadata } from 'next'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'


export const metadata: Metadata = {
    title: 'Humanity First Home',
    description: 'One Smile Matters, Humanity Matters',
  }

export default function DashLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
<main className="relative h-screen overflow-hidden bg-gray-100 ">
  <div className="flex items-start justify-between">
    <SideBar />
    <div className="flex flex-col w-full md:space-y-4">
       <NavBar />
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
      {children}
      </div>
    </div>
  </div>
</main>


        </body>
    </html>
  )
}
