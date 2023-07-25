'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {store} from '@/store/index'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neweet',
  description: '(Twitter Clone Built by Hosein Sedaqat 2023)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
