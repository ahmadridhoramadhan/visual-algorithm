import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layouts/MainLayout'

export default function Home() {
  return (
    <Layout titlePage='Home'>
      <p>Home</p>
    </Layout>
  )
}