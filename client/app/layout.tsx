import '@/styles/globals.css'
import {untitledSans} from '@/lib/fonts'
import {Provider} from '@/app/components'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Users and roles'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={untitledSans.className}>
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  )
}
