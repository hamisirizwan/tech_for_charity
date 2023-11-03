"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {

  
  const router = useRouter()
  useEffect(() => {
     router.push("/login")
  }, [])

  return (
  <div>
    <h1>redirecting....</h1>
  </div>
  )
}
