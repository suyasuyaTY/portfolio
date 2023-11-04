import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: "suyasuya_TY",
  description: "suyasuya_TY's portfolio site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel='icon' href='/icon.jpg' />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
