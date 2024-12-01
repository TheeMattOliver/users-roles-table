import '@/styles/globals.css'
import {untitledSans} from '@/lib/fonts'
import {Provider} from '@/app/components'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={untitledSans.className}>
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  )
}
