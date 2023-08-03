import './globals.css'
import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/redux/providers'
import OffCanvas from '@/components/ui/offcanvas/offcanvas'


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
          <Providers>
            <OffCanvas />
            {children}
          </Providers>
        </body>
      </html>
    )
  }