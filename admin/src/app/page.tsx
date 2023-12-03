"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useLayoutEffect } from 'react'

export default function Home() {

  
  const router = useRouter()
  useLayoutEffect(() => {
     router.push("/login")
  }, [])

  return (
  <div>
    <h1>redirecting....</h1>
  </div>
  )
}
