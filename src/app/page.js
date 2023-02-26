'use client'
import { Inter } from 'next/font/google'
import './page.module.css'
import Navbar from '../app/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    </>
  )
}
